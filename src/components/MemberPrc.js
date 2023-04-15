import './MemberPrc.css'

export default function Membership(){
    const prices = [{
        pass:'1 DAY PASS',
        price:'Free'
    },{
        pass:'1 MONTH PASS',
        price:'$25.99'

    },{
        pass:'1 YEAR PASS',
        price:'$175.99'
    }]
    return(
        prices.map(obj => {
            return (        
                <div className='membership'>
                    
                    <div 
                        className='membership-img' 
                        style={{
                            backgroundSize:'contain'
                        }}>   
                        <h3>{obj.pass}</h3>
                    </div>
                    <div className='membership-select'>
                        <div className='membership-select-left-div'>
                            <p>PRICES START FROM</p>
                            <h4>{obj.price}</h4>
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
            )
        })
    )
}