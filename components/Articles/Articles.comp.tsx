import styles from './Articles.module.scss'
import Link from 'next/link'
import { Item } from '../../api'

interface Props {
  articles: Item[]
  point: string
}
const ArticlesComp = ({ articles, point }: Props) => {
  return (
    <div>
      <ul className={styles.grid}>
        {articles.map((article) => (
          <li className={styles.card} key={article.id}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={article.image_url} alt="" />
            </div>
            <div className={styles.title}>
              <Link href={`/${point}/${article.id}`}>{article.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesComp
