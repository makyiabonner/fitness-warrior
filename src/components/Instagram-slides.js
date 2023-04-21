import './Instagram-slides.css'
import React from "react";
import hoverLogo from '../images/instagram-coloredlogo.svg'
import pic1 from '..//images/sven-mieke-1MrMsNBcsYA-unsplash.webp'
import pic2 from '../images/sven-mieke-5xcVdzf_GWg-unsplash.webp'
import pic3 from '../images/sven-mieke-jO6vBWX9h9Y-unsplash.webp'
import pic4 from '../images/sven-mieke-OJlS0Iiv0mc-unsplash.webp'
import pic5 from '../images/sven-mieke-rZMe6PJJlko-unsplash.webp'
import pic6 from '../images/sven-mieke-t38NO0uU6tU-unsplash.webp'


export default function InstaPics(){
        const pics = [
            {
                img:pic1,
                alt:''
            },
            {
                img:pic2,
                alt:''
            },
            {
                img:pic3,
                alt:''
            },
            {
                img:pic4,
                alt:''
            },
            {
                img:pic5,
                alt:''
            },
            {
                img:pic6,
                alt:''
            },
        ]
    function MouseOver() {

      }
      function MouseOut(){
      }
      return (
        <>
        <div className='insta'>
            {pics.map(pic => {
                return (
                <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}
                    style={{
                        background:`url(${pic.img})`,
                        backgroundSize:'cover',
                        backgroundPosition:'center'
                    }}>
                    <div className='Hover-coat'>
                    <a href='' alt='Instagram Logo'>
                    <img src={hoverLogo} className='Hover-logo'></img>
                    </a>
                    </div>
                </div>   
                )
            })}
              
        </div>
        </>
    )
}