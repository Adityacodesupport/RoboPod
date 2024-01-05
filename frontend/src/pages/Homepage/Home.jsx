import React, { useState } from 'react'
import PibythreeLogo from '../../Assets/pibythree_logo.png'
import './Home.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LinearProgress from '@mui/joy/LinearProgress';


const Home = () => {
  const [progress,setProgress]=useState(50)
  const navigate = useNavigate()
  return (
    <div>
      <div className="Home-Auth-nav-bar">
          <div className="home-left-nav">
            <img className='LogoImage' src={PibythreeLogo}/>
            <h2 className='LogoText'>RoboPod</h2>
          </div>
          <div className="home-right-nav">
            <Link to='/register'>
              <span className='home-Button'>
                <Button
                  color="primary"
                  size="lg"
                  variant="hard"
                >Signup</Button>
              </span>
            </Link>
            <Link to='/login'>
              <Button variant="outlined" color='primary'>Login</Button>
            </Link>
          </div>
        </div>
      {/* <LinearProgress determinate value={progress} /> */}
      <div className="home-main-page">
        <h1>Let's Automate With Robopod...</h1>
        <p>
        Simplify and streamline your deployment processes with our automation platform.</p>
        <p>Deploy containers seamlessly on both on-premise infrastructure and cloud providers like AWS.</p>
        <Button variant='hard' color='primary' onClick={()=>navigate('/register')}>Start Deploying...</Button>
      </div>
    </div>
  )
}

export default Home