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

type editProps = {
  type: string;
  title: string;
  text: string;
  link: string;
  thumbnail: string;
}


export default function PodcastCard ({ info, isModuleEdit, moduleToAdd }: {info: InfoProps, isModuleEdit: boolean, moduleToAdd: number}) {

  const [ isAdm, setIsAdm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const [ contentToEdit, setContentToEdit ] = useState<editProps>({
    type: info.type,
    title: info.title,
    text: info.text,
    link: info.link,
    thumbnail: info.thumbnail
  });
  const path = usePathname();

  useEffect(() => {
    path === '/dashboard' ? setIsAdm(true) : setIsAdm(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAcessContent = (url: string) => {
    window.open(url, '_blank');
  }

  const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3001/content/${info.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(contentToEdit)
    });
    if (response.status === 200) {
      const data = await response.json();
      setIsEdit(false);
    } else {
      console.log(`Error: ${response.status}`);
      const errorData = await response.json(); // Get the error details from the response body
      alert(errorData.message)
    }
  };

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
              <input 
                type="text"
                minLength={3}
                value={contentToEdit.title}
                onChange={(e) => setContentToEdit((prev) => ({...prev, title: e.target.value}))}
                className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none"
              />
            </label>
            <label className="block">
              Descrição:
              <input 
                type="text" 
                value={contentToEdit.text}
                minLength={10}
                onChange={(e) => setContentToEdit((prev) => ({...prev, text: e.target.value}))}
                className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none"
              />
            </label>
            <label className="block">
              Link:
              <input 
                type="text" 
                value={contentToEdit.link} 
                onChange={(e) => setContentToEdit((prev) => ({...prev, link: e.target.value}))}
                className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none"
              />
            </label>
            <label className="block">
              thumbnail:
              <input 
                type="text" 
                value={contentToEdit.thumbnail}
                onChange={(e) => setContentToEdit((prev) => ({...prev, thumbnail: e.target.value}))}
                className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none"
              />
            </label>
            <button
              onClick={(e) => saveEdit(e)}
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

  
