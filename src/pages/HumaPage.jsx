import React from 'react'
import Main from '../components/Home/Main.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'
import StrategicDirectionModule from '../components/Human/Human.jsx'


const MisionalPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <StrategicDirectionModule />
        <Footer />
      </div>
    </div>
  )
}

export default MisionalPage