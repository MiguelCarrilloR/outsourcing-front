import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'
import PPDPProgram from '../components/DataProtection/PPDPProgram.jsx'

const MisionalPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <PPDPProgram />
        <Footer />
      </div>
    </div>
  )
}

export default MisionalPage