import React from 'react';
import { useNavigate } from "react-router-dom";
import './SectionA2.css';
import frontend from '../../images/frontend.jpg';
import backend from '../../images/backend.png';
import fullstack from '../../images/fullstack.png';



function SectionA2() {
    const navigate = useNavigate();
    return (
        <div className='section-a2'>
            <h1 className='section-a2-heading'>What kind of website are you building?</h1>
            <div className="tech-section">

                {/* frontend */}

                <div className="frontend-tech">
                    <div className="frontend-logo tech-logo">
                        <img className="frontend-img" src={frontend} alt="fontend-img" />
                    </div>
                    <div className="frontend-text tech-text">Frontend</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="frontend-button tech-button">
                        <div className='button' onClick={() => navigate("/frontend") }>Click here </div>
                    </div>
                </div>

                {/* backend */}

                <div className="backend-tech">
                    <div className='commingSoon'>
                        <button className='commingSoonButton'>Comming soon</button>
                    </div>
                    <div className="backend-logo tech-logo">
                        <img className="backend-img" src={backend} alt="backend-img" />
                    </div>
                    <div className="backend-text tech-text">Backend</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="backend-button tech-button">
                        <div className='button' onClick={() => navigate("/backend")}>Click here</div>
                    </div>
                </div>

                {/* fullstack */}

                <div className="full-stack-tech">
                <div className='commingSoon'>
                        <button className='commingSoonButton'>Comming soon</button>
                    </div>
                    <div className="full-stack-logo tech-logo">
                        <img src={fullstack} className="fullstack-img" alt="fullstack-img"  />
                    </div>
                    <div className="full-stack-text tech-text">Full Stack</div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="full-stack-button tech-button">
                        <div className='button' onClick={() => navigate("/fullstack")}>Click here</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionA2;