import './Instagram-slides.css'



export default function InstaPics(){
    function MouseOver() {
        <div className='Hover-coat'>
            <a href='' alt='Instagram Logo'>
                <img src='' className='Hover-logo'></img>
            </a>
        </div>
      }
      function MouseOut(event){
        event.target.style.background="";
      }
      return (
        <>
        <div className='insta'>
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
            <div className='instapics' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                </div>        
        </div>
        </>
    )
}