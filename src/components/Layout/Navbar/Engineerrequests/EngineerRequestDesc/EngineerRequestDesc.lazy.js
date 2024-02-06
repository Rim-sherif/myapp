import React, { lazy, Suspense } from 'react';

const LazyEngineerRequestDesc = lazy(() => import('./EngineerRequestDesc'));

const EngineerRequestDesc = props => (
  <Suspense fallback={null}>
    <LazyEngineerRequestDesc {...props} />
  </Suspense>
);

export default EngineerRequestDesc;
