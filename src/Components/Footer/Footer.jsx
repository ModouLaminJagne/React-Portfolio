import React from 'react'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>MLJ</a>

      <ul className='pernalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contacts</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'></a>
      </div>
    </footer>
  )
}

export default Footer