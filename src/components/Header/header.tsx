import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
   return (
      <header className="header">
         <nav className='nav-conteiner'>
            <ul className='nav-links'>
               <li><Link to="/" className='nav-link'>About me</Link></li>
               <li><Link to="/skill" className='nav-link'>Skills</Link></li>
               <li><Link to="/project" className='nav-link'>Project</Link></li>
               <li><Link to="/contacts" className='nav-link'>Contacts</Link></li>
            </ul>
         </nav>
      </header>
   )
}