import React,{ useState, Component } from "react";
import "./Navbar.css"
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
    const [visible, setVisible] = useState(false);


   return (
      <>
      <header>   
         <h2>ChillMachine</h2>

         <nav className="nav-links">
            <ul className="max-width-links">
               <li><a href="/#" className="home-menu">Home</a></li>
               <li><a href="/#">Tracks</a></li>
               <li><a href="/#">Artists</a></li>
               <li><a href="/#">Community</a></li>
               <li><a href="/#">About</a></li>

            </ul>
         </nav>
         <button className="navbar-button" onClick={()=>setVisible(!visible)}><IoMenu /> Menu</button>
      </header>

      <div className="show-nav-links">
         {
            visible &&  <div className="div-links">
            
               <ul className="min-width-links">
                  <li><a href="/#" className="home-menu">Home</a></li>
                  <li><a href="/#">Tracks</a></li>
                  <li><a href="/#">Artists</a></li>
                  <li><a href="/#">Community</a></li>
                  <li><a href="/#">About</a></li>

               </ul>
            </div> 
         }
         </div>

        
      </>
   )
}

export default Navbar