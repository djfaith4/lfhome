import { useState, useCallback, useEffect } from 'react'
import { getData, ARTICLES_PATH } from '../common/api'
import { Article, ArticlesResponse } from '../common/types'
import { useNavigate } from 'react-router-dom'
import LfProgressBar from '../common/LfProgressBar'
import { Link, Button } from 'react-aria-components'
import { format } from 'date-fns'

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()

  const fetchData = useCallback(async () => {
    const response = await getData(ARTICLES_PATH)
    if (response) {
      setLoading(false)
      setArticles((response as ArticlesResponse).results ?? [])
    } else {
      navigate('/api-error')
    }
  }, [navigate])

  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const loadingBar = <LfProgressBar label="Loading…" isIndeterminate />
  const showLoading = !articles || !articles.length || loading

  return (
    <div className="pt-4">
      <h2>
        Latest Articles from{' '}
        <Link
          href="https://www.theguardian.com/"
          target="_blank"
          aria-label="Go to The Guardian's website">
          The Guardian
        </Link>
      </h2>
      {showLoading && loadingBar}
      {!showLoading && (
        <>
          <div>
            <Button
              className="rounded appearance-none align-middle text-base align-center outline-none p-2 mt-4 ml-5 
              bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100"
              onPress={() => {
                setLoading(true)
                fetchData()
              }}>
              Refresh Articles
            </Button>
          </div>
          <ul>
            {articles?.map((article) => (
              <li key={article.id} className="pb-4">
                <article>
                  <h4>{article.webTitle}</h4>
                  <time
                    dateTime={article.webPublicationDate}
                    className="text-sm">
                    {format(
                      new Date(article.webPublicationDate),
                      'LLL dd HH:mm zzz'
                    )}
                  </time>
                  <span aria-hidden="true">&nbsp;-&nbsp;</span>
                  <Link
                    href={`/article/${article.id}`}
                    aria-label={`Link to article titled ${article.webTitle}`}>
                    View article
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Home
