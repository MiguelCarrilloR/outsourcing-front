import React from 'react'
import Main from '../components/Home/Main.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'
import StrategyMain from '../components/Strategy/StrategyMain.jsx'

const StrategyPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <StrategyMain />
        <Footer />
      </div>
    </div>
  )
}

export default StrategyPage