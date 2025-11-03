// Pages 12-13: Crispy Chicken Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

export const Page12_13_CrispyChicken: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Large Image */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
        <Box component="img" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=1000&fit=crop" alt="Crispy Chicken" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", bgcolor: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* RIGHT PAGE: Recipe Details */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", p: 6 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#2d2d2d", mb: 1 }}>
          CRISPY CHICKEN
        </Typography>
        <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#8B7355", mb: 4, fontStyle: "italic" }}>
          Golden, crispy, and perfectly seasoned
        </Typography>

        <Box sx={{ display: "flex", gap: 4, mb: 5, pb: 4, borderBottom: "1px solid #e0e0e0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTime sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Prep Time</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>30 min</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Restaurant sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Servings</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>4 people</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalFireDepartment sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Difficulty</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>Medium</Typography>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>Ingredients</Typography>
        <Box component="ul" sx={{ pl: 2, mb: 4 }}>
          {["4 chicken breasts", "2 cups flour", "2 eggs, beaten", "1 cup breadcrumbs", "1 teaspoon paprika", "1 teaspoon garlic powder", "Salt and pepper", "Oil for frying"].map((ing, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.2, lineHeight: 1.6, "&::marker": { color: "#8B7355" } }}>{ing}</Box>
          ))}
        </Box>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>Instructions</Typography>
        <Box component="ol" sx={{ pl: 2.5 }}>
          {["Season chicken with salt, pepper, paprika, and garlic powder.", "Set up breading station: flour, beaten eggs, breadcrumbs.", "Coat each chicken piece: flour → egg → breadcrumbs.", "Heat oil to 350°F (175°C).", "Fry chicken for 6-8 minutes per side until golden.", "Drain on paper towels and serve hot."].map((step, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>{step}</Box>
          ))}
        </Box>

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
