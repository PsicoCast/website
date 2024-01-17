import { mockArray } from '../../Mocks/posts';
import Image from 'next/image';

export default function VideoCards({category, search}: {category: string, search: string}) {

  const serializedPosts = localStorage.getItem('posts');
  let deserializedPosts;

  if (serializedPosts) {
    deserializedPosts = JSON.parse(serializedPosts, (key, value) => {
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
        return new Date(value);
      }
      return value;
    });
  
    console.log('Retrieved from LS:', deserializedPosts);
  }

  if (deserializedPosts) {      
    deserializedPosts = deserializedPosts.filter((post: any) => 
    post.type === 'video' && 
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } else {
    deserializedPosts = mockArray.filter((post) =>
    post.type === 'video' &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {deserializedPosts.sort((a: any, b: any) => 
    b.createdAt.getTime() - a.createdAt.getTime()).map((post: any, index: number) => (
      <div key={index} className="border p-4 rounded-lg">
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

