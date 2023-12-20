import { roboto } from '../fonts';


export function Cards({
  image,
  title,
  abstract,
  isLatestPost,
}: {
  image: string;
  title: string;
  abstract: string;
  isLatestPost: boolean;
}) {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md ${isLatestPost ? 'w-3/4 mx-auto' : ''}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${roboto}`}>{title}</h2>
        <p className={`text-gray-700 ${roboto}`}>{abstract}</p>
      </div>
    </div>
  );
}

