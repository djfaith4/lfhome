import { RouterProvider } from 'react-aria-components'
import {
  Route,
  Routes,
  type NavigateOptions,
  useNavigate
} from 'react-router-dom'
import Home from './components/Home'
import ArticleView from './components/ArticleView'
import ApiError from './components/ApiError'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import About from './components/About'
import { ErrorBoundary } from './common/ErrorBoundary'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

function App() {
  let navigate = useNavigate()

  return (
    <ErrorBoundary>
      <div className="App">
        <RouterProvider navigate={navigate}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/article/*" element={<ArticleView />} />
              <Route path="/about" element={<About />} />
              <Route path="/api-error" element={<ApiError />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </RouterProvider>
      </div>
    </ErrorBoundary>
  )
}

export default App
