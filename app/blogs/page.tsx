import { Metadata } from 'next'
import Link from 'next/link'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles.comp'

/*async function getData() {
  const responce = await fetch(
    "https://api.spaceflightnewsapi.net/v4/articles/"
  );
  if (!responce.ok) throw new Error("Unable to fetch posts");
  return responce.json();
}*/

export const metadata: Metadata = {
  title: 'Blogs',
}

export default async function News() {
  const data = await getData('blogs/')
  const articles = data.results

  return (
    <>
      <h1>News</h1>
      <ArticlesComp articles={articles} point={'blogs'} />
    </>
  )
}
