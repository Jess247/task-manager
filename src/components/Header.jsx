import { SiRobotframework } from 'react-icons/si'
import NavLink from './NavLink'

function Header({navLinks}) {

    return(
        <header>
            <ul>    
                {navLinks.map((link, index) => <NavLink key={index} name={link.name} url={link.url}/>)}
            </ul>
        </header>
    )
}

export default Header
