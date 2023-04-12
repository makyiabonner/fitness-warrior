import './Main.css'
import Membership from './MemberPrc'
import yoga from '../images/yoga.jpg'
import strength from '../images/weightlifting.jpg'
import cardio from '../images/cardio.jpg'
import Testimonial from './Testimonial'
import woman1 from '../images/woman1-profile.jpg'
import guy1 from '../images/guy1-profile.jpg'

export function Subhead(props){
    return(
        <>
            <div className='subhead'>
                <svg fill="#adff2f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                	 width="100px" height="100px" viewBox="0 0 300 300" enable-background="new 0 0 300 300">
                <g>
                	<path d="M150,7.5C71.421,7.5,7.5,71.434,7.5,150S71.421,292.5,150,292.5S292.5,228.566,292.5,150S228.579,7.5,150,7.5z
                		 M150,278.924c-71.092,0-128.924-57.841-128.924-128.924S78.908,21.076,150,21.076S278.924,78.917,278.924,150
                		S221.092,278.924,150,278.924z"/>
                	<rect x="110.992" y="136.424" width="78.017" height="27.152"/>
                	<path d="M58.402,128.786v2.758c-1.021-0.624-2.14-1.051-3.405-1.051c-3.748,0-6.779,3.036-6.779,6.778v25.457
                		c0,3.742,3.031,6.778,6.779,6.778c1.265,0,2.384-0.427,3.405-1.051v2.758c0,6.915,5.186,12.556,11.872,13.396V115.39
                		C63.588,116.23,58.402,121.871,58.402,128.786z"/>
                	<path d="M245.003,130.493c-1.265,0-2.384,0.427-3.404,1.051v-2.758c0-6.915-5.187-12.556-11.872-13.396v69.221
                		c6.686-0.841,11.872-6.481,11.872-13.396v-2.758c1.021,0.624,2.14,1.051,3.404,1.051c3.748,0,6.779-3.036,6.779-6.778v-25.457
                		C251.782,133.529,248.751,130.493,245.003,130.493z"/>
                	<path d="M90.628,94.033c-7.487,0-13.566,6.079-13.566,13.575v84.783c0,7.496,6.08,13.575,13.566,13.575
                		c7.496,0,13.576-6.079,13.576-13.575v-84.783C104.204,100.112,98.124,94.033,90.628,94.033z"/>
                	<path d="M209.372,94.033c-7.496,0-13.576,6.079-13.576,13.575v84.783c0,7.496,6.08,13.575,13.576,13.575
                		c7.487,0,13.566-6.079,13.566-13.575v-84.783C222.938,100.112,216.859,94.033,209.372,94.033z"/>
                </g>
                </svg>
                <h2>{props.subhead}</h2>
            </div>
            <p>{props.context}</p>
        </>
    )
}
export function Program(props){
    return(
        <>
            <div className='program'>
                <div 
                    className='program-img'
                    style={{
                    borderRadius:props.radius,
                    backgroundImage:`url(${props.imgurl})`
                    
                    }}
                    >
                </div>
                <section className='program-text'>
                    <h3>{props.title}</h3>
                    <p>{props.context}</p>
                </section>
            </div>         
        </>
    )
}
export default function Main(){
    return(
        <>
        <section className='main-section'>
            <Subhead 
                subhead='Our Programs'
                context='Deepen your practice through
                    traditional yoga flows with us.'
            />
            <div className='program-div'>
                <Program 
                    radius='61% 39% 73% 27% / 11% 46% 54% 89%'
                    imgurl= {yoga} 
                    title='YOGA'
                    context='Deepen your practice through
                        traditional yoga flows with us.'
                />

                <Program
                    radius='19% 81% 44% 56% / 9% 40% 60% 91%'
                    imgurl={cardio}
                    title='CARDIO AND HIT'
                    context='Deepen your practice through
                        traditional yoga flows with us.'
                />

                <Program 
                    radius='69% 31% 90% 10% / 76% 50% 50% 24%'
                    imgurl={strength}
                    title='STRENGTH TRAINING'
                    context='Deepen your practice through
                        traditional yoga flows with us.'
                />
            </div>
        </section>
        <section className='main-section'>
            <div>
                <Subhead 
                    subhead='MEMBERSHIP'
                    context='Deepen your practice through
                    traditional yoga flows with us.'
                />
                <div className='select-section'>
                    <Membership 
                        pass='1 DAY PASS'
                        price='Free'
                        style={{
                            backgroundColor:'grey'
                        }}
                    />
                    <Membership 
                        pass='1 MONTH PASS'
                        price='$25.99'
                    />
                    <Membership 
                        pass='1 YEAR PASS'
                        price='$175.99'
                    />
                </div>
            </div>
        </section>
        <section className='main-section'>
            <div>
                <Subhead 
                    subhead='WHAT THEY SAY'
                    context='Gain your routine with our 
                    growing library of workouts led by our 
                    world-class trainers'/>
            </div>
            <div className='reviews'>
                <Testimonial 
                    img={woman1}
                    name='Rhonda Jones'
                    profile='@IAMRHONDA223'
                    job='Influencer'
                />
                <Testimonial 
                    img={guy1}
                    name='Ralph Gonzalez'
                    profile='@WRECKITRALPH'
                    job='Fitness Trainer'
                />
            </div>
        </section>
        </>
    )
}