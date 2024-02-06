import React, { lazy, Suspense } from 'react';

const LazyAddEngineer = lazy(() => import('./AddEngineer'));

const AddEngineer = props => (
  <Suspense fallback={null}>
    <LazyAddEngineer {...props} />
  </Suspense>
);

export default AddEngineer;
