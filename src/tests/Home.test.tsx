import { render, screen, waitFor, fireEvent } from '../common/test-utils'
import { server } from '../setupTests'
import { http } from 'msw'
import { articlesRequestUrl } from '../mocks/handlers'
import Home from '../components/Home'
import { render as tlRender } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ApiError from '../components/ApiError'

test('renders page title', () => {
  render(<Home />)
  const homeTitle = screen.getByText(/latest articles from/i)
  expect(homeTitle).toBeInTheDocument()
})

test('renders the title of each article', async () => {
  render(<Home />)
  const articleTitle = await screen.findByText(
    /Take the heat out of the hybrid working debate/i
  )
  expect(articleTitle).toBeInTheDocument()
})

test('renders 10 articles', async () => {
  render(<Home />)
  const articles = await screen.findAllByText(/view article/i)
  await waitFor(() => expect(articles).toHaveLength(10))
})

test('fetches articles when Refresh Articles button is pressed', async () => {
  render(<Home />)
  const refreshArticlesBtn = await screen.findByText(/refresh articles/i)
  fireEvent.click(refreshArticlesBtn)
  const articles = await screen.findAllByText(/view article/i)
  await waitFor(() => expect(articles).toHaveLength(10))
})

test('renders API error page if API is failing', async () => {
  server.use(
    http.get(articlesRequestUrl, ({ params }) => {
      return new Response(
        JSON.stringify({
          response: {
            status: 'error',
            message: 'Internal error occurred'
          }
        }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 500
        }
      )
    })
  )

  tlRender(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-error" element={<ApiError />} />
      </Routes>
    </MemoryRouter>
  )
  const errorMsg = await screen.findByText(
    /The Guardian API appears to be down at this time/i
  )
  await waitFor(() => expect(errorMsg))
})
