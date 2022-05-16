import React from 'react'
import "./FullStack.css"

import fullstackImg from '../../../../images/stack/fullstack1.png'

function FullStack() {
    return (
        <div>
            <div className='fullstackDashboard'>
                <div className='fullstackDashboardBody'>
                    

                    <div className='fullstackDashboardContainer'>
                        <div className='fullstackDashboardLeftContainer'>
                            <div className='fullstackDashboardContent'>
                                <div className='fullstackmarkupBody'>

                                    <div className='fullstackmarkupLanguageSelect'>
                                        <select
                                            typeof='option'
                                            id='markupLanguage'
                                            select
                                            className='fullstackmarkupLanguage'
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


                                <div className='fullstackstylingBody'>

                                    <div className='stylingSelect'>
                                        <select
                                            typeof='option'
                                            id='stylingLanguage'
                                            select
                                            className='fullstackstylingLanguage'
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


                                <div className='fullstackprogrammingBody'>

                                    <div className='fullstackprogrammingSelect'>
                                        <select
                                            typeof='option'
                                            id='programmingLanguage'
                                            select
                                            className='fullstackprogrammingLanguage'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Programming Languages</option>
                                            <option value={'javascript'}>Java Script</option>
                                            <option value={'Python'}>Python</option>
                                            <option value={'Java'}>Java</option>
                                            <option value={'PHP'}>PHP</option>

                                        </select>
                                    </div>

                                </div>


                                <div className='fullstacklibraryBody'>

                                    <div className='fullstacklibrarySelect'>
                                        <select
                                            typeof='option'
                                            id='library'
                                            select
                                            className='fullstacklibrary'
                                            autoFocus
                                            autoComplete
                                            required
                                        >
                                            <option value={''}>Library</option>
                                            <option value={'Angular'}>Angular</option>
                                            <option value={'React'}>React</option>
                                            <option value={'Vue'}>Vue</option>
                                            <option value={'React_Native'}>React Native</option>
                                            <option value={'Lavarel'}>Lavarel</option>
                                        </select>
                                    </div>

                                </div>


                            </div>
                            <div className='fullstackgetTechStackBody'>
                                <button className='fullstackgetTechStackButton'>Get Teck Stack</button>
                            </div>

                            <div className='fullstackDashboardAnswer'>
                                <div className='fullstackAnswer' />
                            </div>

                        </div>
                        <div className='fullstackDashboardRightContainer'>
                        <div className="fullstackDashboardTitle">MY FULLSTACK TECH STACK</div>
                            <img className="dashboard-fullstack-img" src={fullstackImg} alt="fullstack-img" />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default FullStack