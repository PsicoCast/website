'use client';
import { useState } from "react";
import AllCards from "./Components/AllCards";
import PodcastsCards from "./Components/PodcastsCards";
import ArticleCards from "./Components/ArticleCards";
import VideoCards from "./Components/VideoCards";
import Sidebar from "./Components/Sidebar/Sidebar";

const sectionButtons = 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';

export default function Page() {
  const [ search, setSearch ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ type, setType ] = useState('todos');

 
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
            <div
                className="flex flex-row md:flex-col"
            >
                <div
                    className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-center py-3"
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
                            value="artigos"
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
                            value="videos"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </label>
                    <select
                        className="max-w-max px-3 py-2 border rounded-md focus:outline-none ml-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option
                            className="py-1 text-lg" 
                            value=""
                            disabled                    
                        >Selecione a Categoria</option>
                        <option
                            className="py-1 text-lg"                
                            value="Categoria A">Categoria A</option>
                        <option 
                            className="py-1 text-lg" 
                            value="Categoria B">Categoria B</option>
                        <option 
                            className="py-1 text-lg" 
                            value="Categoria C">Categoria C</option>
                    </select>
                </div>
                <div
                    className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-center py-3"
                >
                    <button
                        className={sectionButtons}
                        onClick={() => console.log('entrar')}            
                    >
                        Home
                    </button>
                    <button
                        className={sectionButtons}
                        onClick={() => console.log('entrar')}
                    >Módulos
                    </button>
                    <button
                        className={sectionButtons}
                        onClick={() => console.log('entrar')}
                    >
                    Outros possiveis botões
                    </button> 
                    <button
                        className={sectionButtons}
                        onClick={() => console.log('entrar')}
                    >Contato
                    </button> 
                </div>
            </div>
        </header>
        <section
            className='flex mt-4 ml-1 mr-1 space-x-1'
        >
            <article
                className="w-3/4 border border-black rounded-lg"
            >
                {type === 'todos' && <AllCards category={category} search={search} />}
                {type === 'podcast' && <PodcastsCards category={category} search={search} />}
                {type === 'artigos' && <ArticleCards category={category} search={search} />}
                {type === 'videos' && <VideoCards category={category} search={search} />}
            </article>
            <div
                className="w-1/4 h-full border border-black rounded-lg"
            >
                <Sidebar />
            </div>
        </section>
    </main>
  );
}