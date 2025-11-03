import { Box, Typography } from "@mui/material";
import React from "react";

interface MenuItem {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const menus: MenuItem[] = [
  {
    id: "01",
    title: "Breakfast Delights",
    desc: "Wholesome beginnings with fruits, grains, and freshly baked breads.",
    img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "02",
    title: "Vibrant Mains",
    desc: "Hearty, colorful dishes made with fresh vegetables and grains.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "03",
    title: "Sweet Finishes",
    desc: "Luscious desserts that turn any meal into a celebration.",
    img: "https://images.unsplash.com/photo-1612197527762-3c37e7e80213?auto=format&fit=crop&w=800&q=80",
  },
];

export const TableOfContent: React.FC = () => {
  return (
    <Box
      sx={{
        width: "50%",
        position: "relative",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        p: 8,
        // 🔥 this was hiding your 3rd image
        overflow: "visible",
      }}
    >
      {/* ash strip */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "22%",
          height: "100%",
          bgcolor: "#f3f3f3",
          zIndex: 0,
        }}
      />

      {/* floating image column */}
      <Box
        sx={{
          position: "absolute",
          top: 170,
          right: 27,
          width: "31%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 0,
        }}
      >
        {menus.map((menu) => (
          <Box
            key={menu.id}
            component="img"
            src={menu.img}
            alt={menu.title}
            sx={{
              width: "100%",
              // to keep them uniform, you can force a height:
              height: 90,
              objectFit: "cover",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </Box>

      {/* text column */}
      <Box sx={{ position: "relative", zIndex: 1, pr: "30%" }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "2.8rem",
            mb: 5,
            color: "#3E6259",
          }}
        >
          CONTENT
        </Typography>

        {menus.map((menu) => (
          <Box
            key={menu.id}
            sx={{
              display: "flex",
              mb: 2,
              pb: 2,
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ width: "20%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: "#3E6259",
                }}
              >
                {menu.id}
              </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#222",
                  mb: 0.5,
                }}
              >
                {menu.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  color: "#666",
                  pr: 4,
                }}
              >
                {menu.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
