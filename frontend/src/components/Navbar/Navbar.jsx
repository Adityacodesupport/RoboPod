import React from 'react'
import PibythreeLogo from '../../Assets/pibythree_logo.png'
import './Navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector,useDispatch } from 'react-redux';
import {LogOut,setEmail,setName} from '../../features/User/userSlice'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="main-Auth-nav-bar">
          <div className="Main-left-nav">
            <img className='LogoImage' src={PibythreeLogo}/>
            <h2 className='LogoText'>RoboPod</h2>
          </div>
          <div className="main-right-nav">
            <AccountCircleIcon fontSize='large'/>
            {/* <NotificationsIcon fontSize='large'/> */}
                <button onClick={()=>{
              dispatch(LogOut())
              dispatch(setEmail(''))
              dispatch(setName(''))
              navigate('/')
            }
              }>Logout</button>
          </div>
        </div>
  )
}

export default Navbar;