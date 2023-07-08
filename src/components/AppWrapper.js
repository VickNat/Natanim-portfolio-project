import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AppWrapper = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = 'rgb(242, 240, 243)';
    } else if (location.pathname === '/ContactMe') {
      document.body.style.backgroundColor = '#140424';
    } else {
      document.body.style.backgroundColor = 'rgb(242, 240, 243)';
    }

    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, [location])

  return (
    <>
    {children}
    </>
  )
}

export default AppWrapper