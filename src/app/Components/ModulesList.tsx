import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import ModuleCard from './ModuleCard';
import AllCardsList from './AllCardsList';
import { modulesMocks } from '../../Mocks/modulesMocks';
import Image from 'next/image';
import { content, module} from '../Types/types';

type IModule = {
  id: number,
  title: string,
  thumbnail: string,
  contents: content[]
}

export default function ModulesList(moduleList: module[]) {
  
    const path = usePathname();
    // const [ data, setData ] = useState<module[]>([]);
    const [ moduleId, setModuleId ] = useState(0);
    const [ isModuleRendered, setIsModuleRendered ] = useState(false);
    const [ isAdm ] = useState(path === '/dashboard');
    const [ isEdit, setIsEdit ] = useState(false);
    const [ moduleToEdit, setModuleToEdit ] = useState({} as IModule);
    const [ addModuleContent, setAddModuleContent ] = useState(false);
    const [ search, setSearch ] = useState('');
    
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
            <div
              className='flex flex-col space-y-4'
            >
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
                    <div className="w-full h-32 relative mb-2">
                      <Image src={module.thumbnail} alt={module.title} layout="fill" objectFit="contain"/>
                    </div>
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