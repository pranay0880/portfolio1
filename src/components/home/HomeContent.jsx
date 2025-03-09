import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Pradeep from "../../assets/images/PradeepImage.png";
import "../../styles/HomePage.css";

const HomeContent = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        flexWrap: "wrap",
      }}
    >
      <div className="particles">
        {Array.from({ length: 13 }).map((_, index) => (
          <span key={index} className="particle"></span>
        ))}
      </div>
      <Grid
        item
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          marginTop: "40px",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h4">
            Hello, i'm
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            fontWeight={"bold"}
            color="#008AD8"
          >
            Pradeep Dasari
          </Typography>
          <Typography gutterBottom variant="h6">
            Full Stack Developer with a passion for building dynamic,
            user-friendly web applications
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <div className="image-container">
          <img
            src={Pradeep}
            alt="pradeep Image"
            style={{
              height: "300px",
              width: "auto",
              clipPath: "circle(50%)",
              backgroundColor: "#ffffff",
            }}
            className="rounded-image"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
