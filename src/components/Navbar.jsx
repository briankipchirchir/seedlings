import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}>
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "#2e7d32", fontWeight: 800 }}>
          Caleb Seedlings
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={RouterLink} to="/">Home</Button>
        <Button component={RouterLink} to="/products">Shop</Button>
        <Button component={RouterLink} to="/about">About</Button>
        <Button component={RouterLink} to="/contact" variant="outlined" sx={{ ml: 1 }}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
