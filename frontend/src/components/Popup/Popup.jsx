// Popup.js
import React, { useState } from "react";
import "./Popup.css"; // Import the CSS file for styling
import axios from "axios";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Popup = ({ selectedAppData,appName, onClose }) => {
  const [progress,setProgress]=useState(0)
  if (!selectedAppData) return null;

  const getPodDetail = ({ podName }) => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 250);
    axios.get(`http://localhost:3001/api/desc_pod/${podName}`)
    .then((res)=>{
      clearInterval(timer);
      setProgress(0)
      alert('success')
      console.log(res.data)
    })
    .catch((err)=>{
      clearInterval(timer);
      setProgress(0)      
      alert(err.message)
    })
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h3>App Name: {appName}</h3>
        <h3>Pod Details:</h3>
        {/* <h3>APP DETAILS: {selectedAppData.appname}</h3> */}
        {/* {selectedAppData} */}
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <table>
          <thead>
            <tr>
              <th>POD NAME</th>
              <th>STATUS</th>
              <th>CREATION TIME</th>
            </tr>
          </thead>
          <tbody>
            {selectedAppData.podNames.map((podName, index) => (
              <tr key={podName}>
                <td
                  className="pop-up-appName"
                  onClick={() => getPodDetail({ podName })}
                  style={{ cursor: "pointer" }}
                >
                  {podName}
                </td>
                <td>{selectedAppData.podStatus[index]}</td>
                <td>{selectedAppData.creationTime[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="popup-btn" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Popup;
