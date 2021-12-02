import React, {lazy} from 'react';
const App = lazy(() => import('./App'));
const routes = [
    { path: '/', exact: true, name: 'App', component: App, },
]

export default routes;