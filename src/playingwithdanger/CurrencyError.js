import React, {Component} from 'react'

class CurrencyError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true}
  }

  render() {
    const error = this.state.hasError
    ? `Could not display currency`
    : this.props.children;
    return(
      <div className='error'>{error}</div>
    )
  }
}

export default CurrencyError;
