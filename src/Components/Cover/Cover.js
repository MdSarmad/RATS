import React from 'react'
import SectionA1 from '../Section/SectionA1';
import SectionA2 from '../Section/SectionA2';
import './Cover.css';
const Cover = () => {
  return (
    <>
      <div className='cover'>
        <SectionA1/>
      </div>
      <div className='products'>
        <SectionA2/>
      </div>
      <div className='reviews'>
        reviews
      </div>
      <div className='faqs'>
        faqs
      </div>
      <div className='info'>
        info
      </div>
    </>
  )
}

export default Cover;