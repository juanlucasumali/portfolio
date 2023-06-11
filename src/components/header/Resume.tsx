import React from 'react'
import ResumePDF from '../../assets/resume.pdf';
import {HiOutlineDocumentText} from 'react-icons/hi'

const Resume = () => {
  return (
    <div className="resume">
        <a href={ResumePDF} download ><HiOutlineDocumentText style={{ marginBottom: '-3px', fontSize: '20px' }}/> Resume</a>
    </div>
    
  )
}

export default Resume