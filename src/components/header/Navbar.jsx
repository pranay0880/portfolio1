import { Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
// import logo from "../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useColorMode } from "../../ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "../helpers/ToggleButton";

const Navbar = ({ sections, activeTab, onTabClick }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);

  const handleOpenMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  const { toggleColorMode, mode } = useColorMode();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          lg: "12px 80px",
          md: "12px 40px",
          sm: "12px 20px",
          xs: "12px 20px",
        },
        width: "100vw",
        height: "64px",
        maxWidth: "xl",
        position: "fixed",
        zIndex: "100",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: (theme) => theme.palette.text.primary,
        // backgroundImage: (theme) =>
        //   `linear-gradient(to right, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 5%, ${theme.palette.background.paper} 95%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Grid
        item
        sx={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        onClick={() => onTabClick("home")}
      >
        {/* <img
          src={logo}
          alt="logo"
          style={{ height: "20px", marginRight: "4px" }}
        /> */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Pradeep
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          gap: "32px",
        }}
      >
        {sections.map(({ id, label }) => (
          <Typography
            variant="body1"
            key={id}
            onClick={() => onTabClick(id)}
            sx={{
              cursor: "pointer",
              fontWeight: activeTab === id ? "bold" : "normal",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: -2,
                width: activeTab === id ? "100%" : "0%",
                height: "3px",
                backgroundColor: (theme) => theme.palette.primary.main,
                transition: "width 0.3s ease-in-out",
              },
            }}
          >
            {label}
          </Typography>
        ))}
        {/* <IconButton
          onClick={toggleColorMode}
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton> */}
        <div style={{ display: "inline-block", cursor: "pointer" }}>
          <ToggleButton onToggle={toggleColorMode} />
        </div>
      </Grid>
      <Grid
        item
        sx={{
          display: { md: "none", sm: "flex" },
          alignItems: "center",
          gap: "12px",
        }}
      >
        <IconButton
          onClick={handleOpenMenu}
          aria-controls={open ? "nav-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {!open && <MenuIcon />}
          {open && <CloseIcon />}
        </IconButton>
        <Menu
          open={open}
          anchorEl={openMenu}
          onClose={handleCloseMenu}
          id="nav-menu"
        >
          {sections.map(({ id, label }) => (
            <MenuItem
              key={id}
              onClick={() => {
                onTabClick(id);
                handleCloseMenu();
              }}
              sx={{
                fontWeight: activeTab === id ? "bold" : "normal",
                color: (theme) => theme.palette.text.primary,
                // backgroundColor:
                //   activeTab === id ? (theme) => "#90D5FF" : "transparent",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.action.hover,
                },
              }}
            >
              {label}
            </MenuItem>
          ))}
          <MenuItem
            onClick={toggleColorMode}
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              Theme
            </Typography>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default Navbar;
