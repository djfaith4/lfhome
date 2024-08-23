import { render, screen } from '../common/test-utils'
import About from '../components/About'

test('renders About info', () => {
  render(<About />)
  const linkedInLink = screen.getByText(/diego jiménez/i)
  expect(linkedInLink).toBeInTheDocument()
})
