import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink to="/about" className="about-link">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink to="/contact" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="nonreferer"
          href="https://www.linkedin.com/in/zeyu-ye-34363924a/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nonreferer" href="https://github.com/keak">
          <FontAwesomeIcon icon={faGithub} color="black" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
