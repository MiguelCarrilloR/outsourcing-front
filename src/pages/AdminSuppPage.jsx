import React from 'react'
import Main from '../components/Home/Main.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'
import StrategyMain from '../components/Strategy/StrategyMain.jsx'
import MisionalMain from '../components/Misional/MisionalMain.jsx'
import StrategicDirectionModule from '../components/AdminSupp/AdminSupp.jsx'

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