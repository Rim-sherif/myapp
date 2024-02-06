import React, { lazy, Suspense } from 'react';

const LazyStores = lazy(() => import('./Stores'));

const Stores = props => (
  <Suspense fallback={null}>
    <LazyStores {...props} />
  </Suspense>
);

export default Stores;
