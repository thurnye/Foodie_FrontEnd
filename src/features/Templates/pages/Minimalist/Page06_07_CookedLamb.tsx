// Minimalist Template - Pages 6-7: Cooked Lamb Recipe Spread
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage06_07_CookedLamb: React.FC = () => {
  const ingredients = [
    "2 lbs lamb leg",
    "4 cloves garlic",
    "2 tbsp olive oil",
    "Fresh rosemary",
    "Salt & pepper",
    "1 cup red wine",
  ];

  const instructions = [
    "Preheat oven to 375°F. Season lamb generously with salt and pepper.",
    "Rub lamb with olive oil and minced garlic. Insert rosemary sprigs.",
    "Sear lamb in hot pan on all sides until golden brown.",
    "Place in roasting pan, add wine. Roast for 1.5-2 hours.",
    "Let rest for 15 minutes before slicing. Serve with pan juices.",
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Recipe details */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Cooked lamb
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "1rem",
            color: "#999",
            mb: 1,
          }}
        >
          Pancake with fruits
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "0.9rem",
            color: "#666",
            mb: 6,
            lineHeight: 1.8,
          }}
        >
          A succulent roasted lamb dish with aromatic herbs and a rich wine reduction. Perfect for special occasions.
        </Typography>

        {/* Ingredients */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#2d2d2d",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Ingredients
          </Typography>
          <Box component="ul" sx={{ pl: 2, listStyle: "none" }}>
            {ingredients.map((ing, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.85rem",
                  color: "#666",
                  mb: 1,
                }}
              >
                • {ing}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Right page - Large image with instructions */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative", p: 8 }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=500&fit=crop"
          alt="Cooked lamb"
          sx={{
            width: "100%",
            height: "50%",
            objectFit: "cover",
            mb: 4,
          }}
        />

        {/* Instructions in two columns */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#2d2d2d",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Instructions
            </Typography>
            {instructions.slice(0, 3).map((step, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {i + 1}. {step}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#fff",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              .
            </Typography>
            {instructions.slice(3).map((step, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {i + 4}. {step}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
