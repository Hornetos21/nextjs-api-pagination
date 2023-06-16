import { Metadata } from 'next'
import { getData } from '../../api'
import ArticlesComp from '../../components/Articles.comp'
import PaginationRounded from '../../components/Pagination.comp'

export const metadata: Metadata = {
  title: 'News',
}

export default async function News() {
  const total = 400
  const limit = 8
  const pages = total / limit
  let offset = 0
  const data = await getData('articles', limit, offset)
  const previous = data.previous

  const articles = data.results
  offset = previous ? offset : 0

  return (
    <>
      <h1>News</h1>
      <ArticlesComp articles={articles} point={'articles'} />
      <div>
        {/*<button onClick={() => (offset -= 8)}>Previous</button>*/}
        {/*<button onClick={() => (offset += 8)}>Next</button>*/}
      </div>
      <PaginationRounded pages={pages} />
    </>
  )
}
