import React from 'react'
import Data, { using } from '../../data/Data'


const UsingCard = () => {
  return (
    <>
    <div className='content gridCard top1'>
        {using.map((items, index) => (
            <div className="box" key={index}>
                <img src={items.cover} alt='' />
                <h4>{items.name}</h4>
                <label>{items.total}</label>
            </div>
        ))}
    </div>
    </>
  )
}

export default UsingCard