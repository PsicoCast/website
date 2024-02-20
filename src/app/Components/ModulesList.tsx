import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import ModuleCard from './ModuleCard';
import AllCardsList from './AllCardsList';
// import { modulesMocks } from '../../Mocks/modulesMocks';
import Image from 'next/image';
import { module } from '../Types/types';


export default function ModulesList({updateFetch}: {updateFetch: boolean}) {
  
    const path = usePathname();
    const [ moduleId, setModuleId ] = useState(0);
    const [ isModuleRendered, setIsModuleRendered ] = useState(false);
    const [ isAdm ] = useState(path === '/dashboard');
    const [ isEdit, setIsEdit ] = useState(false);
    const [ moduleToEdit, setModuleToEdit ] = useState({} as module);
    const [ addModuleContent, setAddModuleContent ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ data, setData ] = useState<module[]>([]);

    useEffect(() => {
      const modules = fetch('http://localhost:3001/module')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error('Error:', error));
      const resolvedPromisse = Promise.resolve(modules);
      resolvedPromisse.then((value) => {
        setData(value);
      });
    }, []);

    useEffect(() => {
      const modules = fetch('http://localhost:3001/module')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error('Error:', error));
      const resolvedPromisse = Promise.resolve(modules);
      resolvedPromisse.then((value) => {
        setData(value);
      });
    }, [updateFetch]);

    const deleteModuleContent = async (contentId: number) => {
      if (window.confirm('Tem certeza de que deseja deletar este conteúdo?')) {
        const token = localStorage.getItem('token');
          const response = await fetch(`http://localhost:3001/module`, {
            method: 'DELETE',
            headers: {
              'Content': 'application/json',
              'Authorization': `${token}`
            },
            body: JSON.stringify({
              moduleId: moduleToEdit.id,
              contentId,
            })
          });
          const responseData = await response.json();
          if (responseData.message === 'Success') {
            alert('Conteúdo deletado com sucesso!, Clique em Atualizar Conteúdo ver as mudanças');
            setModuleToEdit((prev) => ({ ...prev, content: prev.content.filter((content: any) => content.content.id !== contentId) }));
          } else {
            alert(responseData.message)
          }
      }
    };

    const editModule = async (moduleId: number) => {
      const token = localStorage.getItem('token');
      const editModule = await fetch(`http://localhost:3001/module/${moduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({
          name: moduleToEdit.name,
          thumbnail: moduleToEdit.thumbnail,
        })
      });
      if (editModule.status === 200) {
        alert('Conteúdo editado com sucesso!, Clique em Atualizar Conteúdo para ver as mudanças');
        const result = await editModule.text();
        if (result.length) {
          const data = JSON.parse(result);
          console.log(data);
        }
        setIsEdit(false);
      } else {
        console.log(`Error: ${editModule.status}`);
        const errorData = await editModule.json(); // Get the error details from the response body
        alert(errorData.message)
      }
    };

    const deleteModule = async (moduleId: number) => {
      if (window.confirm('Tem certeza de que deseja deletar este Módulo?')) {
        const token = localStorage.getItem('token');
         const delModule = await fetch(`http://localhost:3001/module/${moduleId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        });
        if (delModule.status === 200) {
          alert('Módulo deletado com sucesso!, Clique em Atualizar Conteúdo para ver as mudanças');
          const result = await delModule.text();
          if (result.length) {
            // const data = JSON.parse(result);
            setIsEdit(false);
            setData((prev) => prev.filter((module) => module.id !== moduleId));
          }
          setIsEdit(false);
          setModuleId(0);
        } else {
          const errorData = await delModule.json(); // Get the error details from the response body
          alert(errorData.message)
        }
      }
    };

    useEffect(() => {
        moduleId !== 0 && setIsModuleRendered(true);
    }, [moduleId])
    
    return (
      !isModuleRendered ? (
        isEdit ? (
          <div
          className="flex flex-col bg-gray-100 justify-center items-center p-4 space-y-4"
          >
            <h1>Editar Módulo</h1>
            <div
              className="flex flex-col w-1/2 space-y-4"
            >
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                id="title"
                value={moduleToEdit.name}
                onChange={(event) => setModuleToEdit((prev) => ({ ...prev, name: event.target.value }))}
              />
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                value={moduleToEdit.thumbnail}
                onChange={(event) => setModuleToEdit((prev) => ({ ...prev, thumbnail: event.target.value }))}
              />
              <div
                className='flex flex-col space-y-4'
              >
                <h1>Conteúdos</h1>
                <div
                  className="flex flex-col space-y-4"
                >
                  {moduleToEdit.content.map((content: any, index: number) => {
                    return (<div
                      key={index}
                      className="flex flex-col items-center justify-center border border-black rounded p-2"
                    >
                      <p>{content.content.title}</p>
                      <button
                        onClick={() => deleteModuleContent(content.content.id)}
                        className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                      >Deletar</button>

                    </div>)
                  })}
                </div>
              </div>
              <button
                onClick={() => setAddModuleContent(true)}
                className="w-full px-3 py-2 mt-4 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
              >
                Adicionar Conteúdo
              </button>
              {addModuleContent && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="border p-4 rounded-lg flex flex-col items-center justify-center">
                        <h1 className="text-2xl">Procure pelo conteúdo</h1>
                        <input 
                          type='text' 
                          value={search} 
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full px-3 py-2 mt-4 border border-yellow-500 rounded-md focus:outline-none" 
                          placeholder='Procure o conteúdo a ser adicionado'
                        />
                        <button
                          onClick={() => setAddModuleContent(false)}
                          className="w-full px-3 py-2 mb-4 mt-4 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                        >
                          Voltar
                        </button>
                        <AllCardsList search={search} type={'todos'} isModuleEdit={true} moduleToAdd={moduleToEdit.id} updateFetch={false} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
              <button
                className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                onClick={() => editModule(moduleToEdit.id)}
              >
                Salvar
              </button>
              <button
                className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                onClick={() => setIsEdit(false)}
              >
                Cancelar
              </button>
              <button
                className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                onClick={() => deleteModule(moduleToEdit.id)}
              >
                Deletar Módulo
              </button>
          </div>
        ) : (
          <div
          className="flex flex-col bg-gray-100 items-center p-4 space-y-4"
          >{
            data.map((module) => {
                  return (
                    <div
                      key={module.name}
                      // className="w-full flex justify-between items-center"
                      className="w-full flex justify-between items-center border-b border-black"
                    >
                      <div className="w-full h-32 relative mb-2">
                        <Image src={module.thumbnail} alt={module.name} layout="fill" objectFit="contain"/>
                      </div>
                      <button 
                      className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                      onClick={() => setModuleId(module.id)}
                      >
                        <h1>{module.name}</h1>
                      </button>
                      {isAdm && (
                        <button
                          className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                          onClick={() => {
                            setModuleToEdit(module)
                            setIsEdit(true)
                          }}
                        >
                          Editar
                        </button>
                      )}
                    </div>
                  )
              }
              )}
          </div>
        )
      ) : (
      <>
          <ModuleCard module={data.find(module => module.id === moduleId) as module}/>
          <button
            className={`mt-4 text-white px-4 py-2 rounded hover:bg-gray-600 bg-yellow-600 mx-auto block`}
            onClick={() => {
              setIsModuleRendered(false);
            }}
          >
            Voltar
          </button>
      </>)
      )
}