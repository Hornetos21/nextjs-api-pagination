import { Metadata } from 'next'
import ArticleComp from '../../../components/Article.comp'
import { getItem } from '../../../api'

/*async function getData(id: string) {
  const responce = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/${id}`
  );
  if (!responce.ok) throw new Error("Unable to fetch posts");
  return responce.json();
}*/

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
