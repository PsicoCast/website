'use client';
import { useState } from "react";
import AllCardsList from "./Components/AllCardsList";
import ModulesList from "./Components/ModulesList";
import Sidebar from "./Components/Sidebar/Sidebar";

const sectionButtons = 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';

export default function Page() {
  const [ search, setSearch ] = useState('');
  const [ type, setType ] = useState('todos');
  
  const useEffect = () => {}

 
  return (
    <main 
        // className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
    >
        <header
            // className="w-full bg-gray-100 dark:bg-gray-900 border border-black rounded-lg"
            // className="md:w-1/2 lg:w-1/2 xl:w-full bg-gray-100 dark:bg-gray-900 border border-black rounded-lg"
            className="w-full bg-gray-100 dark:bg-gray-900 border border-black rounded-lg"
            
    >
            <div
            className="flex justify-center items-center mt-3 py-3"
        >
            <label
            >
                <input
                    className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none"
                    type="text"
                    placeholder="Pesquise um conteúdo"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
            </div>
            {/* <div
                className="flex flex-row md:flex-col flex-wrap justify-center items-center w-full"
            > */}
                <div
                    // className="md:w-1/2 mx-auto flex flex-col md:flex-row flex-wrap w-full items-center justify-center py-3"
                    className="mx-auto flex md:flex-row flex-wrap w-full items-center justify-center py-3"
                >

                    <label
                        className="ml-4 px-3 py-2 border rounded-md focus:outline-none text-lg"
                    >
                        <span className="mr-2">Todos</span>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none text-lg"
                            type="radio"
                            name="search-type"
                            value="todos"
                            defaultChecked={true}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>
                    <label
                        className="ml-4 px-3 py-2 border rounded-md focus:outline-none text-lg"
                    >
                        <span className="mr-2">Podcast</span>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none text-lg"
                            type="radio"
                            name="search-type"
                            value="podcast"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>
                    <label
                        className="ml-4 px-3 py-2 border rounded-md focus:outline-none text-lg"
                        >
                        <span className="mr-2">Artigos</span>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none text-lg"
                            type="radio"
                            name="search-type"
                            value="artigo"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>
                    <label
                        className="ml-4 px-3 py-2 border rounded-md focus:outline-none text-lg"
                    >
                        <span className="mr-2">Vídeos</span>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none text-lg"
                            type="radio"
                            name="search-type"
                            value="video"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>
                    <label
                        className="ml-4 px-3 py-2 border rounded-md focus:outline-none text-lg"
                    >
                        <span className="mr-2">Módulos</span>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none text-lg"
                            type="radio"
                            name="search-type"
                            value="modules"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>

                </div>
        </header>
        <section
            className='flex mt-4 ml-1 mr-1 space-x-1'
        >
            <article
                className="md:w-3/5 lg:w-3/4 border border-black rounded-lg"
            >
              {type !== 'modules' && <AllCardsList search={search} type={type} />}
              {type === 'modules' && <ModulesList />} 
            </article>
            <div
                className="md:w-2/5 lg:w-1/4 h-full border border-black rounded-lg sidebar sticky top-0"
            >
                <Sidebar />
            </div>
        </section>
    </main>
  );
}