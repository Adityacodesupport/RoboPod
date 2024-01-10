import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import "./MyDeployments.css"; // Import the CSS file for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const MyDeployments = () => {
  const nevigate = useNavigate()


  // Get Service Data
  const [appData,setAppData]=useState([])

  // Get The Data After First Load
  useEffect(() => {
    // Make a GET request using Axios
    // axios.get('http://localhost:3001/api/data/aniket')
    //   .then((res) => {
    //     // Clear the existing state and set the new data
    //     setAppData(res.data);
    //     console.log({ responseData: res.data });
    //     console.log(appData)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Demo Data For Frontend 
    const demoData = [ { service: "openshift", deployment: "recreate", appname: "nginx-recreate-final", image: "quay.io/practicalopenshift/hello-world", pods: "3", PortName: "first", port: "8080", userName: "aniket" },
    { service: "openshift", deployment: "recreate", appname: "nginx-recreate-final", image: "quay.io/practicalopenshift/hello-world", pods: "3", PortName: "first", port: "8080", userName: "aniket" }
  ]

  setAppData(demoData)

  }, []);

  const handleDelete = (row) => {
    const data = row
    console.log(data)
    axios.delete('http://localhost:3001/api/delete',
    {
      data
    })
    .then((res)=>{
    alert(res.message)
    console.log(res.message)
  })
    .catch((err)=>console.log(err.message))
  }


  return (
    <div>
      <Navbar />
      {appData.map(data=>console.log(data))}
      <p className='user-profile-page'>
        The user profile page serves as a comprehensive dashboard, presenting
        key details such as the number of pods currently active and the names of
        associated applications. Users gain insights into their deployed
        resources, providing an overview of active infrastructure and deployed
        applications
      </p>
      <div className='running-pod-status'>
        YOU CAN SEE RUNNING POD STATUS BY CLICKING ON SERVICE NAME
      </div>
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
              {/* Sample data row, you should map your data and create rows dynamically */}

              {
                appData.map(row=>{return(
                  <tr>
                  <td>{row.service}</td>
                  <td>{row.deployment}</td>
                  <td>{row.environment?row.environment:'NoNe'}</td>
                  <td>{row.appname}</td>
                  <td>{row.image}</td>
                  <td>{row.pods}</td>
                  <td>{row.port}</td>
                  <td>{row.userName}</td>
                  <td>{row.maxUnavailable?row.maxUnavailable:'NoNe'}</td>
                  <td>
                    <button className="delete-button"
                    onClick={()=>handleDelete(row)}
                    >
                      {/* Add your delete functionality here */}
                      DELETE
                    </button>
                  </td>
                  <td>
                    <button className="edit-button" onClick={()=>{
                      
                      if(row.service==='openshift') 
                      {
                        nevigate('/deployment/edit-openshift-deployment',{state:row})
                      }
                      
                      }}>
                      {/* Add your edit functionality here */}
                      EDIT
                    </button>
                  </td>
                </tr>)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDeployments;
