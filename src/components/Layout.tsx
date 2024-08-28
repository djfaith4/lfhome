import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { isDarkModeEnabled, setDarkModeEnabled } from '../common/utils'
import { useState } from 'react'

const Layout = () => {
  const [useDarkMode, setDarkMode] = useState(isDarkModeEnabled)

  const updateDarkModeEnabled = (darkMode: boolean) => {
    setDarkModeEnabled(darkMode)
    setDarkMode(darkMode)
  }
  return (
    <div className={useDarkMode ? 'dark' : ''}>
      <div className="flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">
        <Navbar
          useDarkMode={useDarkMode}
          updateDarkModeEnabled={updateDarkModeEnabled}
        />
        <main className="px-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
