import './Header.css'
import logo from '../images/default-monochrome-white.svg'
export default function Header(){
    return (
        <header>
            <img src={logo}></img>
            <div>
                <li className="header-text">PROGRAMS</li>
                <li className="header-text">TESTIMONIALS</li>
                <li className="header-text">CONTACT</li>
                <li className="header-text header-button"><a>RETURNING MEMBER?</a></li>
            </div>
        </header>
    )
}

