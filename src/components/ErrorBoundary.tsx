import React, { type ErrorInfo } from 'react';

import { ErrorFallback } from './ErrorFallback';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState =
  | {
      didCatch: false;
      error: null;
    }
  | {
      didCatch: true;
      error: unknown;
    };

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.reset = this.reset.bind(this);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { didCatch: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error({ error, info });
  }

  render() {
    if (this.state.didCatch) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }

  reset() {
    this.setState(initialState);
  }
}
