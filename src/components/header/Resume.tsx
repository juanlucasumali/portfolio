import React from 'react'
import ResumePDF from '../../assets/resume.pdf';

const Resume = () => {
  return (
    <div className="resume">
        <a href={ResumePDF} download className='btn'>Download resume</a>
        <a href="#contact" className='btn btn-primary'>Let's talk!</a>
    </div>
    
  )
}

export default Resume