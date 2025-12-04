// src/components/LeftWelcomePage.tsx
import { Box, Typography, Paper, Avatar } from "@mui/material";
import React from "react";

export const About: React.FC = () => {
  return (
    <Box
      sx={{
        width: "50%",
        position: "relative",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(255,255,255,0.75)",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          width: "70%",
          p: 5,
          borderRadius: 3,
          zIndex: 1,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Chef Info */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar
            src="https://images.unsplash.com/photo-1600891963935-3d8d7b0e2f03?auto=format&fit=crop&w=200&q=80"
            sx={{ width: 70, height: 70, mr: 2 }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#3E6259",
              }}
            >
              Contact Me
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#444" }}>
              📞 +00 123 456 789
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#444" }}>
              📧 chef@example.com
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#444" }}>
              🌐 www.example.com
            </Typography>
          </Box>
        </Box>

        {/* Welcome Message */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "2rem",
            mb: 2,
            color: "#3E6259",
          }}
        >
          Welcome
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#222",
          }}
        >
          Welcome to my culinary journal — a celebration of color, texture, and
          taste. Every recipe here tells a story inspired by seasonal produce
          and vibrant global traditions.  
          <br />
          <br />
          I hope these creations spark joy in your kitchen and remind you that
          cooking is not just a skill, but an act of love and creativity.
        </Typography>
      </Paper>
    </Box>
  );
};
