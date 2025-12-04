// Traditional Template - Pages 4-5: Recipe Spread
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

export const TraditionalPage04_05_Recipe: React.FC<Props> = ({
  title = "BEST SALAD",
  subtitle = "A fresh and healthy choice",
  mainImg = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop",
  smallImgs = [
    "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
  ],
  ingredients = [
    "Mixed greens",
    "Cherry tomatoes",
    "Cucumber",
    "Red onion",
    "Olive oil",
    "Balsamic vinegar",
    "Salt and pepper",
  ],
  steps = [
    "Wash all vegetables thoroughly.",
    "Chop vegetables into bite-sized pieces.",
    "Combine in a large bowl.",
    "Drizzle with olive oil and vinegar.",
    "Season with salt and pepper.",
    "Toss gently and serve immediately.",
  ],
  pageNumber = "04",
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
