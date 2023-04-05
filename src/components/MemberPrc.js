import './MemberPrc.css'
import basicPattern from '../images/BscMemberPtn.png'

export default function Membership(props){
    return(
        <>
        <div className='membership'>
            <div 
                className='membership-img' 
                style={{
                    background:`url(${basicPattern})`,
                    backgroundSize:'contain'
                }}>   
                <h3>{props.pass}</h3>
            </div>
            <div className='membership-select'>
                <div className='membership-select-left-div'>
                    <p>PRICES START FROM</p>
                    <h4>{props.price}</h4>
                </div>
                <div className='membership-select-right-div'
                    style={{
                        display:'flex',
                        alignItems:'center'
                    }}>
                    <a href='' className='mem-select'>SELECT</a>
                </div>
            </div>
        </div>
        </>
    )
}