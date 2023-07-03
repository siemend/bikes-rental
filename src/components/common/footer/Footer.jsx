import React from 'react'
import './footer.css'
import {Link} from "react-router-dom"
import { footer } from "../../data/Data"

const Footer = () => {
  return (
    <>
    <section className='footerContact'>
        <div className='container'>
            <div className="send flex">
                <div className="text">
                    <h1>Do you have any questions?</h1>
                    <p>It's our job to help you move faster!</p>
                </div>
                <Link to = "/contact"><button className='btn5'>Drop us a line!</button></Link>
            </div>
        </div>
    </section>

    <footer>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src='logo1.png' alt='LOGO' />
            <h2>Do you need help with renting bicycles?</h2>
            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

            <div className="input flex">
              <input type='text' placeholder='Email Address' name='' is=''></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {footer.map((val) => (
          <div className="box">
            <h3>{val.title}</h3>
            <ul>
                {val.text.map((items) => (
                  <li><Link to={items.path}>{items.list}</Link></li>

                ))}
            </ul>
          </div>
        ))}

      </div>
    </footer>
    <div className="law">
      <span>All rights reserved. Bike Rental. Design by ME !</span>
    </div>

    </>
  )
}

export default Footer