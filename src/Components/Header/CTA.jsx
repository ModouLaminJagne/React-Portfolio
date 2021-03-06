import React from 'react'
import STWDS from '../../Assets/STWDS.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={STWDS} download className='btn'>Download CV</a>
          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA