import { screen, render } from '../common/test-utils'
import { Route, Routes } from 'react-router-dom'
import ArticleView from '../components/ArticleView'
import NotFound from '../components/NotFound'

describe('ArticleView', () => {
  test('renders single article page', async () => {
    render(
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
      </Routes>,
      { initialEntries: ['/article/business/article/id'] }
    )
    const articleTitle = await screen.findByText(/Big Debate Coming Up/i)
    expect(articleTitle).toBeInTheDocument()
  })

  test('displays article content', async () => {
    render(
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
      </Routes>,
      { initialEntries: ['/article/business/article/id'] }
    )
    const articleContent = await screen.findByText(
      /Good morning. Joe Biden and Donald Trump will face off/i
    )
    expect(articleContent).toBeInTheDocument()
  })

  test('renders Not Found page if article does not exist', async () => {
    render(
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>,
      { initialEntries: ['/article/bad/id'] }
    )
    const errorMsg = await screen.findByText(
      /It seems the item you are looking for does not exist/i
    )
    expect(errorMsg).toBeInTheDocument()
  })
})
