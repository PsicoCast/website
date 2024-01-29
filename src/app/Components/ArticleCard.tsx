import Image from 'next/image';
import { useState } from "react";

interface InfoProps {
  type: string,
  title: string,
  text: string,
  link: string,
  thumb: string,
  category: string,
  createdAt: Date
}

type ArticleProps = {
  info: InfoProps;
}


export default function ArticleCards({ info }: ArticleProps) {
  const [ articleContent, setArticleContent ] = useState(false);
  
 /*  const serializedPosts = localStorage.getItem('posts');
  let deserializedPosts; */
  let filteredPosts;

/*   if (serializedPosts) {
    deserializedPosts = JSON.parse(serializedPosts, (key, value) => {
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
        return new Date(value);
      }
      return value;
    });
  
  }

  if (deserializedPosts) {      
    deserializedPosts = deserializedPosts.filter((post: any) => 
    post.type === 'artigo' && 
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } else {
    filteredPosts = mockArray.filter((post) =>
    post.type === 'artigo' &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } */

    return (
      <div className="border p-4 rounded-lg">
        {info.thumb ? 
        (<div className="w-full h-32 relative mb-2">
          <Image src={info.thumb} alt={info.title} layout="fill" objectFit="contain"/>
        </div>)
        : null}
      <h1>{info.type}</h1>
      <h2 className="text-xl font-bold">{info.title}</h2>
      <p>Postado em {info.createdAt.toLocaleDateString()}</p>
      {articleContent ? 
        <div className="p-4">
          <p>{info.text}</p>
          <button
            onClick={() => {
              setArticleContent(false)
            }}
          >Fechar Artigo</button>
        </div>
      :
        <div>
          <button
            onClick={() => {
              setArticleContent(true)
            }}
          >Veja o Artigo</button>
        </div>
      }
     </div>
    )
}

