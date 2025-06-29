import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: {
          lg: "20px 80px",
          md: "20px 40px",
          sm: "20px 20px",
          xs: "20px 20px",
        },
      }}
    >
      <Divider
        sx={{
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          marginBottom: "12px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography>Pradeep Dasari</Typography>
        <Box>
          <a
            href="https://www.linkedin.com/in/pranay-dasari0880/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://github.com/pranay0880"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
          <a href="mailto:pranay0880@gmail.com" style={{ color: "inherit" }}>
            <IconButton>
              <EmailIcon />
            </IconButton>
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="body2"
          align="center"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          © {new Date().getFullYear()} Pradeep Dasari. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Developed with Code and Curiosity
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
