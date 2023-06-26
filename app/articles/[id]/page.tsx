import { Metadata } from 'next'
import { getItem } from '../../../api'
import ArticleComp from '../../../components/Article/Article.comp'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const article = await getItem('articles', id)

  return {
    title: article.title,
  }
}

export default async function Article({ params: { id } }: Props) {
  const article = await getItem('articles', id)

  return <ArticleComp article={article} />
}
