import { useEffect, useState } from 'react';
import { mockArray } from '../../Mocks/posts';
import PodcastCard from './PodcastCard';
import VideoCard from './VideoCard';

export default function AllCardsList({search, type}: {search: string, type:string}) {

  const [ articleContent, setArticleContent ] = useState(false);
  const [ content, setContent ] = useState('');

  const posts = mockArray;
  /* console.log('Original Array:', posts); */

  useEffect(() => {

    const serializedPosts = JSON.stringify(posts, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    });
  
    localStorage.setItem('posts', serializedPosts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  let filteredPosts;

  if (type === 'todos') {
    filteredPosts = mockArray.filter(post => 
      search === '' || 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.text.toLowerCase().includes(search.toLowerCase())
    );
  } else if (type === 'video' || type === 'podcast' || type === 'artigo') {
    filteredPosts = mockArray.filter(post => 
      post.type === type && 
      (post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.text.toLowerCase().includes(search.toLowerCase()))
    );
  }


  if (!articleContent) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts && filteredPosts
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((post, index) => (
            <div key={index}>
              {post.type === 'podcast' && <PodcastCard info={post} key={index} />}
              {post.type === 'video' && <VideoCard info={post} key={index} />}
              {/* {post.type === 'article' && <ArticleCard info={post} key={index} />} */}
              
            </div>
          ))}
      </div>
    );
  } else {
    return (
      <>
        <p>{content}</p>
        <button
          onClick={() => {
            setContent('');
            setArticleContent(false);
          }}
        >
          Voltar
        </button>
      </>
    );
  }
}