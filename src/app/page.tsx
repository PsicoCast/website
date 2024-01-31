'use client';
import { useState } from "react";
import AllCardsList from "./Components/AllCardsList";
import ModulesList from "./Components/ModulesList";
import Sidebar from "./Components/Sidebar/Sidebar";
import Image from 'next/image';

const sectionButtons = 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';

export default function Page() {
  const [ search, setSearch ] = useState('');
  const [ type, setType ] = useState('todos');

 
  return (
    <div 
    className="min-h-screen flex flex-col items-center justify-center shadow-md p-4 rounded max-w-full mx-auto mt-8 mb-4"
    // style={{
    //     background: "radial-gradient(circle at center, #d25e2d, #ffb700, #140621)",
    //     backgroundAttachment: 'fixed',
    //     backgroundSize: 'cover',
    //     minHeight: '100vh'
    //   }}
    // className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-md mx-auto mt-8 mb-4"
    >
        <h1 className='text-4xl'> PsicoCast - Slogan </h1>
    <main 
        className=" w-[80vw] h-full overflow-auto"
    >
            <header
            className="w-full bg-gray-300 dark:bg-gray-900 border border-black rounded-lg flex flex-col items-center justify-center"
            >
            <div className="flex justify-center items-center w-full ml-3 mt-3">
                <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={64} height={64} layout="responsive" objectFit="contain"/>
                </div>
                <div className="flex justify-center items-center mt-16 md:mt-3 py-3 w-full">
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
                className="md:w-3/5 lg:w-3/4 border border-black rounded-lg"
            >
              {type !== 'modules' && <AllCardsList search={search} type={type} isModuleEdit={false} moduleToAdd={0}/>}
              {type === 'modules' && <ModulesList />} 
            </article>
            <div
                className="md:w-2/5 lg:w-1/4 h-full border border-black rounded-lg sidebar sticky top-0"
            >
                <Sidebar />
            </div>
        </section>
    </main>
    </div>
  );
}