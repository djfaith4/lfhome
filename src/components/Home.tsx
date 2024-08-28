import { useState, useCallback, useEffect } from 'react'
import { getData, ARTICLES_PATH } from '../common/api'
import { Article, ArticlesResponse } from '../common/types'
import { useNavigate } from 'react-router-dom'
import LfProgressBar from '../common/LfProgressBar'
import { Link, Button } from 'react-aria-components'
import CardGrid from './CardGrid'

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

  const loadingBar = (
    <div className="m-10">
      <LfProgressBar label="Loading…" isIndeterminate />
    </div>
  )

  const showLoading = !articles || !articles.length || loading

  return (
    <div className="pt-4">
      <h2>
        Latest Articles from{' '}
        <Link
          className="transition-opacity duration-300 hover:opacity-70"
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
              className="p-3 ml-5 mt-10 drop-shadow-md rounded appearance-none align-middle text-base font-bold align-center border-gray-400 border-solid border-2 focus:ring-0
              bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100"
              onPress={() => {
                setLoading(true)
                fetchData()
              }}>
              Refresh Articles
            </Button>
          </div>
          <CardGrid articles={articles} />
        </>
      )}
    </div>
  )
}

export default Home
