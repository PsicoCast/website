import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { modulesMocks } from '../../Mocks/modulesMocks';
import ModuleCard from './ModuleCard';

type IModule = {
  id: number,
  title: string,
  contents: any
}

export default function ModulesList() {
  
    const path = usePathname();
    const [ moduleId, setModuleId ] = useState(0);
    const [ isModuleRendered, setIsModuleRendered ] = useState(false);
    const [ isAdm, setIsAdm ] = useState(path === '/dashboard');
    const [ isEdit, setIsEdit ] = useState(false);
    const [ moduleToEdit, setModuleToEdit ] = useState({} as IModule);
    
    useEffect(() => {
        moduleId !== 0 && setIsModuleRendered(true);
    }, [moduleId])

    const deleteModule = (moduleId: number) => {
      setModuleToEdit((prevState) => {
        return {
          ...prevState,
          contents: prevState.contents.filter((content: any) => content.title !== moduleToEdit.contents[moduleId].title)
        }
      })
    };

    
    return !isModuleRendered ? (
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
              placeholder={moduleToEdit.title}
            />
            <h1>Conteúdos</h1>
            <div
              className="flex flex-col space-y-4"
            >
              {moduleToEdit.contents.map((content: any, index: number) => {
                return (<div
                  key={index}
                  className="flex flex-col items-center justify-center border border-black rounded p-2"
                >
                  <p>{content.title}</p>
                  <button
                    onClick={() => deleteModule(index)}
                    className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                  >Deletar</button>

                </div>)
              })}
            </div>
          </div>
            <button
              className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
              onClick={() => setIsEdit(false)}
            >
              Salvar
            </button>
            <button
              className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
              onClick={() => setIsEdit(false)}
            >
              Cancelar
            </button>
        </div>
      ) : (
        <div
        className="flex flex-col bg-gray-100 items-center p-4 space-y-4"
        >{
            modulesMocks.map((module) => {
                return (
                  <div
                    key={module.title}
                    className="w-full flex justify-between items-center"
                  >
                    <button 
                    className="w-1/2 px-3 py-2 border border-yellow-500 rounded-md focus:outline-none hover:bg-yellow-500 hover:text-white"
                    onClick={() => setModuleId(module.id)}
                    >
                      <h1>{module.title}</h1>
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
        <ModuleCard module={modulesMocks.find(module => module.id === moduleId)}/>
        <button
          className={`mt-4 text-white px-4 py-2 rounded hover:bg-gray-600 bg-yellow-600 mx-auto block`}
          onClick={() => {
            setIsModuleRendered(false);
          }}
        >
          Voltar
        </button>
    </>)
}