import React, { useState } from "react"
import "./header.css"
import {Link} from "react-router-dom"
import { nav } from "../../data/Data"
import { useEffect } from "react";


const Header = ({ admin, setAdmin }) => {
    useEffect(() => {
      const loggedInUser = localStorage.getItem("admin");
      if (loggedInUser) {
        setAdmin(loggedInUser);
      }
    }, []);
  
    const handleClick = () => {
      setAdmin(!admin);
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
    };
 
    const [navList, setNavList] = useState(false)
  return ( 
  <>  
        <header>
            <div className="container flex">
                <div className="logo">
                <img src= "logo.png" alt="LOGO" />
                </div>
                <div className='nav'>
                    <ul className={navList ? "small" : "flex"}>
                        {nav.map((list, index)=>(
                            <li key={index}>
                                <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="button flex">
                <Link to = "/signin"><button className="btn1">
                                <i className="fa fa-sign-in"></i> Sign in
                            </button> </Link>
                            
                </div>
                <div className="toggle">
                    <button onClick={() => setNavList(!navList)}>
                        {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </div>

            </div>
        </header>  
  </>
  )
}

export default Header