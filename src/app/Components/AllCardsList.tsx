// 'use client';
import { useEffect, useState } from 'react';
import { mockArray } from '../../Mocks/posts';
import PodcastCard from './PodcastCard';
import VideoCard from './VideoCard';
import ArticleCard from './ArticleCard';

export default function AllCardsList({search, type}: {search: string, type:string}) {

  // const [posts, setPosts] = useState(mockArray);

  /* console.log('Original Array:', posts); */



    // const serializedPosts = JSON.stringify(posts, (key, value) => {
    //   if (value instanceof Date) {
    //     return value.toISOString();
    //   }
    //   return value;
    // });  
    // localStorage.setItem('posts', serializedPosts);
    const posts = mockArray;
    // let filteredPosts;
  
    // if (type === 'todos') {
    //   filteredPosts = posts.filter(post => 
    //     search === '' || 
    //     post.title.toLowerCase().includes(search.toLowerCase()) || 
    //     post.text.toLowerCase().includes(search.toLowerCase())
    //   );
    //   // setPosts(filteredPosts);
    // } else if (type === 'videos' || type === 'podcasts' || type === 'artigos') {
    //   filteredPosts = posts.filter(post => 
    //     post.type === type && 
    //     (post.title.toLowerCase().includes(search.toLowerCase()) || 
    //     post.text.toLowerCase().includes(search.toLowerCase()))
    //   );
    //   // setPosts(filteredPosts);
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps



  console.log(posts[0].type)



    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts && posts
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((post, index) => (
            <div key={index}>
              {type === 'todos' && post.type === 'podcast' && <PodcastCard info={post} key={index} />}
              {type === 'todos' && post.type === 'video' && <VideoCard info={post} key={index} />}
              {type === 'todos' && post.type === 'artigo' && <ArticleCard info={post} key={index} />}
              {type === 'podcasts' && <PodcastCard info={post} key={index} />}
              {type === 'videos' && <VideoCard info={post} key={index} />}
              {type === 'artigos' && <ArticleCard info={post} key={index} />}              
            </div>
          ))}
      </div>
    );
}