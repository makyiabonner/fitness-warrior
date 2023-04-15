import './Testimonial.css'
import woman1 from '../images/woman1-profile.jpg'
import guy1 from '../images/guy1-profile.jpg'


export default function Testimonial(){
    const reviewees = [{
        img: woman1,
        name:'Rhonda Jones',
        profile:'@IAMRHONDA223',
        job:'Influencer'
    },
    {
        img:guy1,
        name:'Ralph Gonzalez',
        profile:'@WRECKITRALPH',
        job:'Fitness Trainer'
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
                    <img src={obj.img}></img>
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