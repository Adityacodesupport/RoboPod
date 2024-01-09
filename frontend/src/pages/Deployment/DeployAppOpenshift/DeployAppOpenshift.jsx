import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './DeployAppOpenshift.css'
import axios from 'axios'



const DeployAppOpenShift = () => {
    const [deploymentInfo,setDeploymentInfo] = useState({
        service:'open source',
        DeploymentType:'',
        DeploymentOption:'',
        AppName:'',
        ImageName:'',
        ports:'',
        pods:'',
        maxUnavailable:''
    })

    const handleSubmit = () => {
        alert('Data Submission Started')
        axios.post('http://localhost:8000/api/k8s',
        {
            "service":"openshift",
            "deployment":"recreate",
            "appname":"nginx-recreate-1",
            "image": "quay.io/practicalopenshift/hello-world",
            "pods":"2",
            "PortName":"first",
            "port": "8080",
            "userName":"aniket"
          })
          .then((res)=>{
            alert('data submission completed')
            console.log(res)
            alert(res)
          })
          .catch(err=>{
            console.log(err)
          })
    } 


    return (
        <div className='deployAppOpenShift-homePage'>
            <Navbar />            
            <div className="deployAppOpenShift-mainPage">
                <div className="deployAppOpenShift-service-type">
                    <span>SERVICE TYPE:</span><span>Open Shift</span>
                </div>
                <div className="deployAppOpenShift-Deployment-type">
                    <div className="select-deployment-type">
                        <h3>SELECT DEPLOYMENT TYPE</h3>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-standard-label">DEPLOYMENT TYPE</InputLabel>
                            <Select
                            label="Age"
                            onChange={async(e)=>{
                                setDeploymentInfo({...deploymentInfo,DeploymentType:e.target.value,DeploymentOption:'',maxUnavailable:''})
                            }}
                            >
                            <MenuItem value={'Blue Green'}>Blue Green</MenuItem>
                            <MenuItem value={'Rolling Update'}>Rolling Update</MenuItem>
                            <MenuItem value={'Recreate'}>Recreate</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {
                        deploymentInfo.DeploymentType==='Blue Green' &&
                    <div className="options-according-to-deployment-type">
                        <h3>OPTIONS</h3>
                        <FormControl variant= "standard" sx={{ m: 1, minWidth: 210 }}>
                            <InputLabel id="demo-simple-select-standard-label">DEPLOYMENT OPTIONS</InputLabel>
                            <Select
                            label="Age"
                            onChange={async(e)=>
                                setDeploymentInfo({...deploymentInfo,DeploymentOption:e.target.value})
                            }
                            >
                            <MenuItem value={'Blue'}>Blue</MenuItem>
                            <MenuItem value={'Green'}>Green</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    }
                </div>
                <div className="deployAppOpenShift-App-Name">
                    <h3>App Name:</h3>
                    <input type="text" placeholder='Enter Your App Name' onChange={e=>setDeploymentInfo({...deploymentInfo,AppName:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Image-Name">
                    <h3>Image Name:</h3>
                    <input type="text" placeholder='Enter Your Image Name' onChange={e=>setDeploymentInfo({...deploymentInfo,ImageName:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Port-Number">
                    <h3>Port:</h3>
                    <input type="number" placeholder='Enter Your Port Number' onChange={e=>setDeploymentInfo({...deploymentInfo,ports:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Pods-Number">
                    <h3>Pods:</h3>
                    <input type="number" placeholder='Enter Number Of Pods' onChange={e=>setDeploymentInfo({...deploymentInfo,pods:e.target.value})} name="" id="" />
                </div>
                {
                    deploymentInfo.DeploymentType === 'Rolling Update' && 
                    <div className="deployAppOpenShift-Max-Unavailable">
                    <h3>Max Unavailable:</h3>
                    <input type="number" onChange={e=>setDeploymentInfo({...deploymentInfo,maxUnavailable:e.target.value})} name="" id="" />
                </div>
                }
                <Button
                            className='deployAppOpenShift-Submit-Button'
                            color="primary"
                            onClick={()=>handleSubmit()}
                            size="lg"
                            variant="solid"
                        >Submit</Button>
            </div>
        </div>
      )
}

export default DeployAppOpenShift