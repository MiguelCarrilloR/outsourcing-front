
import Footer from '../components/Footer/Footer.jsx'
import Sidebar from '../components/Navbar/Navbar.jsx'

import DocumentLibrary from '../components/Accounts/DocumentLibrary.jsx'

const MisionalPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DocumentLibrary />
        <Footer />
      </div>
    </div>
  )
}

export default MisionalPage