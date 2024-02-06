import React, { lazy, Suspense } from 'react';

const LazyEngineer = lazy(() => import('./Engineer'));

const Engineer = props => (
  <Suspense fallback={null}>
    <LazyEngineer {...props} />
  </Suspense>
);

export default Engineer;
