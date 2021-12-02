import { lazy } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Auth from "../components/Pages/Login";
import NotFound from '../components/Pages/NotFound';
const Navbar = lazy(()=> import("../components/Parts/Navbar"))

function PublicRouter() {
    return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </>
    )
}

export default PublicRouter