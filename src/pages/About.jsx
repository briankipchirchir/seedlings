// src/pages/Products.jsx
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Products() {
  const primaryGreen = "#2e7d32"; // Your main green color
  const lightGreen = "#66bb6a";

  const products = [
    {
      id: 1,
      name: "Tomato Seedlings",
      category: "Vegetable",
      price: "$2.50",
      image:
        "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 2,
      name: "Basil Seedlings",
      category: "Herb",
      price: "$1.80",
      image:
        "https://www.farmanddairy.com/wp-content/uploads/2014/07/How-to-Tomatoes-696x232.jpg",
    },
    // Add more products here
  ];

  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

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

      {/* Products Grid */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative", height: 240, overflow: "hidden" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Category Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    bgcolor: primaryGreen,
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </Box>

                {/* Favorite Button */}
                <IconButton
                  onClick={() => toggleFavorite(product.id)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    bgcolor: "rgba(255,255,255,0.9)",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      bgcolor: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <FavoriteIcon
                    sx={{ fontSize: 20, color: favorites[product.id] ? "#e53935" : primaryGreen }}
                  />
                </IconButton>
              </Box>

              {/* Product Details */}
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: 700, color: primaryGreen, mb: 1 }}
                >
                  {product.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: 1,
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: primaryGreen }}>
                    {product.price}
                  </Typography>

                  <IconButton
                    onClick={() => addToCart(product)}
                    sx={{
                      bgcolor: primaryGreen,
                      color: "#fff",
                      width: 44,
                      height: 44,
                      "&:hover": {
                        bgcolor: "#256428",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ShoppingCartIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
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
