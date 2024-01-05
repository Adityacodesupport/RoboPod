import './App.css'
import SelectDeploymentType from './pages/Deployment/selectDeploymentType/SelectDeploymentType'
import Home from './pages/Homepage/Home'
import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Main from './pages/MainPage/Main'
import { BrowserRouter as Router,Routes,Route,Link,Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn, LogOut} from './features/User/userSlice'
import { Navigate } from 'react-router-dom'
import DeployAppOpenSource from './pages/Deployment/DeployAppOpenSource/DeployAppOpenSource'
import DeployAppAWS from './pages/Deployment/DeployAppAWS/DeployAppAWS'
import DeployAppOpenShift from './pages/Deployment/DeployAppOpenshift/DeployAppOpenshift'

const App = () => {
  const isLoggedIn = useSelector((state)=>state.user.LoggedIn)
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/main' element={<Main />}></Route>
          <Route exact path='/deployment-select' element={<SelectDeploymentType />}></Route>
          <Route exact path='/deployment/deploy-app-opensorce' element={<DeployAppOpenSource />}></Route>
          <Route exact path='/deployment/deploy-app-aws' element={<DeployAppAWS />}></Route>
          <Route exact path='/deployment/deploy-app-openshift' element={<DeployAppOpenShift />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App