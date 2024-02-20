import Image from 'next/image';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

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
  modules: number[];
}

export default function ArticleCards({ info, isModuleEdit, moduleToAdd }: {info: InfoProps, isModuleEdit: boolean, moduleToAdd: number}) {
  const [ articleContent, setArticleContent ] = useState(false);
  const [ isAdm, setIsAdm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const [ contentToEdit, setContentToEdit ] = useState<editProps>({
    type: info.type,
    title: info.title,
    text: info.text,
    link: info.link,
    thumbnail: info.thumbnail,
    modules: []
  });

  const path = usePathname();

  useEffect(() => {
    path === '/dashboard' ? setIsAdm(true) : setIsAdm(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addContentToModule = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3001/module/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify({contentId: info.id, moduleId: moduleToAdd})
    });
    const responseData = await response.json();
    if (response.status === 200) {
      alert('Conteúdo adicionado ao módulo com sucesso!');
    } else {
      alert(responseData.message);
    }
  };

  const deleteContent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Tem certeza de que deseja deletar este conteúdo?')) {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3001/content/${info.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      if (response.status === 200) {
        await response.json();
        alert('Conteúdo deletado com sucesso!, Clique em Atualizar Conteúdo para ver as mudanças');
      } else {
        const errorData = await response.json(); // Get the error details from the response body
        alert(errorData.message)
      }
    }
  };

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
      await response.json();
      alert('Conteúdo editado com sucesso!, Clique em Atualizar Conteúdo para ver as mudanças');
      setIsEdit(false);
    } else {
      const errorData = await response.json(); // Get the error details from the response body
      alert(errorData.message)
    }
  };

    return !isAdm ? (
      <div 
        className={`border p-4 rounded-lg bg-gray-100 dark:bg-gray-900 ${articleContent ? 'fixed top-10 left-10 w-4/5 h-4/5 z-10 bg-white shadow-lg overflow-auto transform scale-120 transition-transform duration-500 ease-in-out' : ''}`}
      >
        {info.thumbnail ? 
        (<div className="w-full h-32 relative mb-2">
          <Image src={info.thumbnail} alt={info.title} layout="fill" objectFit="contain"/>
        </div>)
        : null}
      <h1>Artigo</h1>
      <h2 className="text-xl font-bold">{info.title}</h2>
      <p>Postado em {new Date(info.created_at).toLocaleDateString()}</p>
      {articleContent ? 
        <div className="p-4">
          <p>{info.text}</p>
          <button
            onClick={() => {
              setArticleContent(false)
            }}
            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
          >Fechar Artigo</button>
        </div>
      :
        <div>
          <button
            onClick={() => {
              setArticleContent(true)
            }}
            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
          >Veja o Artigo</button>
        </div>
      }
     </div>
    ) : (
      isEdit ? (
        <div 
        className={`border p-4 rounded-lg bg-gray-100 dark:bg-gray-900 ${articleContent ? 'fixed top-10 left-10 w-4/5 h-4/5 z-10 bg-white shadow-lg overflow-auto transform scale-120 transition-transform duration-500 ease-in-out' : ''}`}
      >
      <form className="space-y-1">
        <label className="block">
          Título:
          <input 
              type="text"
              value={contentToEdit.title}
              minLength={3}
              onChange={(e) => setContentToEdit((prev) => ({...prev, title: e.target.value}))}
              className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4"
            />
        </label>
        <label className="block">
          Texto:
          <textarea 
            value={contentToEdit.text} 
            rows={10}
            minLength={10}
            onChange={(e) => setContentToEdit((prev) => ({...prev, text: e.target.value}))}
            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4"
          />
        </label>
        <label className="block">
          Thumb:
          <input 
            type="text" 
            value={contentToEdit.thumbnail} 
            onChange={(e) => setContentToEdit((prev) => ({...prev, thumbnail: e.target.value}))}
            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4"
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
      <div 
      className={`border p-4 rounded-lg bg-gray-100 dark:bg-gray-900 ${articleContent ? 'fixed top-10 left-10 w-4/5 h-4/5 z-10 bg-white shadow-lg overflow-auto transform scale-120 transition-transform duration-500 ease-in-out' : ''}`}
    >
      {info.thumbnail ? 
      (<div className="w-full h-32 relative mb-2">
        <Image src={info.thumbnail} alt={info.title} layout="fill" objectFit="contain"/>
      </div>)
      : null}
    <h1>Artigo</h1>
    <h2 className="text-xl font-bold">{info.title}</h2>
    <p>Postado em {new Date(info.created_at).toLocaleDateString()}</p>
    {articleContent ? 
      <div className="p-4">
        <p>{info.text}</p>
        <button
          onClick={() => {
            setArticleContent(false)
          }}
          className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Fechar Artigo</button>
      </div>
    :
      <div>
        <button
          onClick={() => {
            setArticleContent(true)
          }}
          className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Veja o Artigo</button>
      </div>
    }
    {(!isModuleEdit) ? (
      <>
        <button
        onClick={() => setIsEdit(true)}
        className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Editar</button>
        <button
          onClick={(e) => deleteContent(e)}
          className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Deletar</button>
      </>      
      ) : (
        <>
        <button
          onClick={() => addContentToModule()}
          className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
        >Adicionar Conteúdo ao Módulo</button>
        </>
      )}
      </div>
    ))
}

