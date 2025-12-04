// Traditional Template - Page 1: Cover
import React from "react";
import { Box, Typography } from "@mui/material";
import { Restaurant } from "@mui/icons-material";

export const TraditionalPage01_Cover: React.FC = () => {
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
          width: "210mm",
          height: "297mm",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          position: "relative",
          p: 8,
        }}
      >
        {/* Header with restaurant icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 8 }}>
          <Restaurant sx={{ fontSize: "2rem", color: "#2d2d2d" }} />
          <Typography
            sx={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#2d2d2d",
            }}
          >
            Cupit Name
          </Typography>
        </Box>

        {/* Hero image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
          alt="Featured dish"
          sx={{ width: "100%", height: "250px", objectFit: "cover", mb: 4 }}
        />

        {/* Main title */}
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          COOKBOOK
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1.2rem",
            color: "#666",
            mb: 6,
          }}
        >
          RECIPE TEMPLATE
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "0.9rem",
            color: "#999",
            lineHeight: 1.8,
          }}
        >
          Welcome to our collection of traditional recipes passed down through
          generations. Each recipe has been carefully crafted and tested to
          ensure delicious results every time.
        </Typography>

        {/* Barcode and year - bottom right */}
        <Box sx={{ position: "absolute", bottom: 40, right: 40 }}>
          <Typography
            sx={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.8rem",
              color: "#999",
            }}
          >
            2020
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "40px",
              bgcolor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.7rem",
                color: "#666",
              }}
            >
              |||||||||||||||
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
