
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Popup from '../../components/Popup/Popup'; 
// Import the Popup component
import "./MyDeployments.css"; // Import the CSS file for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const MyDeployments = () => {
  const navigate = useNavigate();

  // Get Service Data
  const [appData, setAppData] = useState([]);
  const [revAppData,setRevAppData] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppData, setSelectedAppData] = useState(null);
  const [progress,setProgress] = useState(0)
  const [podAppName,setPodAppName]=useState('')

  // Get The Data After First Load
  useEffect(() => {
    // Make a GET request using Axios
    axios.get('http://localhost:3001/api/data/aniket')
      .then((res) => {
        // Clear the existing state and set the new data
        setAppData(res.data);
        setRevAppData(res.data.slice().reverse())
        console.log(revAppData)
        console.log({ responseData: res.data });
        console.log(appData)
      })
      .catch((err) => {
        console.log(err);
      });

    // Demo Data For Frontend 
  //   const demoData = [ { service: "openshift", deployment: "recreate", appname: "nginx-recreate-final", image: "quay.io/practicalopenshift/hello-world", pods: "3", PortName: "first", port: "8080", userName: "aniket" },
  //   { service: "openshift", deployment: "recreate", appname: "nginx-recreate-final", image: "quay.io/practicalopenshift/hello-world", pods: "3", PortName: "first", port: "8080", userName: "aniket" }
  // ]

  // setAppData(demoData)
    // Demo Data For Frontend 
    // const demoData = [
    //   { 
    //     service: "openshift", 
    //     deployment: "recreate", 
    //     appname: "nginx-recreate-final-distination-ok", 
    //     image: "quay.io/practicalopenshift/hello-world", 
    //     pods: [
    //       { podName: "pod1", podStatus: "Running", creationTime: "2022-01-10T12:30:00Z" },
    //       { podName: "pod2", podStatus: "Pending", creationTime: "2022-01-10T13:00:00Z" }
    //     ],
    //     PortName: "first", 
    //     port: "8080", 
    //     userName: "aniket" 
    //   },
    //   { 
    //     service: "openshift", 
    //     deployment: "recreate", 
    //     appname: "nginx-recreate-final", 
    //     image: "quay.io/practicalopenshift/hello-world", 
    //     pods: [
    //       { podName: "pod3", podStatus: "Running", creationTime: "2022-01-10T14:00:00Z" },
    //       { podName: "pod4", podStatus: "Running", creationTime: "2022-01-10T14:30:00Z" }
    //     ],
    //     PortName: "first", 
    //     port: "8080", 
    //     userName: "aniket" 
    //   }
    // ];

    // setAppData(demoData);
  }, []);

  const handleDelete = (row) => {
    const data = row;
    console.log(data);
    axios.delete('http://localhost:3001/api/delete', { data })
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.message)
      });
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
      <div className="data-table-container">
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>SERVICE</th>
                <th>DEPLOYMENT</th>
                <th>ENVIRONMENT</th>
                <th>APP NAME</th>
                <th>IMAGES</th>
                <th>PODS</th>
                <th>PORTS</th>
                <th>USER NAME</th>
                <th>MAX UNAVAILABLE</th>
                <th>DELETE</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {revAppData.map(row => {
                return (
                  <tr key={row.appname}>
                    <td>{row.service}</td>
                    <td>{row.deployment}</td>
                    <td>{row.environment ? row.environment : '-'}</td>
                    <td
                      className="show-popup-text"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        // alert('clicked')
                        const timer = setInterval(() => {
                          setProgress((oldProgress) => {
                            if (oldProgress === 100) {
                              return 0;
                            }
                            const diff = Math.random() * 10;
                            return Math.min(oldProgress + diff, 100);
                          });
                        }, 250);

                        axios.get(`http://localhost:3001/api/data/aniket/openshift/${row.environment ? row.environment :'recreate'}/${row.appname}`)
                        .then((res)=>{
                          // alert(res.data)
                          // console.log(res.data)  
                          setShowPopup(true);
                          setSelectedAppData(res.data);
                          setPodAppName(row.appname)
                          clearInterval(timer);
                          setProgress(0)
                        })
                        .catch((err)=>{
                          alert('Error Occured While Getting the pods')
                          setShowPopup(false);
                          clearInterval(timer);
                          setProgress(0)
                        })
                      }}
                    >
                      {row.appname}
                    </td>
                    <td>{row.image}</td>
                    <td>{row.pods}</td>
                    <td>{row.port}</td>
                    <td>{row.userName}</td>
                    <td>{row.maxUnavailable ? row.maxUnavailable : '-'}</td>
                    <td>
                      <button className="delete-button"
                        onClick={() => handleDelete(row)}>
                        DELETE
                      </button>
                    </td>
                    <td>
                      <button className="edit-button" onClick={() => {
                        if (row.service === 'openshift') {
                          navigate('/deployment/edit-openshift-deployment', { state: row });
                        }
                      }}>
                        EDIT
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Popup
        selectedAppData={selectedAppData}
        appName={podAppName}
        onClose={() => {
          setShowPopup(false);
          setSelectedAppData(null);
        }}
      />
    </div>
  );
};

export default MyDeployments;



