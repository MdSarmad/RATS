import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import "./FullStack.css"

import fullstackImg from '../../../../images/stack/fullstack1.png'

function FullStack() {
    return (
        <div>
            <Navbar />
            <div className='fullstackDashboard'>
                <div className='fullstackDashboardBody'>
                    <div class="fullstackDashboardTitle">MY FULLSTACK TECH STACK</div>

                    <div className='fullstackDashboardContainer'>
                        <div className='fullstackDashboardLeftContainer'>
                            <div className='fullstackDashboardContent'>
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

                            <div className='fullstackDashboardAnswer'>
                                <textarea placeholder='Answer' className='fullstackAnswer' />
                            </div>

                        </div>
                        <div className='fullstackDashboardRightContainer'>
                            <img className="dashboard-fullstack-img" src={fullstackImg} alt="image" />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default FullStack