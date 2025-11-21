import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Leaf } from "lucide-react";

const primaryGreen = "#2e7d32";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        py: 1,
        px: 3,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Leaf size={28} color={primaryGreen} />
          <Typography
            variant="h6"
            sx={{
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: 800,
              color: primaryGreen,
              textDecoration: "none",
            }}
            component={RouterLink}
            to="/"
          >
            Lebu Seedlings & Nurseries
          </Typography>
        </Box>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{ color: "#333", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Home
          </Link>

          <Link
            component={RouterLink}
            to="/products"
            underline="none"
            sx={{ color: "#333", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Shop
          </Link>

          <Link
            component={RouterLink}
            to="/about"
            underline="none"
            sx={{ color: "#333", fontWeight: 600, fontSize: "0.95rem" }}
          >
            About
          </Link>

          <Link
            component={RouterLink}
            to="/contact"
            underline="none"
            sx={{ color: "#333", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
