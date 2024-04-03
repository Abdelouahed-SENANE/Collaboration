import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@components/navbar/Navbar'
const AuthLayout = () => {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </>
  )
}

export default AuthLayout