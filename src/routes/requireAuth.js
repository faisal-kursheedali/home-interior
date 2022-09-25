import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const state=useSelector(store=>store.auth);
    const location=useLocation();

  return (
    <>
        {
            state.status?(children):(<>
              <Navigate to="/login" state={location.pathname}/>
              </>)
        } 
    </>
  )
}

export default RequireAuth