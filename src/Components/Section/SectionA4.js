import React from 'react';
import './SectionA4.css';
import DownArrow from '../../images/down-arrow.png'

function SectionA4() {
  return (
    <div className='section-a4'>
      <h1 className="section-a4-heading">Frequently asked questions</h1>
      <div className="section-a4-faqs">
        <div className="faq1 faq">
          <div>
            What is this website for?
          </div>
          <div>
            <img className="arrow-img" src={DownArrow} alt="down-arrow-img" />
          </div>

        </div>

        <div className="faq2 faq">
          <div>
            How can I find the tech stack for my website?
          </div>
          <div>
            <img className="arrow-img" src={DownArrow} alt="down-arrow-img" />
          </div>
        </div>

        <div className="faq3 faq">
          <div>
            Can I use the tech stack recommended by this website?
          </div>
          <div>
            <img className="arrow-img" src={DownArrow} alt="down-arrow-img" />
          </div>
        </div>

        <div className="faq4 faq">
          <div>
            How does this website suggests the tech stack?
          </div>
          <div>
            <img className="arrow-img" src={DownArrow} alt="down-arrow-img" />
          </div>
        </div>
        <div className="faq5 faq">
          <div>
            Is it free?
          </div>
          <div>
            <img className="arrow-img" src={DownArrow} alt="down-arrow-img" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionA4;