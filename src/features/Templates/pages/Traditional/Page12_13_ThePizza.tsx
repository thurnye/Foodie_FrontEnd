// Traditional Template - Pages 12-13: The Pizza Spread
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

export const TraditionalPage12_13_ThePizza: React.FC<Props> = ({
  title = "THE PIZZA",
  subtitle = "Classic Margherita pizza",
  mainImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
  smallImgs = [
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=300&h=200&fit=crop",
  ],
  ingredients = [
    "Pizza dough (store-bought or homemade)",
    "1 cup tomato sauce",
    "250g fresh mozzarella, sliced",
    "Fresh basil leaves",
    "3 tablespoons olive oil",
    "2 cloves garlic, minced",
    "Salt and pepper",
    "Oregano",
    "Parmesan cheese, grated",
  ],
  steps = [
    "Preheat oven to 475 degrees Fahrenheit (245 degrees Celsius).",
    "Roll out pizza dough on a floured surface to desired thickness.",
    "Transfer dough to a pizza stone or baking sheet.",
    "Brush dough with olive oil, leaving a small border.",
    "Spread tomato sauce evenly over the dough.",
    "Season sauce with salt, pepper, and oregano.",
    "Distribute mozzarella slices evenly over sauce.",
    "Add minced garlic and drizzle with remaining olive oil.",
    "Bake for 12-15 minutes until crust is golden and cheese bubbles.",
    "Remove from oven and top with fresh basil leaves.",
    "Sprinkle with Parmesan cheese if desired.",
    "Let cool for 2-3 minutes, slice, and serve hot.",
  ],
  pageNumber = "12",
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
