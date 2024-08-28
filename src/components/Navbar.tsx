import { Link, Switch } from 'react-aria-components'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
import { tv } from 'tailwind-variants'

interface NavbarProps {
  useDarkMode: boolean
  updateDarkModeEnabled: (darkMode: boolean) => void
}

// Switch styles largely adopted from https://react-spectrum.adobe.com/react-aria-tailwind-starter/index.html?path=/docs/switch--docs (MIT Licensed)
const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2'
    }
  }
})

const track = tv({
  extend: focusRing,
  base: 'flex h-4 w-7 px-px items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent',
  variants: {
    isSelected: {
      false:
        'bg-gray-400 dark:bg-zinc-400 group-pressed:bg-gray-500 dark:group-pressed:bg-zinc-300',
      true: 'bg-gray-700 dark:bg-zinc-300 forced-colors:!bg-[Highlight] group-pressed:bg-gray-800 dark:group-pressed:bg-zinc-200'
    },
    isDisabled: {
      true: 'bg-gray-200 dark:bg-zinc-700 forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText]'
    }
  }
})

const handle = tv({
  base: 'h-3 w-3 transform rounded-full bg-white dark:bg-zinc-900 outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out',
  variants: {
    isSelected: {
      false: 'translate-x-0',
      true: 'translate-x-[100%]'
    },
    isDisabled: {
      true: 'forced-colors:outline-[GrayText]'
    }
  }
})

const Navbar = ({ useDarkMode, updateDarkModeEnabled }: NavbarProps) => {
  const linkClass =
    'no-underline text-white hover:text-orange-500 transition-opacity duration-300 hover:opacity-50'

  return (
    <header>
      <nav
        role="navigation"
        className="navbar flex justify-between align-middle p-4 bg-gray-600">
        <div>
          <Link
            aria-hidden="true"
            href="/"
            className="no-underline text-2xl text-white">
            <img className="w-7 h-7" src="apple-icon.png" alt="Site Logo" />
          </Link>
        </div>
        <div>
          <ul className="list-none m-0 p-0 flex text-2xl space-x-8">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Switch
            aria-label="Toggle Dark Mode On/Off"
            isSelected={useDarkMode}
            onChange={updateDarkModeEnabled}
            className="text-lg group flex gap-2 items-center text-white disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText] transition">
            {(renderProps) => (
              <>
                <div className={track(renderProps)}>
                  <span className={handle(renderProps)} />
                </div>
                Dark Mode
              </>
            )}
          </Switch>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
