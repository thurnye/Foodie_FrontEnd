// Classic Template - Page 1: Cover
import React from "react";
import { Box, Typography } from "@mui/material";

export const ClassicPage01_Cover: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 8,
        }}
      >
        {/* Decorative top border */}
        <Box
          sx={{
            position: "absolute",
            top: 60,
            left: 60,
            right: 60,
            height: "2px",
            bgcolor: "#2d2d2d",
          }}
        />

        {/* Main Title */}
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "4.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            letterSpacing: "0.1em",
            mb: 3,
            textAlign: "center",
          }}
        >
          RECIPE BOOK
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.2rem",
            color: "#666",
            letterSpacing: "0.05em",
            mb: 6,
            textAlign: "center",
          }}
        >
          THE ULTIMATE COLLECTION
        </Typography>

        {/* Center image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
          alt="Featured dish"
          sx={{
            width: "400px",
            height: "300px",
            objectFit: "cover",
            mb: 4,
          }}
        />

        {/* Bottom text */}
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            color: "#999",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          A collection of timeless recipes
          <br />
          for every occasion
        </Typography>

        {/* Decorative bottom border */}
        <Box
          sx={{
            position: "absolute",
            bottom: 60,
            left: 60,
            right: 60,
            height: "2px",
            bgcolor: "#2d2d2d",
          }}
        />
      </Box>
    </Box>
  );
};
