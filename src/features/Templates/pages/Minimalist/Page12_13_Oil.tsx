// Minimalist Template - Pages 12-13: Oil Recipe with Pasta
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage12_13_Oil: React.FC = () => {
  const ingredients = [
    "400g pasta",
    "1/2 cup olive oil",
    "6 cloves garlic",
    "Red pepper flakes",
    "Fresh parsley",
    "Parmesan cheese",
    "Salt to taste",
    "Black pepper",
  ];

  const directions = [
    "Cook pasta in salted boiling water until al dente. Reserve 1 cup pasta water.",
    "Heat olive oil in large pan over medium heat. Add sliced garlic and cook until fragrant.",
    "Add red pepper flakes and cook for 30 seconds. Add drained pasta and toss to combine.",
    "Add reserved pasta water gradually to create a light sauce. Season with salt and pepper.",
    "Remove from heat, add fresh parsley and grated Parmesan. Serve immediately.",
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Recipe details */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
            letterSpacing: "0.05em",
          }}
        >
          OIL
        </Typography>

        {/* Ingredients section */}
        <Box sx={{ mb: 5 }}>
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

        {/* Directions in two columns */}
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
              Directions
            </Typography>
            {directions.slice(0, 3).map((step, i) => (
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
            {directions.slice(3).map((step, i) => (
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

      {/* Right page - Large pasta image with badge */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative" }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=1000&fit=crop"
          alt="Pasta with oil"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Orange circular badge with 59% */}
        <Box
          sx={{
            position: "absolute",
            bottom: 60,
            right: 60,
            width: "120px",
            height: "120px",
            bgcolor: "#FF6B35",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            59%
          </Typography>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
