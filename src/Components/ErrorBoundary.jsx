import React from "react";
import { Component } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// ✅ Add PropTypes Validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a React node
};

export default ErrorBoundary;
