import { useEffect, useState } from 'react';
import { modulesMocks } from '../../Mocks/modulesMocks';
import { mockArray } from '../../Mocks/posts';
import Module from './Module';

export default function ModulesList() {

    const [ moduleId, setModuleId ] = useState(0);
    const [ isRenderModule, setIsRenderModule ] = useState(false);

    useEffect(() => {
        moduleId !== 0 && setIsRenderModule(true);
    }, [moduleId])

    console.log(moduleId)
    console.log(isRenderModule)
    
    return !isRenderModule ? (
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
        <Module module={modulesMocks.find(mod => mod.id === moduleId)}/>
        <button
            onClick={() => setIsRenderModule(false)}
        >Voltar</button>
    </>)
}