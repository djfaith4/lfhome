import { Link } from 'react-aria-components'

const NotFound = () => {
  return (
    <div role="region" id="planetInfo" aria-live="assertive">
      <h2 className="mt-10" id="errorTitle">
        Not Found
      </h2>
      <p className="my-10" id="errorDescription">
        It seems the item you are looking for does not exist.
      </p>
      <Link href={`/`}>Go to Homepage</Link>
    </div>
  )
}

export default NotFound
