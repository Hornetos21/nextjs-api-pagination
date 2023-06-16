import { Metadata } from 'next'
import Link from 'next/link'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles.comp'
import PaginationRounded from '../../components/Pagination.comp'

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
interface Props {
  searchParams: { endpoint?: string; limit?: number; offset?: number }
}
// 'blogs', 8, 0
export default async function Blogs({ searchParams }: Props) {
  const data = await getData({
    endpoint: searchParams.endpoint || 'blogs',
    limit: 8,
    offset: searchParams.offset || 0,
  })
  const articles = data.results

  return (
    <>
      <h1>Blogs</h1>
      <ArticlesComp articles={articles} point={'blogs'} />
      <PaginationRounded pageNumber={searchParams.offset || 0} />
    </>
  )
}
