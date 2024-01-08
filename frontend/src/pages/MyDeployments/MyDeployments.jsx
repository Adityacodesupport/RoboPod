import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import "./MyDeployments.css"; // Import the CSS file for styling

const MyDeployments = () => {
  return (
    <div>
      <Navbar />
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
              <tr>
                <td>Sample Service</td>
                <td>Sample Deployment</td>
                <td>Sample Environment</td>
                <td>Sample App Name</td>
                <td>Sample Images</td>
                <td>Sample Pods</td>
                <td>Sample Ports</td>
                <td>Sample User Name</td>
                <td>Sample Max Unavailable</td>
                <td>
                  <button className="delete-button">
                    {/* Add your delete functionality here */}
                    DELETE
                  </button>
                </td>
                <td>
                  <button className="edit-button">
                    {/* Add your edit functionality here */}
                    EDIT
                  </button>
                </td>
              </tr>
              {/* Add more rows based on your data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDeployments;
