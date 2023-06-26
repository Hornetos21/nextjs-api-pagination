import { Metadata } from 'next'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles/Articles.comp'
import PaginationRounded from '../../components/Pagination/Pagination.comp'

export const metadata: Metadata = {
  title: 'Blogs',
}
interface Props {
  searchParams: { endpoint?: string; limit?: number; offset?: number }
}

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
