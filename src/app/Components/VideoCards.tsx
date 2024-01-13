export default function VideoCards({category, search}: {category: string, search: string}) {
  return (
    <div>
      Vídeos
      {category && <p>{category}</p>}
      <p>{search}</p>
    </div>
  )
}
