import React from 'react';
import './SectionA1.css';
import Img from '../../images/section1.jpg';
function SectionA1() {
  return (
    <div className='section-a1'>
      <div className="section-a1-text">
        <h1 className='section-a1-title'>RATS</h1>
        <h3 className='section-a1-subTitle'>A Technology Stack Recommender</h3>
        <p className='section-a1-para'>One platform where for all those who need guidance while choosing the right technolog stack for building their application</p>
      </div>
      <div className="section-a1-pic">
        <img className="section1-img" src={Img} alt="section1-img" />
      </div>
    </div>
  )
}

export default SectionA1;