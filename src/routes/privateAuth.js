import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom';

const PrivateAuth = ({children}) => {
    const state=useSelector(store=>store.auth);
    // const location=useLocation();

  return (
    <>
    {
        !state.status?(children):<Navigate to={"/user"} />
    }
    </>
  )
}

export default PrivateAuth