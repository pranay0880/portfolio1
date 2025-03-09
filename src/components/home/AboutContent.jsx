import {
  Grid2 as Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import ReactJS from "../../assets/images/ReactJSLogo.png";
import HTML from "../../assets/images/HTMLLogo.png";
import CSS from "../../assets/images/CSSLogo.png";
import JavaScript from "../../assets/images/JavascriptLogo.png";
import Bootstrap from "../../assets/images/BootstrapLogo.png";
import MaterialUI from "../../assets/images/MaterialUILogo.png";
import Python from "../../assets/images/PythonLogo.png";
import Express from "../../assets/images/ExpressJsLogo.png";
import NodeJs from "../../assets/images/NodeJsLogo.png";
import SQLite from "../../assets/images/SQLiteLogo.jpeg";
import MongoDB from "../../assets/images/MongoDBLogo.png";
import PostgreSQL from "../../assets/images/PostgreSQLLogo.jpeg";
import Git from "../../assets/images/GithubLogo.png";
import Jira from "../../assets/images/JiraLogo.jpeg";
import Bitbucket from "../../assets/images/BitbucketLogo.png";

const techData = {
  frontend: [
    { name: "ReactJS", img: ReactJS },
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JavaScript", img: JavaScript },
    { name: "Bootstrap", img: Bootstrap },
    { name: "Material UI", img: MaterialUI },
  ],
  backend: [
    { name: "Python", img: Python },
    { name: "Express", img: Express },
    { name: "Node.js", img: NodeJs },
  ],
  database: [
    { name: "SQLite", img: SQLite },
    { name: "MongoDB", img: MongoDB },
    { name: "PostgreSQL", img: PostgreSQL },
  ],
  others: [
    { name: "Github", img: Git },
    { name: "Jira", img: Jira },
    { name: "Bitbucket", img: Bitbucket },
  ],
};

const AboutContent = () => {
  const [alignment, setAlignment] = useState("frontend");

  const handleChange = (event, newAlignment) => {
    console.log(newAlignment, "ppp");
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Grid
      sx={{
        padding: "40px",
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        color="#008AD8"
        fontWeight="bold"
        marginBottom={6}
      >
        About me:
      </Typography>
      <Typography gutterBottom variant="h6">
        Hi, my name is Pradeep Dasari. Iam a Full Stack Developer, UI designer.
        I have honored my skills in web dvelpoment and advanced. Iam skilled in
        designing and implementing full-stack solutions for responsive,
        high-performance applications.
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#008AD8",
            fontSize: "40px",
            fontWeight: "bold",
            paddingRight: "8px",
          }}
        >
          1+
        </span>
        years of experience. Specialised in building web apps, while ensuring a
        seamless experience to the endusers.
      </Typography>
      <Typography
        gutterBottom
        variant="h4"
        color="#008AD8"
        fontWeight="bold"
        marginTop={4}
      >
        Skills:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            borderRadius: "30px",
            backgroundColor: "white",
            overflow: "hidden",
            boxShadow: "2px 2px 4px 3px #e0e0e0",
            padding: "4px",
            "& .MuiToggleButtonGroup-grouped": {
              borderRadius: "25px !important",
            },
            gap: "20px",
          }}
        >
          <ToggleButton
            value="frontend"
            sx={{
              border: "0px",
              "&.Mui-selected": {
                backgroundColor: "#008AD8",
                color: "white",
                "&:hover": { backgroundColor: "#008AD890" },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
              },
            }}
          >
            Front-End
          </ToggleButton>
          <ToggleButton
            value="backend"
            sx={{
              border: "0px",
              "&.Mui-selected": {
                backgroundColor: "#008AD8",
                color: "white",
                "&:hover": { backgroundColor: "#008AD890" },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
              },
            }}
          >
            Backend
          </ToggleButton>
          <ToggleButton
            value="database"
            sx={{
              border: "0px",
              "&.Mui-selected": {
                backgroundColor: "#008AD8",
                color: "white",
                "&:hover": { backgroundColor: "#008AD890" },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
              },
            }}
          >
            Database
          </ToggleButton>
          <ToggleButton
            value="others"
            sx={{
              border: "0px",
              "&.Mui-selected": {
                backgroundColor: "#008AD8",
                color: "white",
                "&:hover": { backgroundColor: "#008AD890" },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
              },
            }}
          >
            Others
          </ToggleButton>
        </ToggleButtonGroup>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {techData[alignment].map((tech) => (
            <div key={tech.name} style={{ textAlign: "center" }}>
              <img
                src={tech.img}
                alt={tech.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <p style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</p>
            </div>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default AboutContent;
