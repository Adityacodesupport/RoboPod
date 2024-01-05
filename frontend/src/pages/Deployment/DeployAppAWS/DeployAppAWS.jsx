import React, { useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import { Button } from '@mui/material';
import './DeployAppAWS.css'

const DeployAppAWS = () => {
    const [deploymentInfo, setDeploymentInfo] = useState({
        service: 'AWS',
        clusterName: '',
        machine: '',
        nodes: ''
    })

    return (
        <div className='deployAppAWS-homePage'>
            <Navbar />
            {`${deploymentInfo.clusterName}${deploymentInfo.machine} ${deploymentInfo.nodes}`}
            <div className="deployAppAWS-mainPage">
                <div className="deployAppAWS-service-type">
                    <span>Service Type:</span><span>AWS</span>
                </div>
                <div className="deployAppAWS-Cluster-Name">
                    <h3>Cluster Name:</h3>
                    <input type="text" placeholder = 'Enter Cluster Name' onChange={e => setDeploymentInfo({ ...deploymentInfo, clusterName: e.target.value })} name="" id="" />
                </div>
                <div className="deployAppAWS-machine">
                    <h3>Machine:</h3>
                    <input type="text" placeholder = 'Enter Machine Name' onChange={e => setDeploymentInfo({ ...deploymentInfo, machine: e.target.value })} name="" id="" />
                </div>
                <div className="deployAppAWS-Node">
                    <h3>Nodes:</h3>
                    <input type="number" placeholder = 'Enter Number Of Nodes' onChange={e => setDeploymentInfo({ ...deploymentInfo, nodes: e.target.value })} name="" id="" />
                </div>

                <Button
                    className='deployAppOpenSource-Submit-Button'
                    color="primary"
                    onClick={() => alert(`${deploymentInfo.clusterName}${deploymentInfo.machine} ${deploymentInfo.nodes}`)}
                    size="lg"
                    variant="solid"
                >Create Cluster</Button>
            </div>
        </div>
    )
}

export default DeployAppAWS