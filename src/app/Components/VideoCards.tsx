import { mockArray } from '../../Mocks/posts';
import Image from 'next/image';

export default function VideoCards({category, search}: {category: string, search: string}) {
  
  const filteredPosts = mockArray.filter((post) =>  
  post.category.toLowerCase() === category.toLowerCase() ||
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {filteredPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map((post, index) => (
      <div key={index} className="border p-4 rounded-lg">
        <div className="w-full h-32 relative mb-2">
          <video width="100%" height="100%" controls>
            <source src={post.thumb} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        {post.thumb ? 
        <div className="w-full h-32 relative mb-2">
          <Image src={post.thumb} alt={post.title} layout="fill" objectFit="contain"/>
        </div> 
        : null}
        <h1>{post.type}</h1>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>Postado em {post.createdAt.toLocaleDateString()}</p>
        {/*<p>{post.description}</p>*/}
        <a href={post.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
      </div>
    ))}
  </div>
  )
}

