// Minimalist Template - Pages 8-9: How to Cook Process
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage08_09_HowToCook: React.FC = () => {
  const steps = [
    {
      number: "01",
      text: "Prepare all ingredients by washing, cutting, and measuring according to recipe specifications.",
    },
    {
      number: "02",
      text: "Heat your pan or pot to the appropriate temperature before adding any ingredients.",
    },
    {
      number: "03",
      text: "Add ingredients in the correct order, allowing each to cook properly before adding the next.",
    },
    {
      number: "04",
      text: "Season gradually, tasting as you go to achieve the perfect balance of flavors.",
    },
    {
      number: "05",
      text: "Monitor cooking time and temperature closely to prevent overcooking or burning.",
    },
    {
      number: "06",
      text: "Plate beautifully and garnish with fresh herbs before serving immediately.",
    },
  ];

  const processImages = [
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=300&h=300&fit=crop",
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Instructions */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
          }}
        >
          How to cook
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {steps.map((step) => (
            <Box key={step.number} sx={{ display: "flex", gap: 2 }}>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#FFB800",
                  minWidth: "40px",
                }}
              >
                {step.number}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.85rem",
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right page - Process images grid */}
      <Box
        sx={{
          width: "50%",
          bgcolor: "#fff",
          p: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {processImages.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`Cooking step ${i + 1}`}
              sx={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          ))}
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
