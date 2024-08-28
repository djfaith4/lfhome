import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom'
import App from '../App'

const customRender = (
  ui: ReactElement = <App />,
  options = { initialEntries: ['/'] }
) =>
  render(ui, {
    wrapper: ({ children, ...props }: PropsWithChildren<MemoryRouterProps>) => (
      <MemoryRouter initialEntries={options.initialEntries} {...props}>
        {children}
      </MemoryRouter>
    ),
    ...options
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
