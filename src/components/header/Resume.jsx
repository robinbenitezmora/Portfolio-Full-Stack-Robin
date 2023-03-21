import React from 'react';
import CV from '../../assets/cv.pdf'; // Import pdf file from assets folder

const Resume = () => {
  return (
    <div className='resume'>
      <a href={CV} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn-primary-class'>Let's Talk</a>
    </div>
  )
}

export default Resume