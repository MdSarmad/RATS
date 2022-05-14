import React from 'react'
import "./Backend.css"
import backendImg from '../../../../images/stack/fullstack2.png'
function Backend() {
    return (
        <div>

            <div className='backendDashboard'>
                <div className='backendDashboardBody'>
                    <div class="backendDashboardTitle">MY BACKEND TECH STACK</div>

                    <div className='backendDashboardContainer'>
                        <div className='backendDashboardLeftContainer'>
                            <div className='backendDashboardContent'>
                                <div className='backendmarkupBody'>

                                    <div className='backendmarkupLanguageSelect'>
                                        <select
                                            typeof='option'
                                            id='markupLanguage'
                                            select
                                            className='backendmarkupLanguage'
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


                                <div className='backendstylingBody'>

                                    <div className='backendstylingSelect'>
                                        <select
                                            typeof='option'
                                            id='stylingLanguage'
                                            select
                                            className='backendstylingLanguage'
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


                                <div className='backendprogrammingBody'>

                                    <div className='backendprogrammingSelect'>
                                        <select
                                            typeof='option'
                                            id='programmingLanguage'
                                            select
                                            className='backendprogrammingLanguage'
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


                                <div className='backendlibraryBody'>

                                    <div className='backendlibrarySelect'>
                                        <select
                                            typeof='option'
                                            id='library'
                                            select
                                            className='backendlibrary'
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
                            <div className='gateTechStackBody'>
                                <button className='gateTechStackButton'>Gate Teck Stack</button>
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