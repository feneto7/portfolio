import { Component, type ErrorInfo, type PropsWithChildren } from 'react';
import { layoutCopy } from '@/data/siteConfig';
import { Button } from './Button';

export class SectionErrorBoundary extends Component<
  PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }
  render() {
    if (this.state.hasError)
      return (
        <div role="alert" className="my-auto space-y-6">
          <p>{layoutCopy.error}</p>
          <Button onClick={() => window.location.reload()}>
            {layoutCopy.retry}
          </Button>
        </div>
      );
    return this.props.children;
  }
}
