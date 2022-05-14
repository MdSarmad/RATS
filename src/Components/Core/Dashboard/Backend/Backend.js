import React from 'react'
import "./Backend.css"
import Navbar from '../../../Navbar/Navbar'
import backendImg from '../../../../images/stack/fullstack2.png'
function Backend() {
    return (
        <div>
            <Navbar />
            <div className='backendDashboard'>
                <div className='backendDashboardBody'>
                    <div class="backendDashboardTitle">MY BACKEND TECH STACK</div>

                    <div className='backendDashboardContainer'>
                        <div className='backendDashboardLeftContainer'>
                            <div className='backendDashboardContent'>
                                <div className='markupBody'>

                                    <div className='markupLanguageSelect'>
                                        <select
                                            typeof='option'
                                            id='markupLanguage'
                                            select
                                            className='markupLanguage'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Markup Languages</option>
                                            <option value={'HTML'}>HTML</option>
                                            <option value={'XML'}>XML</option>

                                        </select>
                                    </div>

                                </div>


                                <div className='stylingBody'>

                                    <div className='stylingSelect'>
                                        <select
                                            typeof='option'
                                            id='stylingLanguage'
                                            select
                                            className='stylingLanguage'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Styling</option>
                                            <option value={'CSS'}>CSS</option>
                                            <option value={'Tailwind'}>Tailwind CSS</option>
                                            <option value={'Bootstrap'}>Bootstrap</option>
                                        </select>
                                    </div>

                                </div>


                                <div className='programmingBody'>

                                    <div className='programmingSelect'>
                                        <select
                                            typeof='option'
                                            id='programmingLanguage'
                                            select
                                            className='programmingLanguage'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Programming Languages</option>
                                            <option value={'javascript'}>Java Script</option>
                                            <option value={'Python'}>Python</option>
                                            <option value={'Java'}>Java</option>
                                        </select>
                                    </div>

                                </div>


                                <div className='libraryBody'>

                                    <div className='librarySelect'>
                                        <select
                                            typeof='option'
                                            id='library'
                                            select
                                            className='library'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Library</option>
                                            <option value={'Angular'}>Angular</option>
                                            <option value={'React'}>React</option>
                                            <option value={'Vue'}>Vue</option>
                                            <option value={'React_Native'}>React Native</option>
                                        </select>
                                    </div>

                                </div>


                            </div>

                            <div className='backendDashboardAnswer'>
                                <textarea placeholder='Answer' className='frontendAnswer' />
                            </div>

                        </div>
                        <div className='backendDashboardRightContainer'>
                            <img className="dashboard-backend-img" src={backendImg} alt="image" />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Backend