import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  )
}

export default AppLayout