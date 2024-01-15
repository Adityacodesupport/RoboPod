import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, setEmail, setName } from "../../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Main.css";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import ComputerIcon from "@mui/icons-material/Computer";
import LayersIcon from "@mui/icons-material/Layers";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const islogIn = useSelector((state) => state.user.LoggedIn);
  const email = useSelector((state) => state.user.Email);
  const name = useSelector((state) => state.user.Name);
  // const [isSelectDeplymentType,setIsSelectDeplymentType] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(islogIn===false)
  //   {
  //     navigate('/register')
  //   }
  // },[islogIn])

  return (
    <div className="Main-Home-Page">
      <Navbar />
      {/* <h1>After Login Main Page</h1>
        <h1>{email},{name}</h1> */}
      <div className="Main-Page">
        <span className="main-page-info">
          <b>Deploy Different Apps on Separate Servers</b>Isolate apps for
          control, scalability, and security. Dedicated servers ensure
          independent management and enhanced resource utilization for improved
          monitoring and security.
          <b>Establish Infrastructure Across Cloud Platforms</b>Build diverse
          infrastructure for flexibility and redundancy across multiple clouds.
          Leverage strengths, ensuring high availability, disaster recovery, and
          optimized service delivery.
        </span>
        <div className="Main-Content-Page">
          {/* <h1>Home Page</h1> */}
          <Button
            id="First-Main-Submit-Button"
            className="Main-Submit-Button"
            color="primary"
            // onClick={function(){}}
            onClick={(e) => navigate("/deployment-select")}
            size="lg"
            variant="solid"
          >
            APPLICATION DEPLOYMENT
          </Button>
          <Button
            className="Main-Submit-Button"
            color="primary"
            // onClick={function(){}}
            size="lg"
            variant="solid"
          >
            CREATE INFRASTRUCTURE
          </Button>
          <h5>COMING SOON</h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
