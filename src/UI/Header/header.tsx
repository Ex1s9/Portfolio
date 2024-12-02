import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <h2 className='header-portfolio'>My Portfolio</h2>
      <ul className='nav-link'>
        <li className='link'><a href='#'>About</a></li>
        <li className='link'><a href='#'>Skills</a></li>
        <li className='link'><a href='#'>Portfolio</a></li>
        <li className='link'><a href='#'>Contacts</a></li>
      </ul>
    </header>
  )
}
