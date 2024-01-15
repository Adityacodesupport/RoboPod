
import React, { useState } from 'react';
import PibythreeLogo from '../../Assets/pibythree_logo.png';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { LogOut, setEmail, setName } from '../../features/User/userSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    dispatch(LogOut());
    dispatch(setEmail(''));
    dispatch(setName(''));
    navigate('/');
  };

  return (
    <div className="main-Auth-nav-bar">
      <div className="Main-left-nav">
        <img className='LogoImage' src={PibythreeLogo} alt="Logo" />
        <div className='LogoText'>
          <h2>RoboPod</h2>
        </div>
      </div>
      <div className="main-right-nav">
        <div className="ProfileMenu" onClick={handleProfileClick}>
          <AccountCircleIcon fontSize='large' />
          {showProfileMenu && (
            <div className="ProfileOptions">
              <p onClick={() => console.log('Profile clicked')}>PROFILE</p>
              <p onClick={() => console.log('My Deployments clicked')}>MY DEPLOYMENTS</p>
              <p onClick={() => console.log('My Clusters clicked')}>MY CLUSTERS</p>
              <p onClick={() => console.log('My Templates clicked')}>MY TEMPLATES</p>
              <p onClick={() => console.log('Change Service clicked')}>CHANGE SERVICE</p>
            </div>
          )}
        </div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Navbar;
