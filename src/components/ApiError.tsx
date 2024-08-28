import { Link } from 'react-aria-components'

const ApiErrorView = () => {
  return (
    <div role="region" id="planetInfo" aria-live="assertive">
      <h2 className="mt-10" id="errorTitle">
        Site Error
      </h2>
      <p className="my-10" id="errorDescription">
        The Guardian API appears to be down at this time... please come back in
        a few minutes.
      </p>
      <Link href={`/`}>Go to Homepage</Link>
    </div>
  )
}

export default ApiErrorView
