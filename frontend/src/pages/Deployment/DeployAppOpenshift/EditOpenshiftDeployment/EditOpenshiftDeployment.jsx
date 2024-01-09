import React, { useEffect } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./EditOpenshiftDeployment.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditOpenshiftDeployment = () => {
  const location = useLocation();
  const { state } = location;
  const nevigate = useNavigate();

  const [deploymentInfo, setDeploymentInfo] = useState({
    service: "open shift",
    DeploymentType: "",
    DeploymentOption: "",
    AppName: "",
    ImageName: "",
    ports: "",
    pods: "",
    maxUnavailable: "",
  });

  // useEffect(()=>{
  //     if(state)
  //     {
  //         console.log(state)
  //     }
  // },[])

  // const handleSubmit = () => {
  //     // alert('Data Submission Started')
  //     // axios.post('http://localhost:8000/api/k8s',
  //     // {
  //     //     "service":"openshift",
  //     //     "deployment":deploymentInfo.DeploymentType,
  //     //     "environment":deploymentInfo.DeploymentOption,
  //     //     "appname":deploymentInfo.AppName,
  //     //     "image": deploymentInfo.ImageName,
  //     //     "pods":deploymentInfo.pods,
  //     //     "PortName":deploymentInfo.AppName,
  //     //     "port": deploymentInfo.ports,
  //     //     "userName":"aniket"
  //     //   })
  //     //   .then((res)=>{
  //     //     alert('data submission completed')
  //     //     console.log(res)
  //     //     alert(res)
  //     //     nevigate('/deployment/MyDeployments')
  //     //   })
  //     //   .catch(err=>{
  //     //     console.log(err)
  //     //   })
  // }

  return (
    <div className="edit-deployAppOpenShift-homePage">
      <Navbar />
      {`${deploymentInfo.DeploymentType} ${deploymentInfo.DeploymentOption} ${deploymentInfo.AppName}  ${deploymentInfo.ImageName} ${deploymentInfo.ports} ${deploymentInfo.pods} ${deploymentInfo.maxUnavailable}`}
      <div className="edit-deployAppOpenShift-mainPage">
          <div className="edit-deployAppOpenShift-service-type">
            <span>SERVICE TYPE:</span>
            <span>Open Shift</span>
          </div>
          <div className="edit-deployAppOpenShift-Deployment-type">
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
                  // value={state.deployment}
                >
                  <MenuItem value={"bluegreen"}>Blue Green</MenuItem>
                  <MenuItem value={"Rolling Update"}>Rolling Update</MenuItem>
                  <MenuItem value={"recreate"}>Recreate</MenuItem>
                </Select>
              </FormControl>
            </div>
            {
              deploymentInfo.DeploymentType === "bluegreen" && (
                //   ||
                //     (
                //         state.deployment === "bluegreen"
                <div className="options-according-to-deployment-type">
                  <h3>Option</h3>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 210 }}
                    size="small"
                  >
                    <InputLabel>DEPLOYMENT OPTIONS</InputLabel>
                    <Select
                      label="Age"
                      onChange={(e) =>
                        setDeploymentInfo({
                          ...deploymentInfo,
                          DeploymentOption: e.target.value,
                        })
                      }
                      // value={state.environment}
                    >
                      <MenuItem value={"blue"}>Blue</MenuItem>
                      <MenuItem value={"green"}>Green</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )
              // )
            }
          </div>
          <div className="edit-deployAppOpenShift-App-Name">
            <h3>App Name:</h3>
            <input
              placeholder="Enter Your App Name"
              type="text"
              onChange={(e) =>
                setDeploymentInfo({
                  ...deploymentInfo,
                  AppName: e.target.value,
                })
              }
              // value={state.appname}
              name=""
              id=""
            />
          </div>
          <div className="edit-deployAppOpenShift-Image-Name">
            <h3>Image Name:</h3>
            <input
              placeholder="Enter Your Image Name"
              type="text"
              onChange={(e) =>
                setDeploymentInfo({
                  ...deploymentInfo,
                  ImageName: e.target.value,
                })
              }
              //  value={state.image}
              name=""
              id=""
            />
          </div>
          <div className="edit-deployAppOpenShift-Port-Number">
            <h3>Port:</h3>
            <input
              placeholder="Enter Your Port Number"
              type="number"
              onChange={(e) =>
                setDeploymentInfo({ ...deploymentInfo, ports: e.target.value })
              }
              // value={state.port}
              name=""
              id=""
            />
          </div>
          <div className="edit-deployAppOpenShift-Pods-Number">
            <h3>Pods:</h3>
            <input
              placeholder="Enter Number Of Pods"
              type="number"
              onChange={(e) =>
                setDeploymentInfo({ ...deploymentInfo, pods: e.target.value })
              }
              // value={state.pods}
              name=""
              id=""
            />
          </div>
          {deploymentInfo.DeploymentType === "Rolling Update" && (
            <div className="edit-deployAppOpenShift-Max-Unavailable">
              <h3>Max Unavailable:</h3>
              <input
                placeholder="Enter maxUnavailable"
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
          className="edit-deployAppOpenShift-Submit-Button"
          color="primary"
          // onClick={()=>handleSubmit()}
          size="lg"
          variant="solid"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditOpenshiftDeployment;
