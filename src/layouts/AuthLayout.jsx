import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <header>
            Header
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