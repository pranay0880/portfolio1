import {
  Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
        backgroundColor: "#008AD8",
        color: "whitesmoke",
        width: "100%",
        maxWidth: "xl",
        position: "fixed",
        zIndex: "1000",
      }}
    >
      <Grid
        item
        sx={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        onClick={() => onTabClick("home")}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "20px", marginRight: "4px" }}
        />
        <Typography
          variant="h6"
          sx={{ fontFamily: "monospace", fontWeight: "bold" }}
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
                height: "2px",
                backgroundColor: "whitesmoke",
                transition: "width 0.3s ease-in-out",
              },
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
        <IconButton onClick={handleOpenMenu}>
          {!open && <MenuIcon sx={{ color: "whitesmoke" }} />}
          {open && <CloseIcon sx={{ color: "whitesmoke" }} />}
        </IconButton>
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
