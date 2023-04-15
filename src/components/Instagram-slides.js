import './Instagram-slides.css'
import React from "react";
import ReactDOM from "react-dom/client";
import hoverLogo from '../images/instagram-coloredlogo.svg'


export default function InstaPics(){
    function MouseOver() {
        let hover = document.querySelector('.Hover-coat')
      }
      function MouseOut(event){
        event.target.style.background="";
        const instap = document.querySelector('.instapics')
        const root = ReactDOM.createRoot(instap)
        return(
        root.render(<></>)
        )
      }
      return (
        <>
        <div className='insta'>
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <div className='Hover-coat'>
                    <a href='' alt='Instagram Logo'>
                    <img src={hoverLogo} className='Hover-logo'></img>
                </a>
            </div>
                </div>        
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                 </div>
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                 </div>
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                </div>
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                </div>
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                </div>        
        </div>
        </>
    )
}