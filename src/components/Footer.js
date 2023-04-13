import './Footer.css'
import InstaPics from './Instagram-slides'
import {Subhead} from './Main'

/*Subhead has 2 props, 
    'subhead' - representing title of subheading
                        &
    'context' - representing description of subheading
*/

export default function Footer(){
    return(
        <>
        <section className='footer-section'>
            <div className='footer-div'>
                <article>
                    <div>
                        <Subhead 
                            subhead='OUR COMMUNITY'
                            context='Gain your routine with our 
                                    growing library of workouts 
                                    led by our world-class trainers'
                        />
                    </div>
                    <div>
                        <a>JOIN US</a> 
                    </div>
                </article>
                <article className='linear-bg'>
                    <div>
                        <h2>#JOINFITNESSWARRIOR</h2>
                    </div>
                </article>
            </div>
            <div className='footer-div'>
                <InstaPics />
            </div>
        </section>
        </>
    )
}