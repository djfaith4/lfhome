import { Link } from 'react-aria-components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col justify-center px-4">
      <header>
        <h1>Simple News Site</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="py-3">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
