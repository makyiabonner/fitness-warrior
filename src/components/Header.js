import './Header.css'
export default function Header(){
    return (
        <header>
            <img src='logo/vector/default-monochrome-white.svg' ></img>
            <div>
                <li className="header-text">PROGRAMS</li>
                <li className="header-text">TESTIMONIALS</li>
                <li className="header-text">CONTACT</li>
                <li className="header-text header-button"><a>RETURNING MEMBER?</a></li>
            </div>
        </header>
    )
}

