import './Testimonial.css'
import woman1 from '../images/woman1-profile.webp'
import guy1 from '../images/guy1-profile.webp'


export default function Testimonial(){
    const reviewees = [{
        img: woman1,
        name:'Rhonda Jones',
        profile:'@IAMRHONDA223',
        job:'Influencer',
        alt:'Rhonda Jones'
    },
    {
        img:guy1,
        name:'Ralph Gonzalez',
        profile:'@WRECKITRALPH',
        job:'Fitness Trainer',
        alt:'Ralph Gonzalez'
    }]
    return(
    reviewees.map(obj => {
        return(
            <>
            <section className='reviews-text'>
                <h1>//</h1>
                <h3>SINCE JOINING FITNESS WARRIOR,
                    I HAVE SEEN INCREASED STRENGTH, SIZE AND ENERGY
                    LEVELS! THE STAFF AT GO IS KNOWLEDGEABLE AND
                    ACCESSIBLE. THEY APPROACH FITNESS ON A LEVEL I 
                    HAVEN'T EXPERIENCED AT OTHER GYMS!
                </h3>
                <div className='reviews-profile'>
                    <img src={obj.img} alt={obj.alt}></img>
                    <div>
                        <h6>{obj.name}</h6>
                        <span>{obj.profile}</span>
                        <span>{obj.job}</span>
                    </div>
                </div>
            </section>
            </>
        )
    })
    )
}