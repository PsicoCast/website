// 'use client';
import { useEffect, useState } from 'react';
// import { mockArray } from '../../Mocks/posts';
import PodcastCard from './PodcastCard';
import VideoCard from './VideoCard';
import ArticleCard from './ArticleCard';
import { content, module } from '../Types/types';



export default function AllCardsList({search, type, isModuleEdit, moduleToAdd}: {search: string, type:string, isModuleEdit: boolean, moduleToAdd: number}) {

  const [data, setData] = useState<content[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/content')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error:', error));
  }, []);



  /* console.log('Original Array:', posts); */



    // const serializedPosts = JSON.stringify(posts, (key, value) => {
    //   if (value instanceof Date) {
    //     return value.toISOString();
    //   }
    //   return value;
    // });  
    // localStorage.setItem('posts', serializedPosts);
    
    const posts = data;
    let filteredPosts;

    // ...

    if (type === 'todos') {
      filteredPosts = posts.filter((post: any) => // Add type annotation for 'post' parameter
        search === '' || 
        post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.text.toLowerCase().includes(search.toLowerCase())
      );
    } else if (type === 'youtube' || type === 'spotify' || type === 'text') {
      filteredPosts = posts.filter((post: any) => // Add type annotation for 'post' parameter
        post.type === type && 
        (post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.text.toLowerCase().includes(search.toLowerCase()))
      );
    }


    if (type === 'todos') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts && filteredPosts
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
          {posts && posts
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