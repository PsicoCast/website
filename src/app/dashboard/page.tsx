'use client';
import { useState } from "react";
import AllCardsList from "../Components/AllCardsList";
import ModulesList from "../Components/ModulesList";
import Image from 'next/image';

export default function DashBoard() {
    const [ isAdm, setIsAdm ] = useState(false);
    const [ userInput, setUserInput ] = useState('');
    // const [ addPodcast, setAddPodcast ] = useState(false);
    // const [ addVideo, setAddVideo ] = useState(false);
    // const [ addArticle, setAddArticle ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ type, setType ] = useState('todos');
    const pass = '123';

    const handleEnter = () => {
        if (userInput === pass) {
            setIsAdm(true);
        } else {
            alert('Senha incorreta!');
        }
    };

    return !isAdm ? (
        <div className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-md mx-auto mt-8 mb-4">
          <p className="text-center">Insira a senha para acessar o painel de administração:</p>
          <input 
            type="password" 
            onChange={(e) => setUserInput(e.target.value)}
            className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full"
          />
        <button
        onClick={() => handleEnter()}
        className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4"
        >
        Entrar
        </button>
        </div>
      ) : (
        <div 
        className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-full mx-auto mt-8 mb-4"
        // className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-md mx-auto mt-8 mb-4"
        >
          <p className="text-center">Bem vindo ao painel de administração!</p>
          <main 
    >
        <header
            className="flex items-center w-full bg-gray-100 dark:bg-gray-900 border border-black rounded-lg"
            
    >
            <div className="w-16 h-16 md:w-16 md:h-16">
                {/* <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain"/> */}
                <Image src="/logo.png" alt="Logo" width={64} height={64} layout="responsive" objectFit="contain"/>
            </div>
            <div className="flex-grow">
                <label>
                    <input
                    className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none"
                    type="text"
                    placeholder="Pesquise um conteúdo"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>
            <div
                className="mx-auto flex md:flex-row flex-wrap w-full items-center justify-center py-3"
            >
                <button
                    className={`px-3 py-2 border rounded-md focus:outline-none text-lg ${type === 'todos' ? 'bg-black text-white' : 'bg-yellow-600'}`}
                    onClick={() => setType('todos')}
                >Todos</button>
                <button
                    className={`px-3 py-2 border rounded-md focus:outline-none text-lg ${type === 'podcast' ? 'bg-black text-white' : 'bg-yellow-600'}`}
                    onClick={() => setType('podcast')}
                >PodCast</button>
                <button
                    className={`px-3 py-2 border rounded-md focus:outline-none text-lg ${type === 'artigo' ? 'bg-black text-white' : 'bg-yellow-600'}`}
                    onClick={() => setType('artigo')}
                >Artigos</button>
                <button
                    className={`px-3 py-2 border rounded-md focus:outline-none text-lg ${type === 'video' ? 'bg-black text-white' : 'bg-yellow-600'}`}
                    onClick={() => setType('video')}
                >Videos</button>
                <button
                    className={`px-3 py-2 border rounded-md focus:outline-none text-lg ${type === 'modules' ? 'bg-black text-white' : 'bg-yellow-600'}`}
                    onClick={() => setType('modules')}
                >Módulos</button>
            </div>
        </header>
        <section
            className='flex mt-4 ml-1 mr-1 space-x-1'
        >
            <article
                className="w-full border border-black rounded-lg"
            >
              {type !== 'modules' && <AllCardsList search={search} type={type} />}
              {type === 'modules' && <ModulesList />} 
            </article>
            {/* <div
                className="md:w-2/5 lg:w-1/4 h-full border border-black rounded-lg sidebar sticky top-0"
            >
            </div> */}
        </section>
    </main>
        </div>
      );
}
