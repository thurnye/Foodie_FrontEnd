// Minimalist Template - Pages 2-3: Content & Meet the Chef
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage02_03_ContentChef: React.FC = () => {
  const contentItems = [
    {
      id: "01",
      name: "Pancake with fruits",
      img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop",
    },
    {
      id: "02",
      name: "Caesar salad",
      img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
    },
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Content/TOC */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
          }}
        >
          Content
        </Typography>

        {contentItems.map((item) => (
          <Box key={item.id} sx={{ mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  mr: 2,
                }}
              >
                {item.id}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "1rem",
                  color: "#666",
                }}
              >
                {item.name}
              </Typography>
            </Box>
            <Box
              component="img"
              src={item.img}
              alt={item.name}
              sx={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      {/* Right page - Meet the Chef */}
      <Box
        sx={{
          width: "50%",
          p: 8,
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          Meet the chef
        </Typography>

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop"
          alt="Chef Lawrence"
          sx={{
            width: "300px",
            height: "400px",
            objectFit: "cover",
            mb: 4,
          }}
        />

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 1,
          }}
        >
          LAWRENCE
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "0.9rem",
            color: "#666",
            lineHeight: 1.8,
          }}
        >
          A passionate chef with over 15 years of experience creating memorable
          dishes.
        </Typography>
      </Box>
    </A3CanvasLayout>
  );
};
