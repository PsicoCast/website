'use client';
import { useState } from "react";

export default function SearchBar() {
    const [ search, setSearch ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ type, setType ] = useState('');

    // as categorias virão da api, a busca poderá ser filtrada por categoria e tipo, ou somente texto de descrição e/ou keywords

    const handleSearch = () => {
        console.log('colocar no estado global o retorno da api de acordo com a filtragem');
    }

  return (
    <>
        <div
            className="w-full md:w-3/5 mx-auto flex items-center mt-3"
        >
            <label
                className="flex-grow"
            >
                <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                    type="text"
                    placeholder="Pesquise um conteúdo"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
            <button
                onClick={handleSearch}
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 ml-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                >
                Pesquisar
            </button>
        </div>
        <div
            className="w-full md:w-3/5 mx-auto flex items-center justify-between mt-3"
        >
            <label
                className="flex-grow"
            >
                Podcast
                <input
                    className="px-3 py-2 border rounded-md focus:outline-none"
                    type="radio"
                    name="search-type"
                    value="podcast"
                    onChange={(e) => setType(e.target.value)}
                />
            </label>
            <label
                className="flex-grow"
                >
                Artigos
                <input
                    className="px-3 py-2 border rounded-md focus:outline-none"
                    type="radio"
                    name="search-type"
                    value="artigos"
                    onChange={(e) => setType(e.target.value)}
                />
            </label>
            <label
                className="flex-grow"
            >
                Vídeos
                <input
                    className="px-3 py-2 border rounded-md focus:outline-none"
                    type="radio"
                    name="search-type"
                    value="videos"
                    onChange={(e) => setType(e.target.value)}
                />
            </label>
            <select
                className="w-1/3 px-3 py-2 border rounded-md focus:outline-none ml-2"
                value='Categoria A'
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Categoria A">Categoria A</option>
                <option value="Categoria B">Categoria B</option>
                <option value="Categoria C">Categoria C</option>
            </select>
        </div>
    </>
  )
}
