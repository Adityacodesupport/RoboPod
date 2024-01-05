import './App.css'
import SelectDeploymentType from './Pages/Deployment/SelectDeploymentType/SelectDeploymentType'
import Home from './Pages/HomePage/Home'
import React from 'react'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Main from './Pages/MainPage/Main'
import { BrowserRouter as Router,Routes,Route,Link,Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn, LogOut} from './features/User/userSlice'
import { Navigate } from 'react-router-dom'
import DeployAppOpenSource from './Pages/Deployment/DeployAppOpenSource/DeployAppOpenSource'
import DeployAppAWS from './Pages/Deployment/DeployAppAWS/DeployAppAWS'
import DeployAppOpenShift from './Pages/Deployment/DeployAppOpenShift/DeployAppOpenshift'

const App = () => {
  const isLoggedIn = useSelector((state)=>state.user.LoggedIn)
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={
          isLoggedIn?<Navigate to='/main' replace={true}/>:<Home />}/>
          <Route exact path='/login' element={isLoggedIn ? 
          (<Navigate to='/main' replace={true} />
          ) : (
            <Login />
          )}/>
          <Route exact path='/register' element={isLoggedIn?<Navigate to='/main'/>:<Register/>}></Route>
          <Route exact path='/main' element={isLoggedIn?<Main />:<Navigate to='/register'/>}></Route>
          <Route exact path='/deployment-select' element={isLoggedIn?<SelectDeploymentType />:<Navigate to='/register'/>}></Route>
          <Route exact path='/deployment/deploy-app-opensorce' element={isLoggedIn?<DeployAppOpenSource />:<Navigate to='/register'/>}></Route>
          <Route exact path='/deployment/deploy-app-aws' element={isLoggedIn?<DeployAppAWS />:<Navigate to='/register'/>}></Route>
          <Route exact path='/deployment/deploy-app-openshift' element={isLoggedIn?<DeployAppOpenShift />:<Navigate to='/register'/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App