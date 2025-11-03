// Classic Template - Pages 21-22: Soup
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage21_22_Soup: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - SOUP header and description */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          SOUP
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
          A comforting, hearty soup that warms you from the inside out. This
          recipe creates a rich, flavorful broth filled with tender vegetables
          and aromatic herbs. Perfect for cozy evenings or when you need a
          nourishing meal that feeds both body and soul.
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
            "2 tbsp olive oil",
            "1 onion, diced",
            "3 carrots, chopped",
            "3 celery stalks, chopped",
            "4 cloves garlic, minced",
            "6 cups vegetable broth",
            "2 cups diced tomatoes",
            "2 cups mixed vegetables",
            "1 bay leaf",
            "Fresh herbs (thyme, parsley)",
            "Salt and pepper",
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
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop"
          alt="Hearty Soup"
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
              "Heat olive oil in a large pot over medium heat.",
              "Add onion, carrots, and celery. Cook until softened, 5-7 minutes.",
              "Add garlic and cook for 1 minute until fragrant.",
              "Pour in broth and diced tomatoes.",
              "Add bay leaf and bring to a boil.",
              "Reduce heat and simmer for 15 minutes.",
              "Add remaining vegetables and fresh herbs.",
              "Simmer until vegetables are tender, about 10 more minutes.",
              "Season with salt and pepper. Serve hot.",
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
