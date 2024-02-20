import ArticleCard from "./ArticleCard";
import PodcastCard from "./PodcastCard";
import VideoCard from "./VideoCard";
import { module } from '../Types/types';

export default function ModuleCard({ module }: { module: module }) {
  

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center font-sans text-[#243A77] mt-5 mb-3 bg-gray-200 p-2">{module.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {module.content && (module.content).map((contents: any, index: number) => {
          return (
            <div key={index} className="w-7/10 mx-auto flex flex-col items-center">
              {contents.content.type === 'spotify' && <PodcastCard info={contents.content} isModuleEdit={true} moduleToAdd={0}/>}
              {contents.content.type === 'youtube' && <VideoCard info={contents.content} isModuleEdit={true} moduleToAdd={0}/>}
              {contents.content.type === 'text' && <ArticleCard info={contents.content} isModuleEdit={true} moduleToAdd={0}/>}
            </div>
          );
        })}
      </div>
    </>
  );
}


  