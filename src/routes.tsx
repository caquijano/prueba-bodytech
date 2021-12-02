import React, {lazy} from 'react';

const App = lazy(() => import('./components/Pages/App'));
const DetailTrack = lazy(() => import('./components/Pages/DetailTrack'));
const routes = [
    { path: '/', exact: true, name: 'App', component: App, },
    { path: '/search/*', exact: true, name: 'App', component: App, },
    { path: '/detail-track/*', exact: true, name: 'DetailTrack', component: DetailTrack, },
]

export default routes;