/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import "../contact/contact.css"

const Contact = () => {
  return (
    <>
    <section className='contact'>
        <div className="container">
            <form action='' className='shadow'>
                <h4>Fillup the form</h4>
                <div>
                    <input type='text' placeholder='Your name' name='' id='' />
                    <input type='text' placeholder='Your email' name='' id='' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea name='' id='' cols='30' rows='10'>
                    Send us a message
                </textarea>
                <button>Subject request</button>
            </form>
            <div className='contactmap'>

            </div>
        </div>
    </section>
    </>
  )
}

export default Contact