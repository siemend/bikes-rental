import React from 'react'
import { plan } from '../../data/Data'
import {Link} from "react-router-dom"

const ChoosePlanCard = () => {
  return (
    <>
    <div className="content flex top2">
        {plan.map((item, index) => {
            return ( <div className="box shadow" key={index}>
                <div className="topbtn">
                    <button className='btn3'>{item.best}</button>
                </div>
                <h3>{item.plan}</h3>
                <h1>
                    <span>$</span> {item.price}
                </h1>
                <p>{item.ptext}</p>
                <ul>
                    {item.list.map((val) => {
                        const {icon, text, change} = val
                        return (
                        <li>
                            <label htmlFor='' style={{
                                background :change==="color" ? "#dc35451d" : "#27ae601f",
                                color: change === "color" ? "#dc3848" : "#38B6FF"
                            }}>
                                {icon}
                            </label>
                            <p>{text}</p>
                        </li>
                        )
                    })}
                </ul>
                            <Link to = "/signin"><button className='btn5' style={{
                                background: item.plan ==="MONTHLY PASS" ? "#dc35451d" : "#27ae601f",
                                color: item.plan ==="MONTHLY PASS" ? "#dc3848" : "#38B6FF0"
                            }}>
                                Start {item.plan}
                            </button></Link>
            </div>
            )
        })}
    </div>
    
    </>
  )
}

export default ChoosePlanCard