import { useState, useCallback, useEffect } from 'react'
import { getData, ApiParams } from '../common/api'
import { Article, ArticleResponse } from '../common/types'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import LfProgressBar from '../common/LfProgressBar'

const ArticleView = () => {
  const { '*': id } = useParams()
  const [article, setArticle] = useState<Article>()
  const navigate = useNavigate()

  const fetchData = useCallback(async () => {
    if (id) {
      const extraParams: ApiParams = {
        'show-blocks': 'body:latest',
        'show-tags': 'contributor'
      }
      const response = await getData(`/${id}`, extraParams)
      if (response) {
        setArticle((response as ArticleResponse).content ?? [])
      } else {
        navigate('/not-found')
      }
    }
  }, [id, navigate])

  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const loading = <LfProgressBar label="Loading…" isIndeterminate />
  const authorInfo =
    article?.tags && article.tags.length
      ? `By ${article.tags[0].webTitle}. `
      : ''

  return (
    <div>
      {!article && loading}
      {article && (
        <article className="max-w-screen-xl">
          <h4>{article.sectionName}</h4>
          <h1>{article.webTitle}</h1>
          <p>
            {authorInfo}
            Posted on{' '}
            <time dateTime={article.webPublicationDate}>
              {format(new Date(article.webPublicationDate), 'LLL dd, yyyy')}
            </time>
          </p>
          <p>
            {article.blocks?.requestedBodyBlocks['body:latest'] &&
              article.blocks?.requestedBodyBlocks['body:latest'][0]
                .bodyTextSummary}
          </p>
        </article>
      )}
    </div>
  )
}

export default ArticleView
