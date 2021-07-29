import "./navbar.scss"
import {Mail, Person} from "@material-ui/icons/"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'navbar ' + (menuOpen && 'active')} id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>THOM</a>
                    <div className='itemContainer'>
                    <Mail className='icon' />
                    <span>thom.huenger@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                    <Person className='icon' />
                    <span>301.401.9189</span>
                    </div>
                </div>
              
                <div className="right">
                  <div className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
                </div>
            </div>

        </div>
    )
} 