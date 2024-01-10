import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./DeployAppOpenshift.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const DeployAppOpenShift = () => {
  const navigate = useNavigate();

  const [isLoading,setIsLoading] = useState(false)
  const [deploymentInfo, setDeploymentInfo] = useState({
    service: "open source",
    DeploymentType: "",
    DeploymentOption: "",
    AppName: "",
    ImageName: "",
    ports: "",
    pods: "",
    maxUnavailable: "",
  });

  const handleSubmit = () => {
    setIsLoading(true)
    alert("Data Submission Started");
    axios
      .post("http://localhost:8000/api/k8s", {
        service: "openshift",
        deployment: deploymentInfo.DeploymentType,
        environment: deploymentInfo.DeploymentOption,
        appname: deploymentInfo.AppName,
        image: deploymentInfo.ImageName,
        pods: deploymentInfo.pods,
        PortName: deploymentInfo.AppName,
        port: deploymentInfo.ports,
        userName: "aniket",
      })
      .then((res) => {
        setIsLoading(false)
        alert("data submission completed");
        console.log(res);
        alert(res.Routeurl);
        navigate("/deployment/MyDeployments");
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
        console.log(err);
      });
  };

  return (
    <div className="deployAppOpenShift-homePage">
      <Navbar />
      {`${deploymentInfo.DeploymentType} ${deploymentInfo.DeploymentOption} ${deploymentInfo.AppName}  ${deploymentInfo.ImageName} ${deploymentInfo.ports} ${deploymentInfo.pods} ${deploymentInfo.maxUnavailable}`}
      {isLoading ? 
          <Box className='OPenshiftLoader' sx={{ display: 'flex' }}>
          <CircularProgress />
          <p>Loading... </p>
          <p>Do Not Refresh the Page</p>
        </Box>
      :
      <div className="deployAppOpenShift-mainPage">
        <div className="deployAppOpenShift-service-type">
          <span>SERVICE TYPE:</span>
          <span>Open Shift</span>
        </div>
        <div className="deployAppOpenShift-Deployment-type">
          <div className="select-deployment-type">
            <h3>SELECT DEPLOYMENT TYPE</h3>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                DEPLOYMENT TYPE
              </InputLabel>
              <Select
                label="Age"
                onChange={async (e) => {
                  setDeploymentInfo({
                    ...deploymentInfo,
                    DeploymentType: e.target.value,
                    DeploymentOption: "",
                    maxUnavailable: "",
                  });
                }}
              >
                <MenuItem value={"bluegreen"}>Blue Green</MenuItem>
                <MenuItem value={"Rolling Update"}>Rolling Update</MenuItem>
                <MenuItem value={"recreate"}>Recreate</MenuItem>
              </Select>
            </FormControl>
          </div>
          {deploymentInfo.DeploymentType === "bluegreen" && (
            <div className="options-according-to-deployment-type">
              <h3>OPTIONS</h3>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  DEPLOYMENT OPTIONS
                </InputLabel>
                <Select
                  label="Age"
                  onChange={async (e) =>
                    setDeploymentInfo({
                      ...deploymentInfo,
                      DeploymentOption: e.target.value,
                    })
                  }
                >
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"green"}>Green</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
        </div>
        <div className="deployAppOpenShift-App-Name">
          <h3>App Name:</h3>
          <input
            type="text"
            placeholder="Enter Your App Name"
            onChange={(e) =>
              setDeploymentInfo({
                ...deploymentInfo,
                AppName: e.target.value,
              })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppOpenShift-Image-Name">
          <h3>Image Name:</h3>
          <input
            type="text"
            placeholder="Enter Your Image Name"
            onChange={(e) =>
              setDeploymentInfo({
                ...deploymentInfo,
                ImageName: e.target.value,
              })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppOpenShift-Port-Number">
          <h3>Port:</h3>
          <input
            type="number"
            placeholder="Enter Your Port Number"
            onChange={(e) =>
              setDeploymentInfo({ ...deploymentInfo, ports: e.target.value })
            }
            name=""
            id=""
          />
        </div>
        <div className="deployAppOpenShift-Pods-Number">
          <h3>Pods:</h3>
          <input
            type="number"
            placeholder="Enter Number Of Pods"
            onChange={(e) =>
              setDeploymentInfo({ ...deploymentInfo, pods: e.target.value })
            }
            name=""
            id=""
          />
        </div>
        {deploymentInfo.DeploymentType === "Rolling Update" && (
          <div className="deployAppOpenShift-Max-Unavailable">
            <h3>Max Unavailable:</h3>
            <input
              type="number"
              onChange={(e) =>
                setDeploymentInfo({
                  ...deploymentInfo,
                  maxUnavailable: e.target.value,
                })
              }
              name=""
              id=""
            />
          </div>
        )}
        <span className="page-info-openshift">
          In OpenShift, different deployment strategies, like Blue-Green and
          Rolling, offer unique approaches to updating pods Blue-Green
          deployment maintains two identical environments, enabling seamless
          updates by switching active (blue) and inactive (green) versions,
          reducing downtime and facilitating quick rollbacks Rolling deployment
          gradually updates pods, replacing old instances with new ones
          incrementally, ensuring continuous accessibility while minimizing user
          impact during updates
        </span>
        <Button
          className="deployAppOpenShift-Submit-Button"
          color="primary"
          onClick={() => handleSubmit()}
          size="lg"
          variant="solid"
        >
          Submit
        </Button>
      </div>}
    </div>
  );
};

export default DeployAppOpenShift;
