import React, { lazy, Suspense } from 'react';

const LazyAddStore = lazy(() => import('./AddStore'));

const AddStore = props => (
  <Suspense fallback={null}>
    <LazyAddStore {...props} />
  </Suspense>
);

export default AddStore;
