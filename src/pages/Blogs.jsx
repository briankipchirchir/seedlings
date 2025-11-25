import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { CalendarToday, ArrowRightAlt } from "@mui/icons-material";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "How to Start Your Own Seedlings Nursery: Complete Guide",
      description:
        "A step-by-step walkthrough on setting up a successful seedlings nursery, from choosing soil mixes to irrigation systems.",
      date: "Jan 12, 2025",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Best Seedlings for High-Yield Farming in Kenya",
      description:
        "Discover the top-performing crop varieties, their growth timelines, and expert recommendations for Kenyan climates.",
      date: "Jan 20, 2025",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tips to Protect Your Seedlings From Pests & Harsh Weather",
      description:
        "Learn practical pest control, greenhouse management, and weather protection strategies for healthier seedlings.",
      date: "Feb 2, 2025",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: 8, px: 3, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#1B5E20",
        }}
      >
        Latest Blogs & Farming Tips
      </motion.h2>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
        }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
                },
              }}
            >
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />

              <CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, color: "gray" }}
                >
                  <CalendarToday fontSize="small" />
                  <Typography variant="body2">{blog.date}</Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1B5E20" }}>
                  {blog.title}
                </Typography>

                <Typography sx={{ mt: 1, mb: 2, color: "gray" }}>
                  {blog.description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    backgroundColor: "#1B5E20",
                    "&:hover": { backgroundColor: "#0D3A1F" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  Read More <ArrowRightAlt />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

