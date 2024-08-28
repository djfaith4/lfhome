import { useState, useCallback, useEffect } from 'react'
import { getData, ApiParams } from '../common/api'
import { Article, ArticleResponse } from '../common/types'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import LfProgressBar from '../common/LfProgressBar'

// Detailed Article view.
const ArticleView = () => {
  const { '*': id } = useParams()
  const [article, setArticle] = useState<Article>()
  const navigate = useNavigate()

  const fetchData = useCallback(async () => {
    if (id) {
      // The Guardian API params to fetch article content and tags (with author/contributor)
      const extraParams: ApiParams = {
        'show-blocks': 'body:latest',
        'show-tags': 'contributor'
      }
      const response = await getData(`/${id}`, extraParams)
      if (response) {
        setArticle((response as ArticleResponse).content ?? null)
      } else {
        navigate('/not-found')
      }
    }
  }, [id, navigate])

  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const loading = (
    <div className="m-10">
      <LfProgressBar label="Loading…" isIndeterminate />
    </div>
  )
  const authorInfo =
    article?.tags && article.tags.length
      ? `Written by ${article.tags[0].webTitle} `
      : ''

  return (
    <div className="flex justify-center">
      {!article && loading}
      {article && (
        <article className="max-w-screen-xl">
          <h1 className="mt-10 pb-2 border-b-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-500">
            {article.webTitle}
          </h1>
          <h2
            className="text-xl mt-3 font-semibold"
            aria-label={`Section: ${article.sectionName}`}>
            {article.sectionName}
          </h2>
          <p className="mt-3 italic">{authorInfo}</p>
          <p className="mt-2">
            Posted on{' '}
            <time dateTime={article.webPublicationDate}>
              {format(new Date(article.webPublicationDate), 'LLL dd, yyyy')}
            </time>
          </p>
          <p className="my-10 leading-7">
            {(article.blocks?.requestedBodyBlocks['body:latest'] &&
              article.blocks?.requestedBodyBlocks['body:latest'][0] &&
              article.blocks?.requestedBodyBlocks['body:latest'][0]
                ?.bodyTextSummary) ??
              'Article content was not provided.'}
          </p>
        </article>
      )}
    </div>
  )
}

export default ArticleView
