import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode | ((error: Error) => ReactNode)
}

interface State {
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  state = { error: undefined }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.error) {
      return typeof this.props.fallback === 'function'
        ? this.props.fallback(this.state.error)
        : this.props.fallback || (
            <div>
              <div>🤔</div>
              <div>Something seems to have gone awry...</div>
              <div>Check back again soon.</div>
            </div>
          )
    }
    return this.props.children
  }
}
