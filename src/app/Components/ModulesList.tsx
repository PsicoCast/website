import { useEffect, useState } from 'react';
import { modulesMocks } from '../../Mocks/modulesMocks';
import ModuleCard from './ModuleCard';

export default function ModulesList() {

    const [ moduleId, setModuleId ] = useState(0);
    const [ isModuleRendered, setIsModuleRendered ] = useState(false);
    
    useEffect(() => {
        moduleId !== 0 && setIsModuleRendered(true);
    }, [moduleId])

    
    return !isModuleRendered ? (
        <div>{
            modulesMocks.map((module) => {
                return (
                    <button 
                    key={module.title} 
                    className="border p-4 rounded-lg"
                    onClick={() => setModuleId(module.id)}
                    >
                      <h1>{module.title}</h1>
                    </button>
                )
            }
            )}
        </div>

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