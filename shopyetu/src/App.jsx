
import Sidebar from "./layout/SideBar"
import Navbar from './layout/Navbar'
import Main from './layout/Main'


import './App.scss'

function App() {
  return (
    <>
    <div className="navbar"> <Navbar/></div>
    <div className="maincontent">
        <div className="sidebar">   <Sidebar/></div>
        <div className="main"> <Main/></div>
      
    </div>
   
 
    
     
      
    </>
  )
}

export default App
