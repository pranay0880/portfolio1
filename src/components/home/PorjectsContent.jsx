import {
  Typography,
  Box,
  // ToggleButtonGroup,
  // ToggleButton,
  Grid,
  IconButton,
  Chip,
  Avatar,
} from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../../styles/ProjectContent.css";
import { projects, techData } from "../helpers/CommonHelpers";

const PorjectsContent = () => {
  // const [alignment, setAlignment] = useState("frontend");

  const allTech = [
    ...techData.frontend,
    ...techData.backend,
    ...techData.database,
    ...techData.others,
  ];

  const allDuplicatedTech = [...allTech, ...allTech];

  const renderScrollRow = (data, reverse = false) => (
    <div className="chip-scrolling-wrapper">
      <div className={`chip-scrolling-track ${reverse ? "reverse" : ""}`}>
        {data.map((tech, index) => (
          <Chip
            key={`${tech.name}-${index}`}
            label={tech.name}
            avatar={<Avatar src={tech.img} />}
            variant="outlined"
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          />
        ))}
      </div>
    </div>
  );
  return (
    <Box
      sx={{
        padding: {
          lg: "60px 80px",
          md: "60px 40px",
          sm: "60px 20px",
          xs: "72px 20px",
        },
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        color={(theme) => theme.palette.primary.main}
        fontWeight="500"
        sx={{ fontSize: { lg: "40px", md: "36px", sm: "32px", xs: "30px" } }}
      >
        Skills:
      </Typography>
      {/* <Box
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
            backgroundColor: (theme) => theme.palette.background.paper,
            display: "flex",
            overflow: "hidden",
            boxShadow: `2px 2px 4px 3px ${(theme) =>
              theme.palette.background.default}`,
            padding: "6px",
            "& .MuiToggleButtonGroup-grouped": {
              borderRadius: "4px !important",
            },
            gap: { lg: "20px", md: "16px", sm: "12px", xs: "8px" },
            height: "48px",
          }}
        >
          <ToggleButton
            value="frontend"
            sx={{
              border: "0px",
              fontSize: { lg: "24px", md: "20px", sm: "16px", xs: "10px" },
              textTransform: "none",
              "&.Mui-selected": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
                fontWeight: "bold",
                padding: {
                  xs: "4px",
                  sm: "4px 8px",
                  md: "4px 12px",
                  lg: "4px 16px",
                },
              },
            }}
          >
            Front-End
          </ToggleButton>
          <ToggleButton
            value="backend"
            sx={{
              border: "0px",
              fontSize: { lg: "24px", md: "20px", sm: "16px", xs: "10px" },
              textTransform: "none",
              "&.Mui-selected": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
                padding: {
                  xs: "4px",
                  sm: "4px 8px",
                  md: "4px 12px",
                  lg: "4px 16px",
                },
              },
            }}
          >
            Backend
          </ToggleButton>
          <ToggleButton
            value="database"
            sx={{
              border: "0px",
              fontSize: { lg: "24px", md: "20px", sm: "16px", xs: "10px" },
              textTransform: "none",
              "&.Mui-selected": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
                padding: {
                  xs: "4px",
                  sm: "4px 8px",
                  md: "4px 12px",
                  lg: "4px 16px",
                },
              },
            }}
          >
            Database
          </ToggleButton>
          <ToggleButton
            value="others"
            sx={{
              border: "0px",
              fontSize: { lg: "24px", md: "20px", sm: "16px", xs: "10px" },
              textTransform: "none",
              "&.Mui-selected": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
                boxShadow: "2px 2px 4px #e0e0e0",
                fontWeight: "bold",
                padding: {
                  xs: "4px",
                  sm: "4px 8px",
                  md: "4px 12px",
                  lg: "4px 16px",
                },
              },
            }}
          >
            Others
          </ToggleButton>
        </ToggleButtonGroup>
        <Box
          sx={{
            marginTop: "50px",
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "12px", sm: "16px", md: "20px", lg: "30px" },
          }}
        >
          {techData[alignment].map((tech) => (
            <div key={tech.name} style={{ textAlign: "center" }}>
              <Box
                component="img"
                src={tech.img}
                alt={tech.name}
                sx={{
                  width: { xs: 60, sm: 40, md: 80, lg: 100 },
                  height: { xs: 60, sm: 40, md: 80, lg: 100 },
                  objectFit: "contain",
                }}
              />
              <Typography
                component="p"
                sx={{
                  marginTop: "10px",
                  fontSize: { xs: "12px", sm: "12px", md: "16px", lg: "18px" },
                }}
              >
                {tech.name}
              </Typography>
            </div>
          ))}
        </Box>
      </Box> */}

      <Box>
        {renderScrollRow(allDuplicatedTech, false)}
        {renderScrollRow(allDuplicatedTech, true)}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginBottom: "20px",
            color: (theme) => theme.palette.primary.main,
            fontWeight: "500",
          }}
        >
          Projects
        </Typography>
        {projects.map((project, index) => (
          <Grid
            container
            key={index}
            sx={{
              display: "flex",
              backgroundColor: (theme) => theme.palette.background.default,
              border: (theme) => `1px solid ${theme.palette.text.border}`,
              borderRadius: "10px",
              flexWrap: "wrap",
              "&:hover": {
                transform: "scale(1.02)",
                transition: "transform 0.3s ease-in-out",
                borderLeft: (theme) =>
                  `4px solid ${theme.palette.text.secondary}`,
              },
            }}
          >
            <Grid
              item
              size={{ xs: 12, md: 4 }}
              sx={{
                padding: "12px",
                width: "100%",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  // height: "auto",
                  width: "100%",
                  aspectRatio: "2 / 1",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 8 }} sx={{ padding: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "500" }}
                >
                  {project.title}
                </Typography>
                <IconButton href={project.link} target="_blank">
                  <OpenInNewIcon />
                </IconButton>
              </Box>
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
              <Typography variant="body1">{project.description}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default PorjectsContent;
