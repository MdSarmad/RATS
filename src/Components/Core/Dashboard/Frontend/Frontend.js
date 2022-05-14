import React from 'react'
import "./Frontend.css";
import frontendImg from '../../../../images/stack/fullstack6.png'

function Frontend() {
  return (
    <div>
      <div className='frontendDashboard'>
        <div className='frontendDashboardBody'>
          <div class="frontendDashboardTitle">MY FRONTEND TECH STACK</div>

          <div className='frontendDashboardContainer'>
            <div className='frontendDashboardLeftContainer'>
              <div className='frontendDashboardContent'>
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

              <div className='gateTechStackBody'>
                <button className='gateTechStackButton'>Gate Teck Stack</button>
              </div>

              <div className='frontendDashboardAnswer'>
                <div className='frontendAnswer' />
              </div>

            </div>
            <div className='frontendDashboardRightContainer'>
              <img className="dashboard-frontend-img" src={frontendImg} alt="image" />
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Frontend;