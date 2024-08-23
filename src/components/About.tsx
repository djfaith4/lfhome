import { Link } from 'react-aria-components'

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Demo made by{' '}
        <Link
          href="https://www.linkedin.com/in/diego-jimenez-77229232/"
          target="_blank"
          aria-label="Go to Diego Jiménez's LinkedIn profile page">
          Diego Jiménez
        </Link>
        &nbsp;with create-react-app. Articles provided by The Guardian API.
        2024.
      </p>
    </div>
  )
}

export default About
