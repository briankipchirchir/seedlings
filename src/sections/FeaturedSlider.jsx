import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Sample data with images
const items = [
  { 
    id: 1, 
    name: "Tomato Seedling", 
    desc: "Vigorous heirloom variety", 
    price: "ksh 120",
    img: "https://media.istockphoto.com/id/622901954/photo/young-green-tomato-seedling-in-seedling-tray.jpg?s=612x612&w=0&k=20&c=ytSUv010mmgEtmXum5y4kMuRHJ9D44gnpW3KMAxKUek="
  },
  { 
    id: 2, 
    name: "Basil Seedling", 
    desc: "Aromatic fresh leaves", 
    price: "ksh 80",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTARrzdRmbNj7owKOL_0Z9FuQavgnRa9SBR6s1u6mT7Mn_imVKX-hhFK9B54K16KyeBTyIHLK33"
  },
  { 
    id: 3, 
    name: "Lettuce Seedling", 
    desc: "Crisp & healthy greens", 
    price: "ksh 90",
    img: "https://outofmyshed.co.uk/wp-content/uploads/2013/04/all-year-round-lettuce-pricked-out-e1366047082811.jpg"
  },
];

export default function FeaturedSlider() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1.1}
      breakpoints={{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
      }}
    >
      {items.map(item => (
        <SwiperSlide key={item.id}>
          <Card
            sx={{
              p: 2,
              borderRadius: 4,
              height: "100%",
              transition: "0.3s ease",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Box
              sx={{
                height: 180,
                borderRadius: 3,
                mb: 2,
                overflow: "hidden",
                background: "#e8f7e8",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {item.desc}
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#2e7d32" }}>
                  {item.price}
                </Typography>

                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    textTransform: "none",
                    px: 2.5,
                    backgroundColor: "#2e7d32",
                    "&:hover": {
                      backgroundColor: "#1b5e20",
                    },
                  }}
                >
                  Add to cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
