// Minimalist Template - Pages 14-15: Menu List
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage14_15_MenuList: React.FC = () => {
  const menuItems = [
    {
      id: "01",
      name: "MENU 01",
      description: "Grilled salmon with seasonal vegetables and lemon butter sauce. Served with roasted potatoes and fresh herbs.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
    },
    {
      id: "02",
      name: "MENU 02",
      description: "Pan-seared chicken breast with mushroom cream sauce. Accompanied by garlic mashed potatoes and asparagus.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    },
    {
      id: "03",
      name: "MENU 03",
      description: "Vegetarian pasta primavera with cherry tomatoes, fresh basil, and Parmesan cheese in olive oil.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop",
    },
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Menu list */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
          }}
        >
          MENU
        </Typography>

        {menuItems.map((item, idx) => (
          <Box
            key={item.id}
            sx={{
              mb: idx < menuItems.length - 1 ? 5 : 0,
            }}
          >
            {/* Menu item header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  bgcolor: "#FFB800",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.id}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  letterSpacing: "0.05em",
                }}
              >
                {item.name}
              </Typography>
            </Box>

            {/* Menu item image */}
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                mb: 2,
                borderRadius: 1,
              }}
            />

            {/* Menu item description */}
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "0.85rem",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right page - Large plated dish image */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative" }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1000&fit=crop"
          alt="Plated dish"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Optional decorative text overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: 40,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            p: 3,
            borderRadius: 1,
            maxWidth: "300px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "0.8rem",
              color: "#2d2d2d",
              fontWeight: 600,
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Chef's Special
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "0.75rem",
              color: "#666",
              lineHeight: 1.6,
            }}
          >
            Each dish is carefully prepared with fresh, locally-sourced ingredients.
          </Typography>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
