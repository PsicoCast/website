import Image from 'next/image';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'


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
  const [ isAdm, setIsAdm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);

  const path = usePathname();

  useEffect(() => {
    path === '/dashboard' ? setIsAdm(true) : setIsAdm(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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

    return !isAdm ? (
      <div 
        className={`border p-4 rounded-lg bg-gray-100 dark:bg-gray-900 ${articleContent ? 'fixed top-10 left-10 w-4/5 h-4/5 z-10 bg-white shadow-lg overflow-auto transform scale-120 transition-transform duration-500 ease-in-out' : ''}`}
      >
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
          <input type="text" value={info.title} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
        </label>
        <label className="block">
          Texto:
          <textarea value={info.text} rows={10} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
        </label>
        <label className="block">
          Link:
          <input type="text" value={info.link} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
        </label>
        <label className="block">
          Thumb:
          <input type="text" value={info.thumb} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
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
      <div 
      className={`border p-4 rounded-lg bg-gray-100 dark:bg-gray-900 ${articleContent ? 'fixed top-10 left-10 w-4/5 h-4/5 z-10 bg-white shadow-lg overflow-auto transform scale-120 transition-transform duration-500 ease-in-out' : ''}`}
    >
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
   <button
    onClick={() => setIsEdit(true)}
    className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
   >Editar</button>
   <button
    className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
   >Deletar</button>
   </div>
    ))
}

