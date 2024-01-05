import React from 'react'
import './Login.css'
import PibythreeLogo from '../../Assets/pibythree_logo.png' 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Input from '@mui/joy/Input';
import { Button } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { LogIn,LogOut,setName,setEmail } from '../../features/User/userSlice';
import { useSelector,useDispatch } from 'react-redux';
import LinearProgress from '@mui/joy/LinearProgress';
import { useEffect } from 'react';

const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>state.user.LoggedIn)

    const navigate = useNavigate()

    const [progress,setProgress]=useState(0)

    // useEffect(()=>{
    //   if(isLoggedIn)
    //   navigate('/main')
    // },[])

    const [LogInUser,setLogInUser] = useState({
        Email:'',
        Password:''
    })

    const handleLogin = async() => {
            setProgress(0)
            setInterval(()=>setProgress(progress+1),1)
            axios
            .post(
              "http://localhost:3001/api/login",
              {
                usernameOrEmail:LogInUser.Email,
                password:LogInUser.Password
              }
            )
            .then((response) => {
              if(response.status==201)
              {
                alert("SignedUp Successfull!!")
                dispatch(LogIn())               
                dispatch(setName(response.data.username))
                dispatch(setEmail(response.data.useremail))               
                navigate('/main')
                
              }
              else if(response.status==400)
              {
                console.log(response.data.error)
                
              }
            })
            .catch(error=>{
                alert(error.response.data.error)
            })
        // alert(` ${LogInUser.Email} ${LogInUser.Password}`)
    }

  return (
    <div>
        <div className="Auth-nav-bar">
            <img className='LogoImage' src={PibythreeLogo}/>
            <h2 className='LogoText'>RoboPod</h2>
        </div>
        <LinearProgress determinate value={progress} size='sm' thickness={1}/>
        <div className="Login-Main-Page">
            <div className="Login-Left-Page">
                <div className="left-main-heading">
                <h1>Make something great</h1>
                </div>
                <div className="left-main-content">
                    <ul>
                    <li className='left-heading-item-lists'><CheckCircleIcon className='checkIcon'/>Deployment Made Easy On Few Clicks</li>
                    <li className='left-heading-item-lists'><CheckCircleIcon className='checkIcon'/>Build Your Infrastructure</li>
                    <li className='left-heading-item-lists'><CheckCircleIcon className='checkIcon'/>Containerize Your Application</li>
                    </ul>
                </div>
            </div>
            <div className="Login-Right-Page">
                <div className="right-main-heading">
                    <h1>Login</h1>
                </div>
                <div className="input-fields">
                    {/* <input className='Login-Input' type="text" placeholder='Email'/> */}
                    <Input className='Login-Input' color="neutral" disabled={false} placeholder="Enter Your Email ..." variant="outlined" onChange={(e)=>setLogInUser({...LogInUser,Email:e.target.value})}/>
                    <Input className='Login-Input' type="password" placeholder='Password' variant="outlined" onChange={(e)=>setLogInUser({...LogInUser,Password:e.target.value})}/>
                    {/* <button>Create Account</button> */}
                    <Button
                        className='Login-Submit-Button'
                        color="primary"
                        // onClick={function(){}}
                        onClick={()=>handleLogin()}
                        size="lg"
                        variant="solid"
                    >Submit</Button>
                </div>
                <h6>New To RoboPod? <span><Link to='/register'>Register</Link></span></h6>
            </div>
        </div>
    </div>
  )
}

export default Login



