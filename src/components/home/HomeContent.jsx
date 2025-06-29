import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import PradeepPaint from "../../assets/images/PradeepWaterPaint.png";
import PradeepReal from "../../assets/images/PradeepGhibli.png";
import "../../styles/HomePage.css";

const HomeContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          lg: "12px 80px",
          md: "40px 40px",
          sm: "40px 20px",
          xs: "72px 20px",
        },
        flexWrap: "wrap",
      }}
    >
      <Grid
        item
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          marginTop: "40px",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              fontSize: { lg: "32px", md: "24px", sm: "20px", xs: "16px" },
            }}
          >
            Hello, i'm
          </Typography>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            color={(theme) => theme.palette.primary.main}
            sx={{
              fontFamily: `"Iceberg", "sans-serif"`,
              fontWeight: 400,
              fontSize: { lg: "80px", md: "72px", sm: "56px", xs: "48px" },
            }}
          >
            Pradeep Dasari
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            sx={{
              marginTop: "20px",
              color: (theme) => theme.palette.text.secondary,
              fontSize: { lg: "36px", md: "30px", sm: "20px", xs: "20px" },
            }}
          >
            <Typography
              variant="h5"
              component={"sapn"}
              sx={{ fontWeight: "bold" }}
            >
              {" "}
              Full Stack Developer{" "}
            </Typography>
            passionate about crafting intuitive, performant, and scalable web
            applications.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              marginTop: "10px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            I specialize in turning ideas into responsive digital experiences
            using modern technologies. Let’s build something amazing together.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        size={{ xs: 12, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            cursor: isHovered ? "url('/cursors/smile.cur'), auto" : "default",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? PradeepPaint : PradeepReal}
            alt="pradeep water paint pic"
            style={{
              height: "400px",
              width: "auto",
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
