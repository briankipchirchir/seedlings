import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#256428",
        color: "#fff",
        py: 6,
        px: { xs: 4, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid
          container
          spacing={4}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ccc", lineHeight: 1.6 }}
            >
              We're committed to providing premium, eco-friendly seedlings to
              gardeners everywhere.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Shop", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    sx={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#fff" },
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
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
              Email: hello@greenhouse.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Phone: 1-800-GROW-NOW
            </Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Follow Us
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Facebook", "Instagram", "Twitter"].map((platform, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {platform}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
