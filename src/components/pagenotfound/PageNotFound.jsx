import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        textAlign: "center",
        paddingTop: "10vh",
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" paragraph>
        It might have been moved or deleted, or maybe the URL is incorrect.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
