// Classic Template - Pages 11-12: Eggs
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage11_12_Eggs: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - EGGS header and description */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          EGGS
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#666",
            mb: 4,
          }}
        >
          CAKES
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.9rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 4,
          }}
        >
          These savory egg cakes are a versatile breakfast option that can be
          customized with your favorite vegetables and herbs. They're perfect
          for meal prep and can be enjoyed hot or cold. Packed with protein
          and nutrients, they'll keep you satisfied all morning long.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Ingredients
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          {[
            "6 large eggs",
            "1/4 cup milk",
            "1/2 cup shredded cheese",
            "1/4 cup diced bell peppers",
            "1/4 cup chopped spinach",
            "2 tbsp chopped fresh herbs",
            "Salt and pepper to taste",
            "Butter for greasing",
          ].map((ing, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.9rem",
                color: "#4a4a4a",
                mb: 0.5,
              }}
            >
              {ing}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right page - Large image and instructions */}
      <Box
        sx={{
          width: "50%",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop"
          alt="Egg Cakes"
          sx={{ width: "100%", height: "60%", objectFit: "cover" }}
        />

        <Box sx={{ p: 6 }}>
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#2d2d2d",
              mb: 2,
            }}
          >
            Instructions
          </Typography>

          <Box component="ol" sx={{ pl: 3 }}>
            {[
              "Preheat oven to 350°F (175°C) and grease a muffin tin.",
              "Whisk together eggs and milk in a large bowl.",
              "Add cheese, vegetables, herbs, salt, and pepper.",
              "Mix until well combined.",
              "Pour mixture evenly into muffin cups, filling 3/4 full.",
              "Bake for 20-25 minutes until set and lightly golden.",
              "Let cool for 5 minutes before removing from tin.",
              "Serve warm or store in refrigerator for up to 5 days.",
            ].map((step, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.9rem",
                  color: "#4a4a4a",
                  mb: 1.5,
                  lineHeight: 1.6,
                }}
              >
                {step}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
