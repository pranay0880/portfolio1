import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = ({ sections, activeTab, onTabClick }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);

  const handleOpenMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#89796d",
        color: "whitesmoke",
        maxWidth: "xl",
        position: "fixed",
        zIndex: "1000",
      }}
    >
      <Grid
        item
        sx={{ display: "flex", cursor: "pointer" }}
        onClick={() => onTabClick("home")}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "20px", marginRight: "4px" }}
        />
        <Typography>Pradeep</Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          gap: "12px",
        }}
      >
        {sections.map(({ id, label }) => (
          <Typography
            key={id}
            onClick={() => onTabClick(id)}
            sx={{
              cursor: "pointer",
              fontWeight: activeTab === id ? "bold" : "normal",
              textDecoration: activeTab === id ? "underline" : "none",
            }}
          >
            {label}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        sx={{
          display: { md: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Typography onClick={handleOpenMenu}>Menu</Typography>
        <Menu open={open} anchorEl={openMenu} onClose={handleCloseMenu}>
          {sections.map(({ id, label }) => (
            <MenuItem
              key={id}
              onClick={() => {
                onTabClick(id);
                handleCloseMenu();
              }}
              sx={{ fontWeight: activeTab === id ? "bold" : "normal" }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
};

export default Navbar;
