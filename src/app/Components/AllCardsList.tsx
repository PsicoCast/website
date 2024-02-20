// 'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { mockArray } from '../../Mocks/posts';
import PodcastCard from './PodcastCard';
import VideoCard from './VideoCard';
import ArticleCard from './ArticleCard';
import { content } from '../Types/types';

interface InfoProps {
  id: number;
  type: string;
  title: string;
  text: string;
  link: string;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
}

export default function AllCardsList({search, type, isModuleEdit, moduleToAdd, updateFetch}: {search: string, type:string, isModuleEdit: boolean, moduleToAdd: number, updateFetch: boolean}) {

  const [data, setData] = useState<content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<content[]>([]);

  useEffect(() => {
    const posts = fetch('http://localhost:3001/content')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
    const resolvedPromisse = Promise.resolve(posts);
    resolvedPromisse.then((value) => {
      setData(value.filter((post: any) => 
      search === '' || 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.text.toLowerCase().includes(search.toLowerCase())));
    });
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const posts = fetch('http://localhost:3001/content')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
    const resolvedPromisse = Promise.resolve(posts);
    resolvedPromisse.then((value) => {
      setData(value.filter((post: any) => 
      search === '' || 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.text.toLowerCase().includes(search.toLowerCase())));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFetch]);


  useEffect(() => {
    let filtered = data;
    if (type === 'todos') {
      filtered = data.filter((post: content) => 
        search === '' || 
        post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.text.toLowerCase().includes(search.toLowerCase())
      );
    } else if (type === 'youtube' || type === 'spotify' || type === 'text') {
      filtered = data.filter((post: content) => 
        post.type === type && 
        (post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.text.toLowerCase().includes(search.toLowerCase()))
      );
    }
    setFilteredData(filtered);
  }, [search, type, data]); 


    if (isLoading) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column', // Change the direction to column
          justifyContent: 'flex-start', // Align items to the start vertically
          alignItems: 'center', // Align items to the center horizontally
          height: '100vh',
          paddingTop: '30px' // Add some padding to the top
        }}>
          <Image 
            src="/loading-arrow.png" // Replace with the path to your image
            alt="Loading"
            width={200} // Increase the width
            height={200} // Increase the height
            className="slow-spin" // Apply the slow-spin class
          />
        </div>
      )
    } else {
      if (type === 'todos') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData && filteredData
              .sort((a, b) => {
                if (a.created_at !== undefined && b.created_at !== undefined) {
                  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                } else {
                  // Handle the case where created_at is undefined
                  return 0;
                }
              })
              .map((post, index) => (
                <div key={index}>
                  {post.type === 'spotify' && <PodcastCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'youtube' && <VideoCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'text' && <ArticleCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}      
                </div>
              ))}
          </div>
        );
      } else if (type === 'youtube' || type === 'spotify' || type === 'text') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData && filteredData
              .sort((a, b) => {
                if (a.created_at !== undefined && b.created_at !== undefined) {
                  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                } else {
                  // Handle the case where created_at is undefined
                  return 0;
                }
              })
              .filter(post => post.type === type)
              .map((post, index) => (
                <div key={index}>
                  {post.type === 'spotify' && <PodcastCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'youtube' && <VideoCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'text' && <ArticleCard info={post as InfoProps} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}        
                </div>
              ))}
          </div>
        );
      }
    }
  }