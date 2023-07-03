import React from 'react'
import Heading from './Heading'
import "./hero.css"
import {Report} from '../report/Report'

const Hero = () => {
  return ( <>
    
    <section className='hero'>
        <div className='container'>
            <Heading title='The best bike rental service in YOUR district!' subtitle='Press the button to register'/>
          {/*  <form className='flex'>
                <h2 id='rep'>Report a bike theft:</h2>
                <div className="box">
                    <span>Your name</span>
                    <input type='text' placeholder='Your name'/>
                </div>
                <div className="box">
                    <span>Your e-mail</span>
                    <input type='text' placeholder='Your e-mail'/>
                </div>
                <div className="box">
                    <span>City and street</span>
                    <input type='text' placeholder='Theft location'/>
                </div>
                <button className='btn'>
                    <i className='fa'>Report</i>
                </button>
            </form> */}
        </div>
        <Report />
    </section></>

  )
}

export default Hero