import { Metadata } from 'next'
import ArticleComp from '../../../components/Article/Article.comp'
import { getItem } from '../../../api'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const article = await getItem('blogs', id)

  return {
    title: article.title,
  }
}

export default async function Article({ params: { id } }: Props) {
  const article = await getItem('blogs', id)

  return <ArticleComp article={article} />
}
