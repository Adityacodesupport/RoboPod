import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Button } from "@mui/material";
import "./DeployAppAWS.css";

const DeployAppAWS = () => {
  const [deploymentInfo, setDeploymentInfo] = useState({
    service: "AWS",
    clusterName: "",
    machine: "",
    nodes: "",
    CIDR: "",
    PrivateSubnets: "",
    PublicSubnets: "",
  });

  return (
    <div className="deployAppAWS-homePage">
      <Navbar />
      {`${deploymentInfo.clusterName}${deploymentInfo.machine} ${deploymentInfo.nodes}`}
      <div className="deployAppAWS-mainPage">
        <div className="deployAppAWS-service-type">
          <span>SERVICE TYPE:</span>
          <span>AWS</span>
        </div>
        <div className="deployAppAWS-Cluster-Name">
          <h3>Cluster Name:</h3>
          <input
            type="text"
            placeholder="Enter Cluster Name"
            onChange={(e) =>
              setDeploymentInfo({
                ...deploymentInfo,
                clusterName: e.target.value,
              })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppAWS-machine">
          <h3>Machine:</h3>
          <input
            type="text"
            placeholder="Enter Machine Name"
            onChange={(e) =>
              setDeploymentInfo({ ...deploymentInfo, machine: e.target.value })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppAWS-Node">
          <h3>Nodes:</h3>
          <input
            type="number"
            placeholder="Enter Number Of Nodes"
            onChange={(e) =>
              setDeploymentInfo({ ...deploymentInfo, nodes: e.target.value })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppAWS-cidr">
          <h3>CIDR:</h3>
          <input
            type="number"
            placeholder="Ex.10.0.0.0/24"
            onChange={(e) =>
              setDeploymentInfo({ ...deploymentInfo, CIDR: e.target.value })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppAWS-private-subnet">
          <h3>Private Subnets:</h3>
          <input
            type="number"
            placeholder="Ex.10.0.0.0"
            onChange={(e) =>
              setDeploymentInfo({
                ...deploymentInfo,
                PrivateSubnets: e.target.value,
              })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppAWS-public-subnet">
          <h3>Public Subnets:</h3>
          <input
            type="number"
            placeholder="Ex.10.0.0.0"
            onChange={(e) =>
              setDeploymentInfo({
                ...deploymentInfo,
                PublicSubnets: e.target.value,
              })
            }
            name=""
            id=""
          />
        </div>
        <span className="eks-description">
          Amazon Elastic Kubernetes Service (EKS) enables the deployment of
          containerized applications using Kubernetes on AWS, providing
          scalable, managed clusters for orchestrating and managing
          containerized workloads efficiently.
        </span>

        <Button
          className="deployAppOpenSource-Submit-Button"
          color="primary"
          onClick={() =>
            alert(
              `${deploymentInfo.clusterName}${deploymentInfo.machine} ${deploymentInfo.nodes}`
            )
          }
          size="lg"
          variant="solid"
        >
          Create Cluster
        </Button>
      </div>
    </div>
  );
};

export default DeployAppAWS;
