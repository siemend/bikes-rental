import React from 'react'
import Heading  from '../Heading'
import ChoosePlanCard from './ChoosePlanCard'
import '../plan/choosePlan.css'

const ChoosePlan = () => {
  return (
    <>
    <section className='choosePlan padding'>
        <div className='container'>
            <Heading title='Choose a plan' />
            <ChoosePlanCard />
        </div>
    </section>
    </>
  )
}

export default ChoosePlan