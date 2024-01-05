import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './DeployAppOpenshift.css'

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
    return (
        <div className='deployAppOpenShift-homePage'>
            <Navbar />            
            <div className="deployAppOpenShift-mainPage">
                <div className="deployAppOpenShift-service-type">
                    <span>Service Type:</span><span>Open Shift</span>
                </div>
                <div className="deployAppOpenShift-Deployment-type">
                    <div className="select-deployment-type">
                        <h3>Select Deployment Type</h3>
                        <FormControl sx={{ m: 1, minWidth: 100 }} size="smalls">
                            <InputLabel>Deployment Type</InputLabel>
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
                        <h3>Option</h3>
                        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                            <InputLabel>Deployment Options</InputLabel>
                            <Select
                            label="Age"
                            onChange={(e)=>
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
                    <input type="text" onChange={e=>setDeploymentInfo({...deploymentInfo,AppName:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Image-Name">
                    <h3>Image Name:</h3>
                    <input type="text" onChange={e=>setDeploymentInfo({...deploymentInfo,ImageName:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Port-Number">
                    <h3>Port:</h3>
                    <input type="number" onChange={e=>setDeploymentInfo({...deploymentInfo,ports:e.target.value})} name="" id="" />
                </div>
                <div className="deployAppOpenShift-Pods-Number">
                    <h3>Pods:</h3>
                    <input type="number" onChange={e=>setDeploymentInfo({...deploymentInfo,pods:e.target.value})} name="" id="" />
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
                            onClick={()=>alert(`${deploymentInfo.DeploymentType} ${deploymentInfo.DeploymentOption} ${deploymentInfo.AppName}  ${deploymentInfo.ImageName} ${deploymentInfo.ports} ${deploymentInfo.pods} ${deploymentInfo.maxUnavailable}`)}
                            size="lg"
                            variant="solid"
                        >Submit</Button>
            </div>
        </div>
      )
}

export default DeployAppOpenShift