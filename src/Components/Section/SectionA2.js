import React from 'react';
import './SectionA2.css';

function SectionA2() {
  return (
    <div className='section-a2'>
        <h1 className='section-a2-heading'>What kind of website are you building? </h1>
        <div className="tech-section">
            <div className="frontend tech">
                <div className="frontend-logo tech-logo"></div>
                <div className="frontend-text tech-text">Frontend</div>
            </div>
            <div className="backend tech">
                <div className="backend-logo tech-logo"></div>
                <div className="backend-text tech-text">Backend</div>
            </div>
            <div className="full-stack tech">
                <div className="full-stack-logo tech-logo"></div>
                <div className="full-stack-text tech-text">Full Stack</div>
            </div>
        </div>
    </div>
  )
}

export default SectionA2;