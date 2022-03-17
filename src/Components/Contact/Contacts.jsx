import React from 'react'
import './Contacts.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>my@email.com</h5>
            <a href='mailto:myemail@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Twitter</h4>
            <h5>my@twitter.com</h5>
            <a href='mailto:myemail@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Linkedin</h4>
            <h5>my@linkedin.com</h5>
            <a href='mailto:myemail@gmail.com'>Send a message</a>
          </article>
        </div>
        <form action=''></form>
      </div>
      </section>
  )
}

export default Contacts