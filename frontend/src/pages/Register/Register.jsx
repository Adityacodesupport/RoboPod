import React, { useState } from 'react'
import './Register.css'
import PibythreeLogo from '../../Assets/pibythree_logo.png' 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Input from '@mui/joy/Input';
import { Button } from '@mui/material';
import { Link, json } from 'react-router-dom';
import FormHelperText from '@mui/joy/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FormControl from '@mui/joy/FormControl';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn,LogOut,setEmail,setName } from '../../features/User/userSlice';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const finalUser = useSelector((state)=>state.user.LoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user,setUser] = useState({
        email:'',
        password:'',
        confirm_password:'',
        name:''
    })

    const [isEmailValid,setIsEmailValid]=useState(false)


    const handleSubmit = () => {
        isEmailValid?
            user.password===user.confirm_password && user.password!==''?
                axios
                .post(
                "http://localhost:3001/api/register",
                {
                        username:user.name,
                        email:user.email,
                        password:user.password,
                        name:user.name
                }
                )
                .then((response) => {
                if(response.status===201)
                {
                    alert("SignedUp Successfull!!")
                    dispatch(LogIn())
                    dispatch(setName(response.data.name))
                    dispatch(setEmail(response.data.email))
                    navigate('/main')
                    
                }
                else if(response.status===400)
                    {
                        console.log(response.data.error)
                        
                    }
                })
                .catch((error) => {
                alert(error.response.data.error);
                })
            :
                alert('Please Enter Correct Password....')
        :alert('Enter Valid Email...')
        // alert(`${user.name} ${user.email} ${user.password} ${user.confirm_password}`)
    }

  return (
    <div>
        <div className="Auth-nav-bar">
            <img className='LogoImage' src={PibythreeLogo}/>
            <h2 className='LogoText'>RoboPod</h2>
        </div>
        <div className="Register-Main-Page">
            <div className="Register-Left-Page">
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
            <div className="Register-Right-Page">
                <div className="right-main-heading">
                    <h1>Create Robopod Account</h1>
                </div>
                <div className="input-fields">
                    {/* <input className='Login-Input' type="text" placeholder='Email'/> */}
                    <Input className='Login-Input' color="neutral" disabled={false} placeholder="Enter Your Name ..." variant="outlined" onChange={(e)=>setUser({...user,name:e.target.value})}/>
                    <Input className='Login-Input' type='email'    color="neutral" 
                        disabled={false} placeholder="Enter Your Email ..." 
                        variant="outlined" 
                        onChange={(e)=>{
                            setUser({...user,email:e.target.value})
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            setIsEmailValid(emailRegex.test(user.email));
                        }}
                        error={!isEmailValid}
                        helperText={!isEmailValid && 'Please enter a valid email address.'}/>
                    <Input className='Login-Input' type="password" placeholder='Password' variant="outlined" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    <Input className='Login-Input' type="password" placeholder='Confirm Password' variant="outlined" onChange={(e)=>setUser({...user,confirm_password:e.target.value})}/>
                        {user.password!=='' && user.password!==user.confirm_password ?<>
                        <FormControl error>
                            <FormHelperText>
                            <InfoOutlined />
                            Password Does not match!!
                            </FormHelperText>
                        </FormControl>
                        </>:null}
                        <Button
                            className='Register-Submit-Button'
                            color='primary'
                            onClick={()=>handleSubmit()}
                            size="lg"
                            variant="solid"
                            // onSubmit={handleSubmit}
                        >Submit</Button>
                </div>
                <h6>Already Have Account? <Link to='/login'><span>Login</span></Link></h6>
            </div>
        </div>
    </div>
  )
}

export default Register



