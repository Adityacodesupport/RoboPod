import React, { useState } from 'react'
import './selectDeploymentType.css'
import { Button } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate } from 'react-router-dom';
// import InputLabel from '@mui/material';

const SelectDeploymentType = () => {

    const [DeploymentType,setDeploymentType]=useState('')
    const navigate = useNavigate()
  return (
    <div className='main-select-deployment-type'>
        <div className="select-deployment-type-main-heading">
            <h3>Deployment Type</h3>
        </div>
        <div className="select-deployment-type-select-button">
        <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
            <InputLabel id="demo-select-small-label">Deployment type</InputLabel>
            <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={DeploymentType}
            label="Deployment Type"
            onChange={(e)=>{setDeploymentType(e.target.value)}}
             >
                <MenuItem value={'Open Source'}>Open Source</MenuItem>
                <MenuItem value={'Aws'}>AWS</MenuItem>
                <MenuItem value={'Open Shift'}>Open Shift</MenuItem>
             </Select>
             <FormHelperText>Select Deployment Type*</FormHelperText>
      </FormControl>
        </div>
        <div className="select-deployment-type-submit-button">
        <Button
                        className='select-deployment-type-submit-button'
                        color="primary"
                        onClick={()=>{
                            if(DeploymentType==''){
                                alert('Select Deployment Type....')
                            }
                            else if(DeploymentType=='Open Source'){
                                navigate('/deployment/deploy-app-opensorce')
                            }
                            else if(DeploymentType==='Aws')
                            {
                                navigate('/deployment/deploy-app-aws')
                            }
                            else if(DeploymentType==='Open Shift')
                            {
                                navigate('/deployment/deploy-app-openshift')
                            }
                            else{
                                alert(DeploymentType)
                            }
                            
                        }}
                        size="lg"
                        variant="solid"
                    >+ Start Deployment</Button>
        </div>
    </div>
  )
}

export default SelectDeploymentType