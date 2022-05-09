import React from 'react'
import SectionA1 from '../Section/SectionA1';
import SectionA2 from '../Section/SectionA2';
import SectionA3 from '../Section/SectionA3';
import SectionA4 from '../Section/SectionA4';
import SectionA5 from '../Section/SectionA5';
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
      <div className='footer'>
        <SectionA5/>
      </div>
      <div className='copy'>
         @copyright 2022
      </div>
    </>
  )
}

export default Cover;