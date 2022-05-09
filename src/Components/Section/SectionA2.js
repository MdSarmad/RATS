import React from 'react';
import './SectionA2.css';
import frontend from '../../images/frontend.jpg';
import backend from '../../images/backend.png';
import fullstack from '../../images/fullstack.png';


function SectionA2() {
    return (
        <div className='section-a2'>
            <h1 className='section-a2-heading'>What kind of website are you building?</h1>
            <div className="tech-section">
                <div className="frontend-tech">
                    <div className="frontend-logo tech-logo">
                        <img className="frontend-img" src={frontend} />
                    </div>
                    <div className="frontend-text tech-text">Frontend</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="frontend-button tech-button">
                        <div className='button'>Click here</div>
                    </div>
                </div>
                <div className="backend-tech">
                    <div className="backend-logo tech-logo">
                        <img className="backend-img" src={backend} />
                    </div>
                    <div className="backend-text tech-text">Backend</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="backend-button tech-button">
                        <div className='button'>Click here</div>
                    </div>
                </div>
                <div className="full-stack-tech">
                    <div className="full-stack-logo tech-logo">
                        <img className="fullstack-img" src={fullstack} />
                    </div>
                    <div className="full-stack-text tech-text">Full Stack</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="full-stack-button tech-button">
                        <div className='button'>Click here</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionA2;