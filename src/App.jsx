import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogSection from "./pages/Blogs";

export default function App() {
  return (
 <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
  <Navbar />

  <Box sx={{ mt: 4, mb: 4, flexGrow: 3, width: "100%" }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<BlogSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Box>

  <Footer />
</Box>

  );
}
