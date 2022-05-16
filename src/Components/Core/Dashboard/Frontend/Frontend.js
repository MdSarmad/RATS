import React, {useState} from 'react'
import "./Frontend.css";
import frontendImg from '../../../../images/stack/fullstack6.png'

function Frontend() {
  const [webSize, setWebSize] = useState("");
  const [webRender, setWebRender] = useState("");
  const [webType, setWebType] = useState("");
  const [webArchitecture, setWebArchitecture] = useState("");

  const getFrontendTechStack = () => {
    console.log(webSize,webRender,webType,webArchitecture);
  }

  return (
    <div>
      <div className='frontendDashboard'>
        <div className='frontendDashboardBody'>
          <div class="frontendDashboardTitle">MY FRONTEND TECH STACK</div>
          <div className='frontendDashboardContainer'>
            <div className='frontendDashboardLeftContainer'>
              <div className='frontendDashboardContent'>

                <div className='markupBody web-size-box'>
                  <div className='markupLanguageSelect web-size-body'>
                    <select
                      typeof='option'
                      id='markupLanguage web-size-id'
                      select
                      className='markupLanguage web-size-class'
                      value={webSize}
                      onChange={(e) => setWebSize(e.target.value)}
                      autoFocus
                      autoComplete
                      required
                    >
                      <option value={''}>What is the size of the website?</option>
                      <option value={'SS'}>Small and Single Page</option>
                      <option value={'SM'}>Small with multiple Pages</option>
                      <option value={'LS'}>Medium/Large with Single Page</option>
                      <option value={'LM'}>Medium/Large with Multiple Pages</option>
                    </select>
                  </div>

                </div>


                <div className='stylingBody web-render-box'>

                  <div className='stylingSelect web-render-body'>
                    <select
                      typeof='option'
                      id='stylingLanguage web-render-id'
                      select
                      className='stylingLanguage web-render-class'
                      value={webRender}
                      onChange={(e)=>setWebRender(e.target.value)}
                      autoFocus
                      autoComplete
                      required
                    >
                      <option value={''}>Rendering</option>
                      <option value={'SSR'}>Server Side Rendering</option>
                      <option value={'CSR'}>Client Side Rendering</option>
                    </select>
                  </div>

                </div>


                <div className='programmingBody web-type-box'>

                  <div className='programmingSelect web-type-body'>
                    <select
                      typeof='option'
                      id='programmingLanguage web-type-id'
                      select
                      className='programmingLanguage web-type-class'
                      value={webType}
                      onChange={(e)=>setWebType(e.target.value)}
                      autoFocus
                      autoComplete
                      required
                    >
                      <option value={''}>Static or Dynamic?</option>
                      <option value={'static'}>Static Website</option>
                      <option value={'dynamic'}>Dynamic Website</option>
                    </select>
                  </div>

                </div>


                <div className='libraryBody web-arch-box'>

                  <div className='librarySelect web-arch-body'>
                    <select
                      typeof='option'
                      id='library web-arch-id'
                      select
                      className='library web-arch-class'
                      value={webArchitecture}
                      onChange={(e)=>setWebArchitecture(e.target.value)}
                      autoFocus
                      autoComplete
                      required
                    >
                      <option value={''}>Architecture</option>
                      <option value={'MVC'}>Model-View-Controller</option>
                      <option value={'MVVM'}>Model-View-ViewModel</option>
                      <option value={'FLUX'}>Flux</option>
                    </select>
                  </div>

                </div>


              </div>

              <div className='gateTechStackBody'>
                <div className='gateTechStackButton' onClick={getFrontendTechStack}>Get Teck Stack</div>
              </div>

              <div className='frontendDashboardAnswer'>
                <div className='frontendAnswer' />
              </div>

            </div>
            <div className='frontendDashboardRightContainer'>
              <img className="dashboard-frontend-img" src={frontendImg} alt="dashboard-frontend-img" />
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Frontend;