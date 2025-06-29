import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import React from "react";
import { timelineData } from "../helpers/CommonHelpers";
import "../../styles/ProjectContent.css";

const skills = [
  "🎨 Designing responsive and accessible web interfaces.",
  "🔧 Building scalable backend APIs and integrating databases.",
  "🔁 Creating full-stack solutions using modern tech stacks (MERN, etc.).",
  "🚀  Optimizing performance and user experience.",
  "🔍 Write clean, maintainable code with an eye for detail.",
];

const AboutContent = () => {
  return (
    <Box
      sx={{
        padding: {
          lg: "12px 80px",
          md: "40px 40px",
          sm: "40px 20px",
          xs: "72px 20px",
        },
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        sx={{
          fontWeight: "500",
          fontSize: { lg: "48px", md: "40px", sm: "32px", xs: "30px" },
        }}
        color={(theme) => theme.palette.primary.main}
        marginBottom={3}
      >
        About me:
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        sx={{ fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" } }}
      >
        Hi, I’m Pradeep Dasari — a Full Stack Developer and UI Designer with a
        keen eye for clean design and smooth user experiences.
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          mb: 2,
          fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" },
        }}
      >
        Over the past{" "}
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: "bold",
            paddingRight: "4px",
          }}
        >
          2
        </Box>
        years, I’ve built and contributed to a range of web applications that
        balance elegant front-end design. I'm passionate about creating seamless
        user interfaces, solving complex problems, and continuously learning new
        technologies.
      </Typography>
      <div>
        <Typography
          sx={{ fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" } }}
          variant="h5"
        >
          What I Do Best 🧑‍💻:
        </Typography>
        <List sx={{ mb: 2 }}>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={skill}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: { lg: "18px", md: "16px" },
                      lineHeight: "1",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Typography
        variant="h5"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" },
        }}
      >
        My approach combines creativity with technical precision to deliver
        results that are both functional and beautiful. Whether I’m coding a
        dynamic interface, debugging a server issue, or sketching wireframes, I
        enjoy bringing digital ideas to life.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: (theme) => theme.palette.text.secondary,
          fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" },
        }}
      >
        Always curious🤔, Always building✍️.
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          mt: 3,
          color: (theme) => theme.palette.text.secondary,
          fontSize: { lg: "30px", md: "28px", sm: "20px", xs: "20px" },
        }}
      >
        Let’s collaborate and create impactful web experiences.
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid
          item
          size={{ xs: 12, md: 7 }}
          sx={{ padding: { lg: "40px", md: "30px", sm: "10px", xs: "0px" } }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { lg: "48px", md: "40px", sm: "32px", xs: "30px" },
            }}
          >
            Career Experience
          </Typography>
          {timelineData.map((item, index) => (
            <Box className="timeline-item" key={index}>
              <div className="timeline-dot">
                <img src={item.image} alt="icon" />
              </div>
              <Box
                className="timeline-content"
                sx={{
                  backgroundColor: (theme) => theme.palette.background.paper,
                }}
              >
                <h1 className="timeline-date">{item.date}</h1>
                <h3 className="timeline-position">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1" />
              <span className="side side2" />
              <span className="side side3" />
              <span className="side side4" />
              <span className="shadow" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutContent;
