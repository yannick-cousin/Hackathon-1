import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
        <li>
          <span class="icon"><i class="fas fa-home"></i></span>
          <span class="text">Home</span>
        </li>
        </NavLink>
        <NavLink to="/profile" className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
        <li>
          <span class="icon"><i class="fas fa-user-alt"></i></span>
          <span class="text">Profile</span>
        </li>
        </NavLink>
        <NavLink to='/messages' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
		  	<li>
          <span class="icon"><i class="fas fa-comments"></i></span>
          <span class="text">Messages</span>
        </li>
        </NavLink>
        <NavLink to='/photos' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
			  <li>
          <span class="icon"><i class="fas fa-image"></i></span>
          <span class="text">Photos</span>
        </li>
        </NavLink>
        <NavLink to='/settings' className={(navbar) => (navbar.isActive ? 'list active' : 'list')}>
        <li>
          <span class="icon"><i class="fas fa-cog"></i></span>
          <span class="text">Settings</span>
        </li>
        </NavLink>
			<div class="indicator"></div>
    </ul>
    </div>
  )
}

export default Navbar;