import React, { lazy, Suspense } from 'react';

const LazyEngineerrequests = lazy(() => import('./Engineerrequests'));

const Engineerrequests = props => (
  <Suspense fallback={null}>
    <LazyEngineerrequests {...props} />
  </Suspense>
);

export default Engineerrequests;
