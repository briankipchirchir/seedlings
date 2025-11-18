// src/pages/Contact.jsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 12 },
        py: { xs: 8, md: 14 },
        background: "linear-gradient(135deg, #f3faf4, #ffffff)",
      }}
    >
      {/* TITLE */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#1b5e20",
            mb: 2,
            letterSpacing: "0.5px",
          }}
        >
          Get in Touch With Us
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Whether you have a question about our seedlings, delivery options, bulk
          orders, or anything else — our team is ready to help.
        </Typography>
      </Box>

      {/* CONTACT WRAPPER */}
      <Grid container spacing={8} justifyContent="center">
        {/* LEFT SIDE — CONTACT DETAILS */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "#2e7d32",
              }}
            >
              Contact Information
            </Typography>

            <Typography sx={{ mb: 2, fontSize: "1.05rem" }}>
              📍 <b>Location:</b> Nairobi, Kenya
            </Typography>
            <Typography sx={{ mb: 2, fontSize: "1.05rem" }}>
              📞 <b>Phone:</b> +254 712 345 678
            </Typography>
            <Typography sx={{ mb: 2, fontSize: "1.05rem" }}>
              ✉️ <b>Email:</b> greenhouse.seedlings@gmail.com
            </Typography>

            <Typography
              sx={{
                mt: 4,
                color: "text.secondary",
                fontSize: ".95rem",
                lineHeight: 1.6,
              }}
            >
              We're available Monday to Saturday, 8:00 AM — 6:00 PM.  
              We aim to respond to all messages within 24 hours.
            </Typography>
          </Paper>
        </Grid>

        {/* RIGHT — FORM */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: "white",
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 4, color: "#2e7d32" }}
            >
              Send Us a Message
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="First Name" variant="outlined" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.7,
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    bgcolor: "#2E7D32",
                    "&:hover": { bgcolor: "#256428" },
                  }}
                >
                  Submit Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
