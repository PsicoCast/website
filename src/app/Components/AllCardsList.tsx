// 'use client';
import { useEffect, useState } from 'react';
// import { mockArray } from '../../Mocks/posts';
import PodcastCard from './PodcastCard';
import VideoCard from './VideoCard';
import ArticleCard from './ArticleCard';
import { content, module } from '../Types/types';



export default function AllCardsList({search, type, isModuleEdit, moduleToAdd}: {search: string, type:string, isModuleEdit: boolean, moduleToAdd: number}) {

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
      return <div>Loading...</div>;
    } else {
      if (type === 'todos') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData && filteredData
              .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
              .map((post, index) => (
                <div key={index}>
                  {post.type === 'spotify' && <PodcastCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'youtube' && <VideoCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'text' && <ArticleCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}      
                </div>
              ))}
          </div>
        );
      } else if (type === 'youtube' || type === 'spotify' || type === 'text') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData && filteredData
              .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
              .filter(post => post.type === type)
              .map((post, index) => (
                <div key={index}>
                  {post.type === 'spotify' && <PodcastCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'youtube' && <VideoCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}
                  {post.type === 'text' && <ArticleCard info={post} key={index} isModuleEdit={isModuleEdit} moduleToAdd={moduleToAdd}/>}        
                </div>
              ))}
          </div>
        );
      }
    }
  }