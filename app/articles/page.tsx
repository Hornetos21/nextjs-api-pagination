import { Metadata } from 'next'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles/Articles.comp'
import PaginationRounded from '../../components/Pagination/Pagination.comp'

export const metadata: Metadata = {
  title: 'News',
}

interface Props {
  searchParams: { endpoint?: string; limit?: number; offset?: number }
}

export default async function News({ searchParams }: Props) {
  const data = await getData({
    endpoint: 'articles',
    limit: 8,
    offset: searchParams?.offset || 0,
  })
  // const previous = data.previous

  const articles = data.results

  return (
    <>
      <h1>News</h1>
      <ArticlesComp articles={articles} point={'articles'} />
      <PaginationRounded pageNumber={searchParams?.offset || 0} />

      {/*<PaginationRounded pages={pages} />*/}
    </>
  )
}
