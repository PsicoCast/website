import { CardsPosts } from "./Components/CardsPosts/cardsPosts";
import Header from "./Components/Header/Header";

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
      <Header />
      {/* <h1 className={`mb-4 text-xl md:text-2xl`}> */}
        {/* Dashboard */}
      {/* </h1> */}
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> */}
      {/* {<CardsPosts
          image={imageLastestPost}
          title={titleLastestPost}
          abstract={abstractLastestPost}
          isLatestPost={true}
        /> } */}
      {/* </div> */}
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"> */}
       {/*  {lastPosts.slice(1, 4).map((eachPost) => (
          <CardsPosts
            key={eachPost.id}
            image={eachPost.image}
            title={eachPost.title}
            abstract={eachPost.abstract}
            isLatestPost={false}
          />
        ))} */}
      {/* </div> */}
    </main>
  );
}