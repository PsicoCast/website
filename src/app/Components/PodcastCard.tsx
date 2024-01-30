import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

interface InfoProps {
  type: string,
  title: string,
  text: string,
  link: string,
  thumb: string,
  category: string,
  createdAt: Date
}

type PodcastCardProps = {
  info: InfoProps;
}

export default function PodcastCard ({ info }: PodcastCardProps) {

  const [ isAdm, setIsAdm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const path = usePathname();

  useEffect(() => {
    path === '/dashboard' ? setIsAdm(true) : setIsAdm(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
//  /*  const serializedPosts = localStorage.getItem('posts'); */
//   let deserializedPosts;
//   let filteredPosts;

/*   if (serializedPosts) {
    deserializedPosts = JSON.parse(serializedPosts, (key, value) => {
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
        return new Date(value);
      }
      return value;
    });
    // console.log('Retrieved from LS:', deserializedPosts); 
  }

  if (deserializedPosts) {      
    deserializedPosts = deserializedPosts.filter((post: any) => 
    post.type === 'podcast' && 
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  } else {
    filteredPosts = mockArray.filter((post) =>
    post.type === 'podcast' &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.text.toLowerCase().includes(search.toLowerCase())));
  }  */

  return !isAdm ? (
      <div className="border p-4 rounded-lg">
        {info.thumb ? 
        <div className="w-full h-32 relative mb-2">
          <Image src={info.thumb} alt={info.title} layout="fill" objectFit="contain"/>
        </div> 
        : null}
        <h1>{info.type}</h1>
        <h2 className="text-xl font-bold">{info.title}</h2>
        <p>Postado em {info.createdAt.toLocaleDateString()}</p>
        {/*<p>{info.description}</p>*/}
        <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
      </div>
    ) : (
      isEdit ? (
        <div className="border p-4 rounded-lg">
          <form>
            <input type="text" value={info.title} />
            <input type="text" value={info.text} />
            <input type="text" value={info.link} />
            <input type="text" value={info.thumb} />
            <input type="text" value={info.category} />
            <input type="text" value={info.createdAt.toLocaleDateString()} />
            <button
            onClick={() => setIsEdit(false)}
            >Salvar</button>
          </form>
        </div>
      ) : (
      <div className="border p-4 rounded-lg">
      {info.thumb ? 
      <div className="w-full h-32 relative mb-2">
        <Image src={info.thumb} alt={info.title} layout="fill" objectFit="contain"/>
      </div> 
      : null}
      <h1>{info.type}</h1>
      <h2 className="text-xl font-bold">{info.title}</h2>
      <p>Postado em {info.createdAt.toLocaleDateString()}</p>
      {/*<p>{info.description}</p>*/}
      <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
      <button
       onClick={() => setIsEdit(true)}
      >Editar</button>
      <button>Deletar</button>
    </div>
    ))}

  
