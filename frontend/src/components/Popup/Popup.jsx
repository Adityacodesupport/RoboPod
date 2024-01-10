// Popup.js
import React from "react";
import "./Popup.css"; // Import the CSS file for styling

const Popup = ({ selectedAppData, onClose }) => {
  if (!selectedAppData) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h3>APP DETAILS: {selectedAppData.appname}</h3>
        <table>
          <thead>
            <tr>
              <th>POD NAME</th>
              <th>STATUS</th>
              <th>CREATION TIME</th>
            </tr>
          </thead>
          <tbody>
            {selectedAppData.pods.map((pod) => (
              <tr key={pod.podName}>
                <td>{pod.podName}</td>
                <td>{pod.podStatus}</td>
                <td>{pod.creationTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="popup-btn" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default Popup;
