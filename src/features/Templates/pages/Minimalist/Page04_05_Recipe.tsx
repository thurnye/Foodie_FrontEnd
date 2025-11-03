// Minimalist Template - Pages 4-5: Recipe Spread
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  ingredients?: string[];
  direction?: string;
}

export const MinimalistPage04_05_Recipe: React.FC<Props> = ({
  title = "Pancake with fruits",
  subtitle = "A delightful breakfast treat",
  image = "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=1000&fit=crop",
  ingredients = [
    "2 cups flour",
    "2 eggs",
    "1 cup milk",
    "2 tbsp sugar",
    "Berries",
    "Honey",
  ],
  direction = "Mix flour, eggs, milk and sugar. Pour batter onto heated pan. Cook until bubbles form. Flip and cook until golden. Serve with fresh berries and honey.",
}) => {
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
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "1rem",
            color: "#666",
            mb: 6,
          }}
        >
          {subtitle}
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, mb: 4 }}>
          {/* Ingredients column */}
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

          {/* Direction column */}
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
              Direction
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "0.85rem",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              {direction}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right page - Large image with badge */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Decorative badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: "100px",
            height: "100px",
            bgcolor: "#FFB800",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "1.5rem",
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
