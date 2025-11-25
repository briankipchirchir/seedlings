// src/pages/About.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function About() {
  const primaryGreen = "#2e7d32";
  const accentGreen = "#66bb6a";

  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      {/* Hero Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 10, md: 16 }, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: primaryGreen, mb: 2 }}>
          About Us
        </Typography>
        <Typography sx={{ maxWidth: 800, mx: "auto", fontSize: "1.15rem", color: "text.secondary", lineHeight: 1.8 }}>
          Welcome to our seedlings farm — proudly located in <strong>Tenwek Junction, Bomet County</strong>. 
          I'm <strong>Caleb Kiprotich</strong>, and I founded this farm to provide farmers with strong, healthy, and affordable seedlings for better harvests.
        </Typography>
      </Box>

      {/* Story Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 5, md: 10 }, maxWidth: 900, mx: "auto" }}>
        <Typography sx={{ fontSize: "1.15rem", lineHeight: 1.8, color: "text.secondary", mb: 4 }}>
          Growing up in Bomet, I saw many farmers struggle with poor-quality seedlings, leading to low yields. 
          I started this farm to bridge that gap and provide reliable, greenhouse-raised seedlings for farmers across the region.
        </Typography>
        <Typography sx={{ fontSize: "1.15rem", lineHeight: 1.8, color: "text.secondary", mb: 4 }}>
          Our mission is to provide high-quality, disease-free seedlings nurtured under controlled greenhouse conditions. 
          We aim to support farmers, enhance productivity, and contribute to sustainable agriculture in Kenya.
        </Typography>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FFFFFF" }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 700, color: primaryGreen, mb: 6 }}>
          Why Choose Our Seedlings
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto" }}>
          {[
            { title: "Healthy & Vigorous", desc: "Greenhouse-raised seedlings grown under ideal conditions for maximum strength and survival." },
            { title: "Disease Resistant", desc: "Carefully monitored seedbeds and pest-free environments ensure strong seedlings." },
            { title: "Affordable Prices", desc: "Accessible prices for both small and large-scale farmers." }
          ].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={3} sx={{
                p: 4, borderRadius: 3, textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-8px)", boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: primaryGreen, mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission, Vision & Values */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 700, color: primaryGreen, mb: 6 }}>
          Our Mission, Vision & Values
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto" }}>
          {[
            { title: "Mission", desc: "Empower farmers with high-quality, healthy, and affordable seedlings for sustainable agriculture." },
            { title: "Vision", desc: "To become the leading provider of greenhouse-grown seedlings in Kenya." },
            { title: "Values", desc: "Quality • Integrity • Sustainability • Innovation • Customer Commitment" }
          ].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={2} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: primaryGreen, fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 12, backgroundColor: primaryGreen, textAlign: "center", color: "#fff" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Visit Us Today at Tenwek Junction</Typography>
        <Typography sx={{ mb: 2 }}>For orders, consultations, or bulk supplies — we are always ready to help farmers grow more.</Typography>
        <Typography sx={{ fontWeight: 700 }}>📞 0712 345 678</Typography>
        <Typography>📍 Tenwek Junction, Bomet County</Typography>
      </Box>
    </Box>
  );
}
