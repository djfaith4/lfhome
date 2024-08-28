import { Link } from 'react-aria-components'

const About = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col columns-1">
        <h2 className="text-center">About</h2>
        <p className="my-7">
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
    </div>
  )
}

export default About
