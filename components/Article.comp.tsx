import Link from 'next/link'
import styles from './Article.module.scss'
import { Item } from '../api'
import { useRouter } from 'next/navigation'
interface Props {
  article: Item
}
const ArticleComp = ({ article }: Props) => {
  const navigate = useRouter()

  return (
    <div className={styles.article}>
      <div className={styles.wrapper}>
        <img src={article.image_url} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <div className={styles.source}>
          <em>Source: </em>
          <Link href={article.url}>{article.news_site}</Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleComp
