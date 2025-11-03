// Modern Template - Pages 16-17: Cookbook Sidebar Menu
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage16_17_CookbookSidebarMenu: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          width: "420mm",
          height: "297mm",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* Left page - Large food photo */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=1200&fit=crop"
            alt="Beautiful food plating"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right page - Green background with menu/recipe list */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "#5C8D89",
            display: "flex",
            flexDirection: "column",
            p: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#fff",
              mb: 6,
              letterSpacing: "0.02em",
              lineHeight: 1.2,
            }}
          >
            Weekly
            <br />
            Menu
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { day: "Monday", meal: "Mediterranean Pasta Bowl" },
              { day: "Tuesday", meal: "Grilled Chicken Salad" },
              { day: "Wednesday", meal: "Thai Curry with Rice" },
              { day: "Thursday", meal: "Homemade Pizza Night" },
              { day: "Friday", meal: "Fish Tacos with Slaw" },
              { day: "Saturday", meal: "BBQ Pulled Pork Sandwiches" },
              { day: "Sunday", meal: "Classic Roast Dinner" },
            ].map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                    mb: 1,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.day}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
                  {item.meal}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              mt: "auto",
              fontStyle: "italic",
            }}
          >
            All recipes include prep time, cooking instructions, and nutritional information
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
