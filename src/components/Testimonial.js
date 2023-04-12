import './Testimonial.css'

export default function Testimonial(props){
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
                <img src={props.img}></img>
                <div>
                    <h6>{props.name}</h6>
                    <span>{props.profile}</span>
                    <span>{props.job}</span>
                </div>
            </div>
        </section>
        </>
    )
}