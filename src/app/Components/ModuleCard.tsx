import ArticleCard from "./ArticleCard";
import PodcastCard from "./PodcastCard";
import VideoCard from "./VideoCard";

export default function ModuleCard({ module }: any) {
  

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-4xl font-extrabold text-center font-sans text-[#243A77] mt-5 mb-3 bg-gray-200 p-2">{module.title}</h1>
      {module.contents && (module.contents).map((contents: any, index: number) => {
        return (
          <div key={index} className="w-7/10 mx-auto flex flex-col items-center">
            {contents.type === 'podcast' && <PodcastCard info={contents} />}
            {contents.type === 'video' && <VideoCard info={contents} />}
            {contents.type === 'artigo' && <ArticleCard info={contents} />}
          </div>
        );
      })}
    </div>
  );
}
//   return (
//     <div className="grid grid-cols-1 gap-4">
//       <h1 className="text-4xl font-extrabold text-center font-sans text-[#243A77] mt-5 mb-3 bg-gray-200 p-2">{module.title}</h1>
//       {module.contents && (module.contents).map((contents: any, index: number) => {
//         if (contents.type === 'podcast') {
//           return (
//             <div key={index}>
//               <PodcastCard info={contents} />
//             </div>
//           );
//         } else if (contents.type === 'video') {
//           return (
//             <div key={index}>
//               <VideoCard info={contents} />
//             </div>
//           );
//         } else if (contents.type === 'artigo') {
//           return (
//             <div key={index}>
//               <ArticleCard info={contents} />
//             </div>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </div>
//   );
// }


  