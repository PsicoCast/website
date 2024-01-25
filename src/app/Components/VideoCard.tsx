import Image from 'next/image';

interface InfoProps {
  type: string,
  title: string,
  text: string,
  link: string,
  thumb: string,
  category: string,
  createdAt: Date
}

type VideoProps = {
  info: InfoProps;
}


export default function VideoCard({ info }: VideoProps) {

/*   const serializedPosts = localStorage.getItem('posts'); */
  let deserializedPosts;
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
    post.type === 'video' && 
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } else {
    filteredPosts = mockArray.filter((post) =>
    post.type === 'video' &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } */

  return (
   
      <div className="border p-4 rounded-lg">
        {info.thumb ? 
        <div className="w-full h-32 relative mb-2">
          <Image src={info.thumb} alt={info.title} layout="fill" objectFit="contain"/>
        </div> 
        : null}
        <h1>{info.type}</h1>
        <h2 className="text-xl font-bold">{info.title}</h2>
        <p>infoado em {info.createdAt.toLocaleDateString()}</p>
        {/*<p>{post.description}</p>*/}
        <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
      </div>
    
  )
}

