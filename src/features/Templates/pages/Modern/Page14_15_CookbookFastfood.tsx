// Modern Template - Pages 14-15: Cookbook Fastfood
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage14_15_CookbookFastfood: React.FC = () => {
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
        {/* Left page - "Cookbook Fastfood" title with description */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
              mb: 4,
              letterSpacing: "0.02em",
              lineHeight: 1.2,
            }}
          >
            Cookbook
            <br />
            Fastfood
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#444",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Quick and easy meals that don't compromise on taste or quality.
            Perfect for busy weeknights when you need something delicious in
            a hurry.
          </Typography>

          <Box
            sx={{
              bgcolor: "#5C8D89",
              p: 3,
              borderRadius: 1,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.8,
              }}
            >
              These recipes are designed to be prepared in 30 minutes or less,
              using simple ingredients that you likely already have in your
              kitchen.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#444",
              lineHeight: 1.8,
            }}
          >
            From savory breakfasts to satisfying dinners, discover how to make
            restaurant-quality meals at home without spending hours in the kitchen.
          </Typography>
        </Box>

        {/* Right page - Large overhead breakfast photo */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=1200&fit=crop"
            alt="Overhead breakfast spread"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
