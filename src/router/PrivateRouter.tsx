import { lazy } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import App from '../components/Pages/App';
import routes from '../routes'
const Navbar = lazy(()=> import("../components/Parts/Navbar"))

function PrivateRouter() {
  
    return (
      <>
        <Navbar/>
          <Routes>
          {routes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={
                      <route.component />                    
                    } />
                )
              })}
             <Route path="/**" element={<App />} />
          </Routes>
      </>
    );
  }
  
export default PrivateRouter;