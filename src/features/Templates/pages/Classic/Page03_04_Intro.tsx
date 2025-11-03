// Classic Template - Pages 3-4: Introduction Spread
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage03_04_Intro: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - SIGN UP */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          SIGN UP
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          Stay connected with us and never miss a recipe! Sign up for our newsletter
          to receive weekly updates, cooking tips, and exclusive content delivered
          straight to your inbox.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {["Name", "Email Address", "Phone Number"].map((field, i) => (
            <Box key={i}>
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.85rem",
                  color: "#666",
                  mb: 1,
                }}
              >
                {field}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "#ddd",
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            bgcolor: "#2d2d2d",
            color: "#fff",
            textAlign: "center",
            cursor: "pointer",
            fontFamily: "'Georgia', serif",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          SUBSCRIBE
        </Box>
      </Box>

      {/* Right page - About the book */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          WELCOME
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 3,
          }}
        >
          Welcome to our carefully curated collection of recipes that celebrate
          the art of home cooking. Each recipe has been tested and refined to
          ensure success in your kitchen.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 3,
          }}
        >
          Whether you're a beginner or an experienced cook, you'll find something
          to inspire you. From hearty breakfasts to elegant dinners, every recipe
          tells a story and brings people together.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          We believe that cooking is more than just following instructions—it's
          about creativity, passion, and the joy of sharing delicious food with
          those you love.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "#999",
            mt: 4,
            textAlign: "right",
          }}
        >
          Happy Cooking!
        </Typography>
      </Box>
    </A3CanvasLayout>
  );
};
