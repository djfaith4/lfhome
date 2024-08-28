import { Link } from 'react-aria-components'
import { Article } from '../common/types'
import { format } from 'date-fns'

interface CardProps {
  article: Article
}

// Represents a single Card with an article link
const Card = ({ article }: CardProps) => {
  return (
    <Link
      className="block p-4 bg-white drop-shadow-md text-black dark:text-blue-100 hover:no-underline hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      href={`/article/${article.id}`}
      aria-label={`Link to article titled ${article.webTitle}`}>
      <article className="grid grid-cols-1 place-content-between min-h-28">
        <h4>{article.webTitle}</h4>
        <p className="italic">
          <time dateTime={article.webPublicationDate} className="text-sm">
            {format(new Date(article.webPublicationDate), 'LLL dd HH:mm zzz')}
          </time>
        </p>
      </article>
    </Link>
  )
}

export default Card
