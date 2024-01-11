import React from 'react';
import './poddetails.css';
import Navbar from '../Navbar/Navbar';
import { useLocation,useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const PodDetails = () => {
    const navigate = useNavigate()
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <Navbar />
      <div className="pod-details">
        <div className="section-title">Pod Details</div>
        <hr />

        <div className="pod-details-wrapper">
            <div className="pod-info-item">
            <strong>Pod Name:</strong> {state.metadata.name}
            </div>

            <div className="pod-info-item">
            <strong>Namespace:</strong> {state.metadata.namespace}
            </div>
        </div>

        <div className="pod-details-wrapper">
            <div className="pod-info-item">
            <strong>Creation Time:</strong> {state.metadata.creationTimestamp}
            </div>

            <div className="pod-info-item">
            <strong>Status:</strong> {state.status.phase}
            </div>
        </div>

        <div className="pod-details-wrapper">
            <div className="pod-info-item pod-info-lables">
            <strong>Labels:</strong>
            {Object.keys(state.metadata.labels).map((key) => (
                <div key={key} className='pod-details-lable'>
                <p>
                    <strong>{key}:</strong> {state.metadata.labels[key]}
                </p>
                </div>
            ))}
            </div>

                <div className='Lables-Right-Items'>
                    <div className="pod-info-item">
                    <strong>Restart Policy:</strong> {state.spec.restartPolicy}
                    </div>

                    <div className="pod-info-item">
                    <strong>Node:</strong> {state.spec.nodeName}
                    </div>
                </div>
            
        </div>



        <div className="pod-info-item">
          <strong>Image Pull Secrets:</strong>
          {state.spec.imagePullSecrets.map((pullSecret, index) => (
            <span key={index}>{pullSecret.name}, </span>
          ))}
        </div>

        <hr />

        <div className="pod-info-item">
          <strong>Host IP:</strong> {state.status.hostIP}
        </div>

        <div className="pod-info-item">
          <strong>Pod IP:</strong> {state.status.podIP}
        </div>

        <div className="pod-info-item">
          <strong>Start Time:</strong> {state.status.startTime}
        </div>

        <hr />

        <div className="section-title">Containers:</div>
        {state.spec.containers.map((container, index) => (
          <div key={index} className="pod-container-item">
            <div>
              <strong>Container Name:</strong> {container.name}
            </div>
            <div>
              <strong>Image Name:</strong> {container.image}
            </div>
            <div>
              <strong>Image Pull Policy:</strong> {container.imagePullPolicy}
            </div>
          </div>
        ))}

        <hr />

        <div className="section-title">Conditions:</div>
        <table className="conditions-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Status</th>
              <th>Last Transition Time</th>
            </tr>
          </thead>
          <tbody>
            {state.status.conditions.map((condition, index) => (
              <tr key={index}>
                <td>{condition.type}</td>
                <td>{condition.status}</td>
                <td>{condition.lastTransitionTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button 
        className='pod-details-cancle-button'
      variant="contained"
      onClick={()=>navigate('/deployment/MyDeployments')}
      >
        {/* <KeyboardBackspaceIcon /> */}
        Back
      </Button>
      </div>
    </>
  );
};

export default PodDetails;
