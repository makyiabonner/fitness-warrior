import './Instagram-slides.css'
import React from "react";
import hoverLogo from '../images/instagram-coloredlogo.svg'
import pic1 from '..//images/sven-mieke-1MrMsNBcsYA-unsplash.webp'
import pic2
import pic3
import pic4
import pic5
import pic6


export default function InstaPics(){
        const pics = [
            {
                img:'',
                alt:''
            },
            {
                img:'',
                alt:''
            },
            {
                img:'',
                alt:''
            },
            {
                img:'',
                alt:''
            },
            {
                img:'',
                alt:''
            },
            {
                img:'',
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
                        background:`url(${pic.img})`
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