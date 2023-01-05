import {createRoot} from 'react-dom/client';
import {ErrorBoundary} from 'react-error-boundary';

import App from 'client/app';
import {ErrorFallback} from 'client/pages/components/ErrorView';

const container: any = document.getElementById('app');
const root = createRoot(container);

root.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
  </ErrorBoundary>
);
