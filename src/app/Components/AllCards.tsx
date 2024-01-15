import { mockArray } from '../../Mocks/posts';

export default function AllCards({category, search}: {category: string, search: string}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockArray.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map((post, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <img src={post.thumb} alt={post.title} className="w-full h-32 object-contain mb-2"/>
          <h1>{post.type}</h1>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>Postado em {post.createdAt.toLocaleDateString()}</p>
          <a href={post.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Acesse o conteúdo</a>
        </div>
      ))}
    </div>
    )
}
