import { modulesMocks } from '../../Mocks/modulesMocks';

export default function ModulesList() {
    
    return (
        <div>{
            modulesMocks.map((module) => {
                return (
                    <button key={module.title} className="border p-4 rounded-lg">
                        <h1>{module.title}</h1>
                    </button>
                )
            }
            )}
        </div>
    )
}