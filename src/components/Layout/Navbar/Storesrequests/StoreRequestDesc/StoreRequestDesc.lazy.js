import React, { lazy, Suspense } from 'react';

const LazyStoreRequestDesc = lazy(() => import('./StoreRequestDesc'));

const StoreRequestDesc = props => (
  <Suspense fallback={null}>
    <LazyStoreRequestDesc {...props} />
  </Suspense>
);

export default StoreRequestDesc;
