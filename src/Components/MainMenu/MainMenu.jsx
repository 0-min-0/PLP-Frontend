import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const MainMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <div className="dropdown">
        <div className="icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/menu" onClick={toggleMenu}>Menu</Link>
          </li>
          <li>
            <Link to="/categorias" onClick={toggleMenu}>Categorías de trabajo</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
          </li>
          <li>
            <Link to="/tema" onClick={toggleMenu}>Tema (Predeterminado)</Link>
          </li>
          <li>
            <Link to="/ayuda" onClick={toggleMenu}>Ayuda</Link>
          </li>
        </ul>
      </div>
    )
  }

