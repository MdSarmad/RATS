import React, { useState } from 'react'
import "./Frontend.css";
import frontendImg from '../../../../images/stack/fullstack6.png'

function Frontend() {
  const [webSize, setWebSize] = useState("");
  const [webRender, setWebRender] = useState("");
  const [webType, setWebType] = useState("");
  const [webArchitecture, setWebArchitecture] = useState("");
  const [markLang, setMarkLang] = useState("");
  const [webStyle, setWebStyle] = useState("");
  const [webStyleLib, setWebStyleLib] = useState("");
  const [progLang, setProgLang] = useState("");
  const [progLib, setProgLib] = useState("");
  const [otherLib, setOtherLib] = useState("");
  const [relDb, setRelDb] = useState("");
  const [nonRelDb, setNonRelDb] = useState("");

  const getFrontendTechStack = () => {
    if (webSize === "SS") {
      setMarkLang("HTML");
      setProgLang("JavaScript");
      setWebStyle("CSS");
      setWebStyleLib("BootStrap");
      setProgLib("");
      setOtherLib("");
      setRelDb("");
      setNonRelDb("");
    } else if (webSize === "SM" || webSize === "LS" || webSize === "LM") {
      setMarkLang("HTML");
      setWebStyle("CSS");
      setProgLang("JavaScript");
      if (webArchitecture === "MVC") {
        setProgLib("Angular.js");
        setWebStyleLib("Angular Material");
        if (webType === "static") {
          if (webRender === "SSR") {
            setOtherLib("");
          } else {
            setOtherLib("Scully");
          }
        }
        if (webType === "dynamic") {
          if (webRender === 'SSR') {
            setOtherLib("Angular Universal");
          } else {
            setOtherLib("");
          }
        }
      }
      if (webArchitecture === "MVVM") {
        setProgLib("React.js");
        setWebStyleLib("Material UI");
        if (webType === "static") {
          if (webRender === "SSR") {
            setOtherLib("");
          } else {
            setOtherLib("Gatsby");
          }
        }
        if (webType === "dynamic") {
          if (webRender === 'SSR') {
            setOtherLib("Next.js");
          } else {
            setOtherLib("");
          }
        }
      }
      if (webArchitecture === "FLUX") {
        setProgLib("Vue.js");
        setWebStyleLib("Vuetify");
        if (webType === "static") {
          if (webRender === "SSR") {
            setOtherLib("");
          } else {
            setOtherLib("Gridsome");
          }
        }
        if (webType === "dynamic") {
          if (webRender === 'SSR') {
            setOtherLib("Nuxt.js");
          } else {
            setOtherLib("");
          }
        }
      }
      setRelDb("MySQL with Node.js (optional)");
      setNonRelDb("Firebase (optional)");
    }
  }

  const displayMLCode = (e) => {
    e.preventDefault();
    window.open("https://colab.research.google.com/drive/1R0dGU0weCmxnXUio_52d5F_iY8zs6ijb?usp=sharing");
  }

  return (
    <div>
    <buttton className="displayML" onClick={displayMLCode}>Display ML</buttton>
      <div className='frontendDashboard'>
        <div className='frontendDashboardBody'>
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
                      onChange={(e) => setWebRender(e.target.value)}
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
                      onChange={(e) => setWebType(e.target.value)}
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
                      onChange={(e) => setWebArchitecture(e.target.value)}
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

              <div className='frontendgetTechStackBody'>
                <div className='frontendgetTechStackButton' onClick={getFrontendTechStack}>Get Teck Stack</div>
                <div className='frontendPrintButton' onClick={() => window.print()}>Print</div>
              </div>
              <div className='frontendDashboardAnswer'>
                <div className='frontendAnswer'>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel markup">Markup Language </div>
                    <div className="frontendAnswerValue markup">{markLang}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Style </div>
                    <div className="frontendAnswerValue">{webStyle}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Style Library</div>
                    <div className="frontendAnswerValue">{webStyleLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel"> Programming Language </div>
                    <div className="frontendAnswerValue">{progLang}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Framework </div>
                    <div className="frontendAnswerValue">{progLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Other Library </div>
                    <div className="frontendAnswerValue">{otherLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Relational Database</div>
                    <div className="frontendAnswerValue">{relDb}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Non Relational Database</div>
                    <div className="frontendAnswerValue">{nonRelDb}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='frontendDashboardRightContainer'>
              <div class="frontendDashboardTitle">MY FRONTEND TECH STACK</div>
              <img className="dashboard-frontend-img" src={frontendImg} alt="dashboard-frontend-img" />
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Frontend;