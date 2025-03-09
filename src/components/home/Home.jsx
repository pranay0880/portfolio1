import { Box, Container, Grid2 as Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import HomeContent from "./HomeContent";
import AboutMeContent from "./AboutContent";
import ProjectsContent from "./PorjectsContent";
import ContactContent from "./ContactContent";

const sections = [
  { id: "home", label: "Home", Component: HomeContent },
  { id: "aboutme", label: "About Me", Component: AboutMeContent },
  { id: "projects", label: "Projects", Component: ProjectsContent },
  { id: "contact", label: "Contact", Component: ContactContent },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container disableGutters maxWidth={"xl"}>
      <Navbar
        sections={sections}
        activeTab={activeTab}
        onTabClick={handleScrollToSection}
      />
      <Grid>
        {sections.map(({ id, Component }) => (
          <Box
            id={id}
            key={id}
            style={{
              minHeight: "50vh",
            }}
          >
            <Component />
          </Box>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
};

export default Home;
