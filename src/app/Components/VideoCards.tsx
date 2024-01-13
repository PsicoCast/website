const allVideos = [ {
    type: 'video',
    title: 'Vídeo teste',
    text: 'text',
    link: 'https://www.youtube.com/watch?v=nU2p04TQJNI',
    thumbnail: 'https://i.ytimg.com/vi/nU2p04TQJNI/maxresdefault.jpg',
    categories: 'video',
}];


export default function VideoCards({category, search}: {category: string, search: string}) {
  

  
  return (
    <div>
      Vídeos
      {category && <p>{category}</p>}
      <p>{search}</p>
    </div>
  )
}
