// Classic Template - Pages 4-5: Recipe Spread
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  ingredients?: string[];
  steps?: string[];
}

export const ClassicPage04_05_Recipe: React.FC<Props> = ({
  title = "BREAKFAST",
  subtitle = "Start your day right with these delicious breakfast recipes",
  image = "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=600&fit=crop",
  ingredients = [
    "2 eggs",
    "1 cup flour",
    "½ cup milk",
    "2 tbsp butter",
    "1 tsp baking powder",
    "Pinch of salt",
  ],
  steps = [
    "Mix dry ingredients in a bowl.",
    "Beat eggs and add milk.",
    "Combine wet and dry ingredients.",
    "Heat butter in a pan.",
    "Pour batter and cook until golden.",
    "Flip and cook other side.",
    "Serve hot with syrup.",
  ],
}) => {
  return (
    <A3CanvasLayout>
      {/* Left page - Recipe details */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.1rem",
            color: "#666",
            mb: 4,
            fontStyle: "italic",
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Ingredients
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          {ingredients.map((ing, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: "1rem",
                color: "#4a4a4a",
                mb: 1,
              }}
            >
              {ing}
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Instructions
        </Typography>

        <Box component="ol" sx={{ pl: 3 }}>
          {steps.slice(0, 3).map((step, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: "1rem",
                color: "#4a4a4a",
                mb: 1.5,
              }}
            >
              {step}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right page - Image and continued instructions */}
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
          src={image}
          alt={title}
          sx={{ width: "100%", height: "60%", objectFit: "cover" }}
        />

        <Box sx={{ p: 6 }}>
          <Box component="ol" start={4} sx={{ pl: 3 }}>
            {steps.slice(3).map((step, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1rem",
                  color: "#4a4a4a",
                  mb: 1.5,
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
