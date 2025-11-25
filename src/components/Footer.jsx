import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import { Leaf } from "lucide-react";

const primaryGreen = "#1B5E20";
const accentGreen = "#43A047";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to bottom, #fafaf8 0%, #f5f5f3 100%)",
        color: "#333",
        py: 8,
        px: { xs: 3, md: 10 },
        borderTop: `1px solid rgba(0,0,0,0.08)`,
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid
          container
          spacing={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
            mb: 6,
          }}
        >
          {/* Brand Column */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
             
              <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: primaryGreen }}>
                Lebu Seedlings
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.7, fontSize: "0.9rem" }}
            >
              Premium, eco-friendly seedlings grown with care for gardeners who value quality and nature.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2.5, color: primaryGreen, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Shop
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["All Products", "Vegetables", "Herbs", "Ornamentals"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                      "&:hover": { color: accentGreen, paddingLeft: "4px" },
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2.5, color: primaryGreen, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Company
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["About Us", "Contact", "Blog", "FAQs"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                      "&:hover": { color: accentGreen, paddingLeft: "4px" },
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2.5, color: primaryGreen, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Support
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Shipping Info", "Returns", "Care Guide", "Track Order"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                      "&:hover": { color: accentGreen, paddingLeft: "4px" },
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2.5, color: primaryGreen, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Get In Touch
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box>
                <Typography sx={{ fontSize: "0.85rem", color: "#999", textTransform: "uppercase", letterSpacing: "0.3px", fontWeight: 600 }}>
                  Email
                </Typography>
                <Link
                  href="mailto:hello@lebu.com"
                  sx={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                    "&:hover": { color: accentGreen },
                  }}
                >
                  hello@lebu.com
                </Link>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.85rem", color: "#999", textTransform: "uppercase", letterSpacing: "0.3px", fontWeight: 600 }}>
                  Phone
                </Typography>
                <Link
                  href="tel:1-800-4769"
                  sx={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                    "&:hover": { color: accentGreen },
                  }}
                >
                  +1 (800) 476-9669
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, background: "rgba(0,0,0,0.08)" }} />

        {/* Bottom Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
          <Typography variant="body2" sx={{ color: "#999", fontSize: "0.85rem" }}>
            © 2025 Lebu Seedlings & Nurseries. All rights reserved.
          </Typography>
          
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  transition: "color 0.3s ease",
                  "&:hover": { color: accentGreen },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            {["Facebook", "Instagram", "Twitter"].map((platform, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  transition: "color 0.3s ease",
                  fontWeight: 600,
                  "&:hover": { color: accentGreen },
                }}
              >
                {platform}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}