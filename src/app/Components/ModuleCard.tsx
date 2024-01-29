import ArticleCard from "./ArticleCard";
import PodcastCard from "./PodcastCard";
import VideoCard from "./VideoCard";

export default function ModuleCard({ module }: any) {
  console.log('AQUIII',module);
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-4xl font-extrabold text-center font-sans text-[#243A77] mt-5 mb-3 bg-gray-200 p-2">{module.title}</h1>
      {module.contents && (module.contents).map((contents: any) => {
        if (contents.type === 'podcast') {
          return (
          <div>
            <PodcastCard info={contents} />
          </div>)
        } else if (contents.type === 'video') {
          return (
            <div>
              <VideoCard info={contents} />
            </div>)
        } else if (contents.type === 'artigo') {
          return (
            <div>
              <ArticleCard info={contents} />
            </div>)
        } else {
          return null; 
        }
      })}
    </div>
  );
}


  