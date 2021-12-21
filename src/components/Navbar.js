import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

const Navbar = ({notifications, setNotifications}) => {
  const [menu, setMenu] = useState(false);
  
  return (
    <div className="navbar">
      <div className="navigation">
        <ul>
          <NavLink to="/" className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
          <li>
            <span className="icon"><i className="fas fa-home"></i></span>
            <span className="text">Accueil</span>
          </li>
          </NavLink>
          <NavLink to='/quizz' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
          <li>
            <span className="icon"><i className="fas fa-question-circle"></i></span>
            <span className="text">Quiz</span>
          </li>
          </NavLink>
          <NavLink to='/messages' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
          <li>
            <span className="icon"><i className="fas fa-comments"></i></span>
            <span className="text">Messages</span>
          </li>
          </NavLink>          
          <NavLink to='/membres' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
          <li>
            <span className="icon"><i className="fas fa-kiss-wink-heart"></i></span>
            <span className="text">Membres</span>
          </li>
          </NavLink>
          <NavLink to="/profile" className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
          <li>
            <span className="icon"><i className="fas fa-user-cog"></i></span>
            <span className="text">Profil</span>
          </li>
          </NavLink>
			    <div className="indicator"></div>
        </ul>
      </div>
      <div className="menuMobile">
        <div className='containerLogoNavbar'>        
          <div className='logoNavBar'> Space Seducers</div>
        </div>

 	      <button onClick={() => setMenu(!menu)} className={menu === true ? "b1 active" : "b1"}>
          <div className="container-lignes">
            <div className="ligne"></div>
            <div className="ligne"></div>
            <div className="ligne"></div>
          </div>
        </button>
      </div>
      <div className={menu === true ? "menuDeroulant deroule" : "menuDeroulant"}> 
      <ul>

      <NavLink to="/"><li>Accueil</li></NavLink>
      <NavLink to="/"><li>Quiz</li></NavLink>
      <NavLink to="/messages"><li>Messages</li></NavLink>
      <NavLink to="/members"><li>Membres</li></NavLink>
      <NavLink to="/profile"><li>Profil</li></NavLink>
      </ul>
    </div>
  </div>
  )
}

export default Navbar;