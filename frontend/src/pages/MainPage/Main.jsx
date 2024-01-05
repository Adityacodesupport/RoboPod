import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { LogOut,setEmail,setName } from '../../features/User/userSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Main.css'
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import LayersIcon from '@mui/icons-material/Layers';

const Main = () => {
  const islogIn = useSelector((state)=>state.user.LoggedIn)
  const email = useSelector((state)=>state.user.Email)
  const name = useSelector((state)=>state.user.Name)
  // const [isSelectDeplymentType,setIsSelectDeplymentType] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(islogIn===false)
    {
      navigate('/register')
    }
  },[islogIn])

  return (
    <div className='Main-Home-Page'>
        <Navbar />
        {/* <h1>After Login Main Page</h1>
        <h1>{email},{name}</h1> */}
        <div className="Main-Page">
          <div className="Side-Bar">
              <ul className='side-bar-list'>
                <li className="Side-bar-items"> <HomeIcon/><span className='Side-bar-items-list'>Home</span></li>
                <li className="Side-bar-items"> <CloudIcon/><span className='Side-bar-items-list'>My Deployments</span></li>
                <li className="Side-bar-items"><LayersIcon/> <span className='Side-bar-items-list'>My Clusters</span></li>
                <li className="Side-bar-items"><ComputerIcon/><span className='Side-bar-items-list'>My Templates</span></li>
              </ul>
          </div>
          <div className="Main-Content-Page">
              {/* <h1>Home Page</h1> */}
              <Button
                        id='First-Main-Submit-Button'
                        className='Main-Submit-Button'
                        color="primary"
                        // onClick={function(){}}
                        onClick={(e)=>navigate('/deployment-select')}
                        size="lg"
                        variant="solid"
                    >Deploy App</Button>
              <Button
                        className='Main-Submit-Button'
                        color="primary"
                        // onClick={function(){}}
                        size="lg"
                        variant="solid"
                    >Create Infrastructure</Button>
          </div>
        </div>
    </div>
  )
}

export default Main