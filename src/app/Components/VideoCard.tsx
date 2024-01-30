import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

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
  const [ isAdm, setIsAdm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const path = usePathname();

    useEffect(() => {
    path === '/dashboard' ? setIsAdm(true) : setIsAdm(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
/*   const serializedPosts = localStorage.getItem('posts'); */
  // let deserializedPosts;
  // let filteredPosts;

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
        {/*<p>{post.description}</p>*/}
        <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
      </div>    
  ) : (
    isEdit ? (
      <div className="border p-4 rounded-lg">
        <h1>Editar {info.type}</h1>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" defaultValue={info.title} className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full"/>
          <label htmlFor="thumb">Link da imagem</label>
          <input type="text" id="thumb" name="thumb" defaultValue={info.thumb} className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full"/>
          <label htmlFor="link">Link do vídeo</label>
          <input type="text" id="link" name="link" defaultValue={info.link} className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full"/>
          <label htmlFor="category">Categoria</label>
          <select name="category" id="category" defaultValue={info.category} className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full">
            <option value="todos">Todos</option>
            <option value="saude">Saúde</option>
            <option value="educacao">Educação</option>
            <option value="politica">Política</option>
            <option value="economia">Economia</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="cultura">Cultura</option>
            <option value="outros">Outros</option>
          </select>
          <label htmlFor="text">Descrição</label>
          <textarea name="text" id="text" defaultValue={info.text} className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt
          -4 w-full"/>
          <button
            onClick={() => setIsEdit(false)}
            className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4"
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
    {/*<p>{post.description}</p>*/}
    <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
    <button
     onClick={() => setIsEdit(true)}
    >Editar</button>
    <button>Deletar</button>
  </div>
  ))  
}

