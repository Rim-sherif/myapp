import React, { lazy, Suspense } from 'react';

const LazyStoresrequests = lazy(() => import('./Storesrequests'));

const Storesrequests = props => (
  <Suspense fallback={null}>
    <LazyStoresrequests {...props} />
  </Suspense>
);

export default Storesrequests;
