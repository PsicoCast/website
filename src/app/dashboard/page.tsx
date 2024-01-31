'use client';
import { useState } from "react";
import AllCardsList from "../Components/AllCardsList";
import ModulesList from "../Components/ModulesList";
import Image from 'next/image';

export default function DashBoard() {
    const [ isAdm, setIsAdm ] = useState(false);
    const [ userInput, setUserInput ] = useState('');
    const [ addPodcast, setAddPodcast ] = useState(false);
    const [ addVideo, setAddVideo ] = useState(false);
    const [ addArticle, setAddArticle ] = useState(false);
    const [ addModule, setAddModule ] = useState(false);
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
        className="flex flex-col items-center justify-center border- shadow-md p-4 rounded max-w-full mx-auto mt-8 mb-4"
        // style={{
        //     background: "radial-gradient(circle at center, #d25e2d, #ffb700, #140621)",
        //     backgroundAttachment: 'fixed',
        //     backgroundSize: 'cover',
        //     minHeight: '100vh'
        // }}
        >
        <main className="w-7/10 h-full overflow-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-center text-2xl mb-3 space-x-0 md:space-x-4">
            <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={64} height={64} layout="responsive" objectFit="contain"/>
            </div>
            <p>Bem vindo ao painel de administração do PsicoCast!</p>
        </div>
          <header
            className="w-full bg-gray-300 border border-black rounded-lg flex flex-col items-center justify-center"
            >
            <div className="flex justify-center items-center w-full ml-3 mt-3">
                {/* <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={64} height={64} layout="responsive" objectFit="contain"/>
                </div> */}
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
        <div className="flex flex-wrap justify-around items-center w-full bg-gray-100 dark:bg-gray-900 border border-black rounded-lg mt-4 p-4">
            <button 
                onClick={() => setAddArticle(true)}
                className="px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white mb-4"
                >Adicionar Artigo</button>
            <button 
                onClick={() => setAddPodcast(true)}
                className="px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white mb-4"
                >Adicionar PodCast</button>
            <button 
                onClick={() => setAddVideo(true)}
                className="px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white mb-4"
                >Adicionar Vídeo</button>
            <button 
                onClick={() => setAddModule(true)}
                className="px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white mb-4"
                >Adicionar Módulo</button>
        </div>
        <section
            className='flex mt-4 ml-1 mr-1 space-x-1'
        >
            <article
                className="w-full border border-black rounded-lg"
            >
                {addVideo && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="border p-4 rounded-lg">
                        <h1 className="text-2xl">Adicionar Vídeo</h1>
                        <form className="space-y-4">
                            <label className="block">
                            Título:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Descrição:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Link:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Thumb:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <button
                            onClick={() => setAddVideo(false)}
                            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                            >
                            Adicionar
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                    )}
                {addPodcast && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="border p-4 rounded-lg">
                            <h1 className="text-2xl">Adicionar Podcast</h1>
                            <form className="space-y-4">
                            <label className="block">
                            Título:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Descrição:
                            <input type="text"  className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Link:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                            <label className="block">
                            Thumb:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none" />
                            </label>
                                <button
                                onClick={() => setAddPodcast(false)}
                                className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                                >
                                Salvar
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                {addArticle && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="border p-4 rounded-lg">
                        <h1 className="text-2xl">Adicionar Artigo</h1>
                        <form className="space-y-4">
                        <label className="block">
                            Título:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
                            </label>
                            <label className="block">
                            Texto:
                            <textarea rows={10} className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
                            </label>
                            <label className="block">
                            Link:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
                            </label>
                            <label className="block">
                            Thumb:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
                            </label>
                            <button
                            onClick={() => setAddArticle(false)}
                            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                            >
                            Salvar
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                    )}
                {addModule && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="border p-4 rounded-lg">
                        <h1 className="text-2xl">Adicionar Módulo</h1>
                        <div className="space-y-4">
                            <label className="block">
                            Título:
                            <input type="text" className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none mb-4" />
                            </label>
                            <button
                            onClick={() => setAddModule(false)}
                            className="w-full px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                            >
                            Salvar
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}
                {type !== 'modules' && <AllCardsList search={search} type={type} isModuleEdit={false} moduleToAdd={0}/>}
                {type === 'modules' && <ModulesList />} 
            </article>
        </section>
    </main>
        </div>
      );
}
