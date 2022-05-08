import React from 'react'
import SectionA1 from '../Section/SectionA1';
import SectionA2 from '../Section/SectionA2';
import SectionA3 from '../Section/SectionA3';
import SectionA4 from '../Section/SectionA4';
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
        <SectionA3/>
      </div>
      <div className='faqs'>
        <SectionA4/>
      </div>
      <div className='info'>
        info
      </div>
    </>
  )
}

export default Cover;