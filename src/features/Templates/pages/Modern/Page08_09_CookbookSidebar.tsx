// Modern Template - Pages 8-9: Cookbook Sidebar
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage08_09_CookbookSidebar: React.FC = () => {
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
        {/* Left page - Large overhead food photo with ingredients */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1200&fit=crop"
            alt="Overhead food with ingredients"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right page - Cookbook Sidebar on green background */}
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
            Cookbook
            <br />
            Sidebar
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#fff",
              mb: 3,
            }}
          >
            Ingredients
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {[
              "2 cups all-purpose flour",
              "1 tablespoon sugar",
              "2 teaspoons baking powder",
              "1/2 teaspoon salt",
              "1 3/4 cups milk",
              "2 large eggs",
              "1/4 cup melted butter",
              "1 teaspoon vanilla extract",
              "Fresh berries for topping",
              "Maple syrup for serving",
            ].map((ingredient, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    bgcolor: "#fff",
                    mt: 1,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.6,
                  }}
                >
                  {ingredient}
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
              mt: 6,
              fontStyle: "italic",
            }}
          >
            Prep time: 10 minutes | Cook time: 20 minutes
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
