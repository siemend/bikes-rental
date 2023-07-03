import React from 'react'
import Heading from "../Heading"
import './using.css'
import UsingCard from './UsingCard'

const Using = () => {
  return (
    <>
        <section className='using background'>
            <div className="container">
                <Heading title='How it works?' subtitle="Don't miss your opportunity! Register now!"/>
                <UsingCard />
            </div>
        </section>
    </>
  )
}

export default Using