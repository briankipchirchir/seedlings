// src/pages/Products.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Products() {
  const categories = [
    {
      title: "Vegetable Seedlings",
      desc: "Healthy and vigorous vegetable seedlings grown under optimal greenhouse conditions.",
    },
    {
      title: "Herb Seedlings",
      desc: "Fragrant, fresh, and ready-to-grow herbs for home gardens, restaurants, and farms.",
    },
    {
      title: "Flower & Ornamental Seedlings",
      desc: "Beautiful, vibrant ornamentals perfect for landscaping and decoration.",
    },
    {
      title: "Fruit Seedlings",
      desc: "High-quality fruit plant seedlings for long-term growth and high yield.",
    },
    {
      title: "Tree Seedlings",
      desc: "Eco-friendly forestry and landscaping tree seedlings raised with care.",
    },
  ];

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 10, md: 14 } }}>
      {/* Header */}
      <Box sx={{ mb: 10, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Our Products
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
            fontSize: "1.1rem",
          }}
        >
          Explore our premium range of greenhouse-raised seedlings — carefully
          nurtured, healthy, and ready to thrive in your garden or farm.
        </Typography>
      </Box>

      {/* Categories */}
      <Grid container spacing={4}>
        {categories.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #f5fff7, #f1fff3)",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.05)",
                  transition: "0.3s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: "0px 12px 30px rgba(0,0,0,0.10)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#1b5e20",
                    mb: 1.5,
                    fontSize: "1.25rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Coming Soon Footer */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.8 }}>
          Full product catalogue coming soon.
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          More varieties, pricing, and availability will be added shortly.
        </Typography>
      </Box>
    </Box>
  );
}

