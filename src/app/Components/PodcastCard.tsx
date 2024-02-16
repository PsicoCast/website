import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

interface InfoProps {
  id: number;
  type: string;
  title: string;
  text: string;
  link: string;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
}


export default function PodcastCard ({ info, isModuleEdit, moduleToAdd }: {info: InfoProps, isModuleEdit: boolean, moduleToAdd: number}) {

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

  const handleAcessContent = (url: string) => {
    window.open(url, '_blank');
  }

  return !isAdm ? (
      <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-900">
        {info.thumbnail ? 
        <div className="w-full h-32 relative mb-2">
          <Image src={info.thumbnail} alt={info.title} layout="fill" objectFit="contain"/>
        </div> 
        : null}
        <h1>PodCast</h1>
        <h2 className="text-xl font-bold">{info.title}</h2>
        <p>Postado em {new Date(info.created_at).toLocaleDateString()}</p>
        {/*<p>{info.description}</p>*/}
        <button
         onClick={() => handleAcessContent(info.link)}
         className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Acessar Conteúdo</button>
      </div>
    ) : (
      isEdit ? (
        <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-900">
          <form className="space-y-4">
            <label className="block">
              Título:
              <input type="text" value={info.title} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
            </label>
            <label className="block">
              Descrição:
              <input type="text" value={info.text} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
            </label>
            <label className="block">
              Link:
              <input type="text" value={info.link} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
            </label>
            <label className="block">
              thumbnail:
              <input type="text" value={info.thumbnail} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
            </label>
            <button
              onClick={() => setIsEdit(false)}
              className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
            >
              Salvar
            </button>
          </form>
        </div>
      ) : (
      <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-900">
      {info.thumbnail ? 
      <div className="w-full h-32 relative mb-2">
        <Image src={info.thumbnail} alt={info.title} layout="fill" objectFit="contain"/>
      </div> 
      : null}
      <h1>PodCast</h1>
      <h2 className="text-xl font-bold">{info.title}</h2>
      <p>Postado em {new Date(info.created_at).toLocaleDateString()}</p>
      {/*<p>{info.description}</p>*/}
      <button
        onClick={() => handleAcessContent(info.link)}
        className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
      >Acessar Conteúdo</button>
    {!isModuleEdit ? (
      <>
        <button
        onClick={() => setIsEdit(true)}
        className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Editar</button>
        <button
        className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Deletar</button>
      </>      
      ) : (
        <>
        <button
          onClick={() => alert(`${info.title} adicionado ao módulo ${moduleToAdd}`)}
          className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Adicionar Conteúdo ao Módulo</button>
        </>
      )}
    </div>
    ))}

  
