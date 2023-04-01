import './Main.css'
import yoga from '../images/yoga.jpg'
import strength from '../images/weightlifting.jpg'
import cardio from '../images/cardio.jpg'

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
        <section className='first-section'>
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
        </section>
        
        </>
    )
}