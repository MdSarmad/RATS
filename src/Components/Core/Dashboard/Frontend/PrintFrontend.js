import React from 'react';
import ReactDOM from 'react-dom';
import "./Frontend.css";

function PrintFrontend({markLang,webStyle,webStyleLib,progLang,progLib,otherLib,relDb,nonRelDb}) {
  return ReactDOM.createPortal(
        <div className='frontendDashboardAnswer'>
                <div className='frontendAnswer'>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Markup Language : </div>
                    <div className="frontendAnswerValue">{markLang}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Style : </div>
                    <div className="frontendAnswerValue">{webStyle}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Style Library : </div>
                    <div className="frontendAnswerValue">{webStyleLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Programming Language : </div>
                    <div className="frontendAnswerValue">{progLang}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Framework/Library : </div>
                    <div className="frontendAnswerValue">{progLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Other Library : </div>
                    <div className="frontendAnswerValue">{otherLib}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Relational Database : </div>
                    <div className="frontendAnswerValue">{relDb}</div>
                  </div>
                  <div className="frontendAnswerBox">
                    <div className="frontendAnswerLabel">Non Relational Database : </div>
                    <div className="frontendAnswerValue">{nonRelDb}</div>
                  </div>
                </div>
        </div>,document.body
  )
}

export default PrintFrontend;