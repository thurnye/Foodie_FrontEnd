// Traditional Template - Pages 8-9: Chicken Soup Spread
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface Props {
  title?: string;
  subtitle?: string;
  mainImg?: string;
  smallImgs?: string[];
  ingredients?: string[];
  steps?: string[];
  pageNumber?: string;
}

export const TraditionalPage08_09_ChickenSoup: React.FC<Props> = ({
  title = "CHICKEN SOUP",
  subtitle = "Comfort in a bowl",
  mainImg = "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&h=600&fit=crop",
  smallImgs = [
    "https://images.unsplash.com/photo-1612508850265-dd31c8c63d04?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1606787619474-c44e0b363d8e?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=200&fit=crop",
  ],
  ingredients = [
    "1 whole chicken (3-4 lbs)",
    "2 large carrots, diced",
    "3 celery stalks, chopped",
    "1 large onion, diced",
    "4 cloves garlic, minced",
    "Fresh parsley and thyme",
    "Bay leaves",
    "8 cups chicken broth",
    "Salt and pepper to taste",
    "Egg noodles (optional)",
  ],
  steps = [
    "Place chicken in a large pot and cover with broth and water.",
    "Bring to a boil, then reduce heat and simmer for 1 hour.",
    "Remove chicken from pot and let cool slightly.",
    "Strain broth and return to pot, discarding solids.",
    "Shred chicken meat, discarding bones and skin.",
    "Add carrots, celery, and onion to broth.",
    "Simmer vegetables until tender, about 15-20 minutes.",
    "Add shredded chicken back to pot.",
    "Season with salt, pepper, and fresh herbs.",
    "If using noodles, cook separately and add before serving.",
    "Ladle into bowls and serve hot with crusty bread.",
  ],
  pageNumber = "16",
}) => {
  return (
    <A3CanvasLayout>
      {/* Left page - Recipe details */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "0.9rem",
            color: "#999",
            letterSpacing: "0.1em",
            mb: 2,
          }}
        >
          PAGE {pageNumber}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1rem",
            color: "#666",
            mb: 4,
            fontStyle: "italic",
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "0.95rem",
            color: "#4a4a4a",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 4,
          }}
        >
          This traditional recipe has been perfected over generations. The
          combination of fresh ingredients and careful preparation results in a
          dish that's both nutritious and delicious. Perfect for family
          gatherings or a special dinner.
        </Typography>

        {/* Small images grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mb: 4 }}>
          {smallImgs.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`Step ${i + 1}`}
              sx={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
          ))}
        </Box>

        {/* Ingredients */}
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Ingredients
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          {ingredients.map((ing, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: "'Times New Roman', serif",
                fontSize: "0.9rem",
                color: "#666",
                mb: 1,
              }}
            >
              {ing}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right page - Image and preparation */}
      <Box
        sx={{ width: "50%", bgcolor: "#fff", display: "flex", flexDirection: "column" }}
      >
        <Box
          component="img"
          src={mainImg}
          alt={title}
          sx={{ width: "100%", height: "55%", objectFit: "cover" }}
        />

        <Box sx={{ p: 6, flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#2d2d2d",
              mb: 2,
            }}
          >
            Preparation
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            {steps.map((step, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: "0.9rem",
                  color: "#666",
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
