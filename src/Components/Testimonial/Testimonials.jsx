import React from 'react'
import './Testimonials.css'
import i16 from '../../Assets/i16.jpg';
// import i16 from'../../Assets/i16.jpg';
// import i16 from'../../Assets/i16.jpg';
// import i16 from'../../Assets/i16.jpg';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Received From Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avater'>
            <img src={i16} alt='CA' />
            <h5 className='client__name'>Someone</h5>
            <small className='client__review'>
              lorem ipsum blaa blaa blaa🤪
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avater'>
            <img src={i16} alt='CA' />
            <h5 className='client__name'>Someone</h5>
            <small className='client__review'>
              lorem ipsum blaa blaa blaa🤪
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avater'>
            <img src={i16} alt='CA' />
            <h5 className='client__name'>Someone</h5>
            <small className='client__review'>
              lorem ipsum blaa blaa blaa🤪
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avater'>
            <img src={i16} alt='CA' />
            <h5 className='client__name'>Someone</h5>
            <small className='client__review'>
              lorem ipsum blaa blaa blaa🤪
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Testimonials