import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import HomeContent from "./HomeContent";
import AboutMeContent from "./AboutContent";
import ProjectsContent from "./PorjectsContent";
import ContactContent from "./ContactContent";
import Squares from "../helpers/Squares";

const sections = [
  { id: "home", label: "Home", Component: HomeContent },
  { id: "aboutme", label: "About Me", Component: AboutMeContent },
  { id: "projects", label: "Projects", Component: ProjectsContent },
  { id: "contact", label: "Contact", Component: ContactContent },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.6,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveTab(entry.target.id);
  //       }
  //     });
  //   }, observerOptions);

  //   sections.forEach((section) => {
  //     const element = document.getElementById(section.id);
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       const element = document.getElementById(section.id);
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     });
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <div className="app-container">
        <Squares />
        <div className="app-content">
          <Box>
            {sections.map(({ id, Component }) => (
              <Box id={id} key={id}>
                <Component />
              </Box>
            ))}
          </Box>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
