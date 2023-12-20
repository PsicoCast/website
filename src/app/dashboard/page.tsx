import { Cards } from '../ui/dashboard/cards';

import { roboto } from '../ui/fonts';
/* import { fetchLastPosts, fetchLatestPost } from '../lib/data'; */

export default async function Page() {
/* const lastPosts = await fetchLastPosts();
  const {
    imageLastestPost,
    titleLastestPost,
    abstractLastestPost,
  } = await fetchLatestPost(); */
 
  return (
    <main>
      <h1 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {<Cards
          image={imageLastestPost}
          title={titleLastestPost}
          abstract={abstractLastestPost}
          isLatestPost={true}
        /> }
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {lastPosts.slice(1, 4).map((eachPost) => (
          <Cards
            key={eachPost.id}
            image={eachPost.image}
            title={eachPost.title}
            abstract={eachPost.abstract}
            isLatestPost={false}
          />
        ))}
      </div>
    </main>
  );
}