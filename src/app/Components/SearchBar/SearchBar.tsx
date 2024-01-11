'use client';
import { useContext, useState } from "react";
import SeachContext from '../../Context/SearchContext';

export default function SearchBar() {
    const {
        search,
        setSearch,
        category,
        setCategory,
        type,
        setType,
        allFromFetch,
        setFlag,
        materialFromFetch, 
        setMaterialFromFetch
    } = useContext(SeachContext)

    // as categorias virão da api, a busca poderá ser filtrada por categoria e tipo, ou somente texto de descrição e/ou keywords

    const fetchResults = async (url: any) => {
        const number12 = 12;
        const response = await fetch(url);
        const data = await response.json();
        if (!data) {
          global.alert('Sorry, we haven\'t found.');
          return [];
        }
        return data.slice(0, number12);
      };

    const handleSearch = async () => {
        setFlag('search');

        let url = 'https://www.psicocast.com/search';

        if (search) {
          url += `?search=${search}`;
        }
        if (type) {
          url += `${search ? '&' : '?'}type=${type}`;
        }
        if (category) {
          url += `${search || type ? '&' : '?'}category=${category}`;
        }
    
        try {
          const results = await fetchResults(url);
          setMaterialFromFetch(results);
        } catch (error) {
          console.error(error);
        }
    }

  return (
    <>
        <div
            className="flex justify-center items-center mt-3 py-3"
        >
            <label
            >
                <input
                    className="w-full px-40 py-2 border rounded-md focus:outline-none"
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
            className="w-full md:w-3/5 mx-auto flex items-center justify-center py-3"
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
                    value={type}
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
    </>
  )
}
