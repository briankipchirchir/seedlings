import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Link, Button, Badge } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Leaf, ShoppingCart, Menu, X } from "lucide-react";

const primaryGreen = "#1B5E20";
const accentGreen = "#43A047";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = 0; // Replace with actual cart count from context/state

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blogs", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        py: 1.2,
        px: { xs: 2, sm: 3 },
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "auto",
          gap: 3,
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            flexShrink: 0,
          }}
          component={RouterLink}
          to="/"
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "8px",
              background: `linear-gradient(135deg, ${primaryGreen}, ${accentGreen})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(27, 94, 32, 0.2)",
            }}
          >
            <Leaf size={24} color="#fff" />
          </Box>
          <Typography
            sx={{
              margin: 0,
              fontSize: { xs: "1rem", sm: "1.3rem" },
              fontWeight: 900,
              color: primaryGreen,
              textDecoration: "none",
              letterSpacing: "-0.5px",
              display: { xs: "block", sm: "block" },
              whiteSpace: "nowrap",
            }}
          >
            Lebu Seedlings
          </Typography>
        </Box>

        {/* RIGHT SIDE - DESKTOP NAV LINKS, CART & MOBILE MENU */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ml: "auto",
          }}
        >
          {/* DESKTOP NAV LINKS */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                component={RouterLink}
                to={link.path}
                underline="none"
                sx={{
                  color: "#333",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  "&:hover": {
                    color: accentGreen,
                    background: "rgba(67, 160, 71, 0.08)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "6px",
                    left: "16px",
                    right: "16px",
                    height: "2px",
                    background: accentGreen,
                    transform: "scaleX(0)",
                    transformOrigin: "right",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "left",
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
          {/* CART BUTTON */}
          <Button
            sx={{
              minWidth: "auto",
              padding: "8px 16px",
              background: primaryGreen,
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textTransform: "none",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                background: "#0D3A1F",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(27, 94, 32, 0.25)",
              },
            }}
          >
            <Badge
              badgeContent={cartCount}
              sx={{
                "& .MuiBadge-badge": {
                  background: "#ff6b6b",
                  color: "#fff",
                  fontWeight: 700,
                },
              }}
            >
              <ShoppingCart size={20} />
            </Badge>
            <Box sx={{ display: { xs: "none", sm: "inline" } }}>Cart</Box>
          </Button>

          {/* MOBILE MENU TOGGLE */}
          <Button
            sx={{
              display: { xs: "flex", md: "none" },
              minWidth: "auto",
              padding: "8px",
              color: primaryGreen,
              "&:hover": {
                background: "rgba(27, 94, 32, 0.08)",
              },
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </Box>
      </Toolbar>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 1,
            padding: "16px 0",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            background: "rgba(255,255,255,0.98)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              component={RouterLink}
              to={link.path}
              underline="none"
              sx={{
                color: "#333",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "12px 24px",
                transition: "all 0.3s ease",
                borderLeft: "4px solid transparent",
                "&:hover": {
                  color: accentGreen,
                  borderLeftColor: accentGreen,
                  background: "rgba(67, 160, 71, 0.06)",
                },
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      )}
    </AppBar>
  );
}