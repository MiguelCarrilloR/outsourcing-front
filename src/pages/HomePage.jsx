import React from 'react'
import Main from '../components/Home/Main.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage