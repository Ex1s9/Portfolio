import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <h2 className='header-portfolio'>My Portfolio</h2>
      <ul className='nav-link'>
        <li className='link'><a href='#'>About me</a></li>
        <li className='link'><a href='#'>My project</a></li>
        <li className='link'><a href='#'>Steck</a></li>
        <li className='link'><a href='#'>Hire me</a></li>
      </ul>
    </header>
  )
}
