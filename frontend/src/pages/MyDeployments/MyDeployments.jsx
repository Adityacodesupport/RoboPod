
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Popup from '../../components/Popup/Popup'; 
// Import the Popup component
import "./MyDeployments.css"; // Import the CSS file for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const MyDeployments = () => {
  const navigate = useNavigate();

  // Get Service Data
  const [appData, setAppData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppData, setSelectedAppData] = useState(null);

  // Get The Data After First Load
  useEffect(() => {
<<<<<<< HEAD
    // Make a GET request using Axios
    axios.get('http://localhost:3001/api/data/aniket')
      .then((res) => {
        // Clear the existing state and set the new data
        setAppData(res.data);
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
=======
    // Demo Data For Frontend 
    const demoData = [
      { 
        service: "openshift", 
        deployment: "recreate", 
        appname: "nginx-recreate-final-distination-ok", 
        image: "quay.io/practicalopenshift/hello-world", 
        pods: [
          { podName: "pod1", podStatus: "Running", creationTime: "2022-01-10T12:30:00Z" },
          { podName: "pod2", podStatus: "Pending", creationTime: "2022-01-10T13:00:00Z" }
        ],
        PortName: "first", 
        port: "8080", 
        userName: "aniket" 
      },
      { 
        service: "openshift", 
        deployment: "recreate", 
        appname: "nginx-recreate-final", 
        image: "quay.io/practicalopenshift/hello-world", 
        pods: [
          { podName: "pod3", podStatus: "Running", creationTime: "2022-01-10T14:00:00Z" },
          { podName: "pod4", podStatus: "Running", creationTime: "2022-01-10T14:30:00Z" }
        ],
        PortName: "first", 
        port: "8080", 
        userName: "aniket" 
      }
    ];
>>>>>>> cbeabc2a8770fbf195495f320c621c7dd7e7b871

    setAppData(demoData);
  }, []);

  const handleDelete = (row) => {
    const data = row;
    console.log(data);
    axios.delete('http://localhost:3001/api/delete', { data })
      .then((res) => {
        alert(res.message);
        console.log(res.message);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Navbar />
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
              {appData.map(row => {
                return (
                  <tr key={row.appname}>
                    <td>{row.service}</td>
                    <td>{row.deployment}</td>
                    <td>{row.environment ? row.environment : 'NoNe'}</td>
                    <td
                      className="show-popup-text"
                      onClick={() => {
                        setShowPopup(true);
                        setSelectedAppData(row);
                      }}
                    >
                      {row.appname}
                    </td>
                    <td>{row.image}</td>
                    <td>{row.pods.length}</td>
                    <td>{row.port}</td>
                    <td>{row.userName}</td>
                    <td>{row.maxUnavailable ? row.maxUnavailable : 'NoNe'}</td>
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
        onClose={() => {
          setShowPopup(false);
          setSelectedAppData(null);
        }}
      />
    </div>
  );
};

export default MyDeployments;



