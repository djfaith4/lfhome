import { screen, waitFor } from '../common/test-utils'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ArticleView from '../components/ArticleView'
import NotFound from '../components/NotFound'

test('renders single article page', async () => {
  render(
    <MemoryRouter initialEntries={['/article/business/article/id']}>
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
      </Routes>
    </MemoryRouter>
  )
  const articleTitle = await screen.findByText(/Big Debate Coming Up/i)
  await waitFor(() => expect(articleTitle).toBeInTheDocument())
})

test('displays article content', async () => {
  render(
    <MemoryRouter initialEntries={['/article/business/article/id']}>
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
      </Routes>
    </MemoryRouter>
  )
  const articleContent = await screen.findByText(
    /Good morning. Joe Biden and Donald Trump will face off/i
  )
  await waitFor(() => expect(articleContent).toBeInTheDocument())
})

test('renders Not Found page if article does not exist', async () => {
  render(
    <MemoryRouter initialEntries={['/article/bad/id']}>
      <Routes>
        <Route path="/article/*" element={<ArticleView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  )
  const errorMsg = await screen.findByText(
    /It seems the item you are looking for does not exist/i
  )
  await waitFor(() => expect(errorMsg))
})
