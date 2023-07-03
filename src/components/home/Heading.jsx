import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({title, subtitle}) => {
  return (
    <><div className="heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    

        <div className='reg_button'>
        <Link to = "/signup"><button>REGISTER</button></Link>
        </div>
    </div>
    </>
  )
}

export default Heading