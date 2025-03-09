import { Grid2 as Grid, Typography, Box, Paper, Button } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../../styles/ProjectContent.css";
import { projects, timelineData } from "../helpers/CommonHelpers";

const PorjectsContent = () => {
  return (
    <Grid>
      <div className="timeline">
        <h2 className="timeline-title">Career History</h2>
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              <img src={item.image} alt="icon" />
            </div>
            <div className="timeline-content">
              <p className="timeline-date">{item.date}</p>
              <h3 className="timeline-position">{item.title}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Grid
        sx={{
          margin: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          Projects
        </Typography>
        {projects.map((project, index) => (
          <Paper
            key={index}
            sx={{ display: "flex", gap: "20px", padding: "24px" }}
          >
            <Box sx={{ width: "400px" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "400px" }}
              />
              <Box>
                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  endIcon={<OpenInNewIcon />}
                >
                  live
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" sx={{ fontWeight: "bold" }}>
                {project.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  color: "green",
                }}
              >
                {project.stack.map((tech, i) => (
                  <Typography key={i}>{tech}</Typography>
                ))}
              </Box>
              <Typography variant="h6">{project.description}</Typography>
            </Box>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default PorjectsContent;
