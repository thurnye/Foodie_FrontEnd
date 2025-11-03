// Traditional Template - Pages 10-11: The Bread Spread
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

export const TraditionalPage10_11_TheBread: React.FC<Props> = ({
  title = "THE BREAD",
  subtitle = "Artisan homemade bread",
  mainImg = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  smallImgs = [
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop",
  ],
  ingredients = [
    "500g bread flour",
    "10g salt",
    "7g instant yeast",
    "350ml warm water",
    "2 tablespoons olive oil",
    "1 tablespoon honey",
    "Sesame seeds (optional)",
  ],
  steps = [
    "Combine flour, salt, and yeast in a large mixing bowl.",
    "Mix warm water, olive oil, and honey together.",
    "Pour liquid mixture into dry ingredients gradually.",
    "Mix until a shaggy dough forms, then knead for 10 minutes.",
    "Place dough in oiled bowl, cover, and let rise for 1 hour.",
    "Punch down dough and shape into desired form.",
    "Place on baking sheet, cover, and let rise for 30 minutes.",
    "Preheat oven to 425 degrees Fahrenheit (220 degrees Celsius).",
    "Score the top of the bread with a sharp knife.",
    "Brush with water and sprinkle with sesame seeds if desired.",
    "Bake for 25-30 minutes until golden brown.",
    "Cool on wire rack before slicing.",
  ],
  pageNumber = "20",
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
