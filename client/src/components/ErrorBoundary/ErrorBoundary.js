import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }
}

export default ErrorBoundary;