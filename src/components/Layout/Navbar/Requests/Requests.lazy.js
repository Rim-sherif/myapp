import React, { lazy, Suspense } from 'react';

const LazyRequests = lazy(() => import('./Requests'));

const Requests = props => (
  <Suspense fallback={null}>
    <LazyRequests {...props} />
  </Suspense>
);

export default Requests;
