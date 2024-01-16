import { useState } from 'react';
import { mockArray } from '../../Mocks/posts';
import Image from 'next/image';

export default function AllCards({category, search}: {category: string, search: string}) {

  const [ articleContent, setArticleContent ] = useState(false);
  const [ content, setContent ] = useState('');

  const local = JSON.stringify(mockArray);
  localStorage.setItem('posts', local);

  const filteredPosts = mockArray.filter(post => 
    search === '' || 
    post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.text.toLowerCase().includes(search.toLowerCase())
  );


  if (!articleContent) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map((post, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <div className="w-full h-32 relative mb-2">
              <Image src={post.thumb} alt={post.title} layout="fill" objectFit="contain"/>
            </div>
            {/* <img src={post.thumb} alt={post.title} className="w-full h-32 object-contain mb-2"/> */}
            <h1>{post.type}</h1>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Postado em {post.createdAt.toLocaleDateString()}</p>
            {post.type === 'artigo' ? (
                        <button
                        onClick={() => {
                          setContent(post.text)
                          setArticleContent(true)
                        }}
                      >Veja o Artigo
                      </button>
            ) : <a href={post.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>}          
          </div>
        ))}
      </div>
      )
  } else {
    return (
      <>
        <p>{content}</p>
        <button
          onClick={() => {
            setContent('')
            setArticleContent(false)
          }}
        >Voltar</button>
      </>
      )
  }
}
