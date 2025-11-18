// src/components/Footer.jsx
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        mt: 6,
        pt: 6,
        pb: 4,
        px: { xs: 4, md: 10 },
        borderRadius: "30px 30px 0 0",
        overflow: "hidden",
      }}
    >
      {/* Gradient Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #256428, #256428)",
          zIndex: -1,
        }}
      />

      {/* Glass Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(6px)",
          zIndex: -1,
        }}
      />

      {/* Main Footer Content */}
      <Grid
        container
        spacing={2}
        alignItems="start"
        justifyContent="space-between"
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        {/* LEFT SIDE – Brand Summary */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 2, letterSpacing: "0.5px" }}
          >
            GreenHouse Seedlings
          </Typography>

          <Typography
            variant="body1"
            sx={{ opacity: 0.85, maxWidth: 350, lineHeight: 1.7 }}
          >
            Premium eco-friendly seedlings grown with care using modern,
            sustainable greenhouse practices. We nurture growth—naturally.
          </Typography>
        </Grid>

        {/* RIGHT SIDE – Contact Info */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {/* Location */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MapIcon sx={{ fontSize: 32 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Visit Us
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  123 Green Valley Road  
                  <br /> Nairobi, Kenya
                </Typography>
              </Box>
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 32 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Call Us
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  +254 700 123 456  
                  <br /> Mon–Sat, 8AM–6PM
                </Typography>
              </Box>
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MailIcon sx={{ fontSize: 32 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Email Us
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  info@greenhouse.co.ke  
                  <br /> support@greenhouse.co.ke
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Social Icons */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
          <IconButton
            key={i}
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(4px)",
              p: 1.4,
              transition: "0.3s",
              "&:hover": {
                bgcolor: "white",
                color: "#2E7D32",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Icon sx={{ fontSize: 26 }} />
          </IconButton>
        ))}
      </Box>

      {/* Divider */}
      <Box
        sx={{
          mt: 6,
          opacity: 0.3,
          borderTop: "1px solid rgba(255,255,255,0.4)",
          pt: 3,
        }}
      />

      {/* Bottom Copyright */}
      <Typography
        variant="body2"
        sx={{ opacity: 0.75, textAlign: "center", letterSpacing: "0.3px" }}
      >
        © {new Date().getFullYear()} GreenHouse Seedlings — All Rights Reserved.
      </Typography>
    </Box>
  );
}
