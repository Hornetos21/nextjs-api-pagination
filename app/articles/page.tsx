import { Metadata } from 'next'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles.comp'
import PaginationRounded from '../../components/Pagination.comp'

export const metadata: Metadata = {
  title: 'News',
}

interface Props {
  searchParams: { endpoint?: string; limit?: number; offset?: number }
}

export default async function News({ searchParams }: Props) {
  // const total = 400
  // const limit = 8
  // const pages = total / limit
  // let offset = 0
  const data = await getData({
    endpoint: 'articles',
    limit: 8,
    offset: searchParams?.offset || 0,
  })
  const previous = data.previous

  const articles = data.results
  /*  offset = previous ? offset : 0*/

  return (
    <>
      <h1>News</h1>
      <ArticlesComp articles={articles} point={'articles'} />
      <PaginationRounded pageNumber={searchParams?.offset || 0} />

      {/*<PaginationRounded pages={pages} />*/}
    </>
  )
}
