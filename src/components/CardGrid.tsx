import Card from './Card'
import { Article } from '../common/types'

interface CardGridProps {
  articles: Article[]
}

// Represents a grid of Cards with articles in them
const CardGrid = ({ articles }: CardGridProps) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
      {articles?.map((article) => <Card key={article.id} article={article} />)}
    </div>
  )
}

export default CardGrid
