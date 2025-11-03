// Pages 10-11: Bread Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

export const Page10_11_Bread: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Recipe Details */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", p: 6 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#2d2d2d", mb: 1 }}>
          BREAD
        </Typography>
        <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#8B7355", mb: 4, fontStyle: "italic" }}>
          Homemade artisan bread with a crispy crust
        </Typography>

        {/* Stats */}
        <Box sx={{ display: "flex", gap: 4, mb: 5, pb: 4, borderBottom: "1px solid #e0e0e0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTime sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Prep Time</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>2 hrs</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Restaurant sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Servings</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>1 loaf</Typography>
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
          {["3 cups bread flour", "1½ cups warm water", "2 teaspoons active dry yeast", "2 teaspoons salt", "1 tablespoon sugar", "2 tablespoons olive oil"].map((ing, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.2, lineHeight: 1.6, "&::marker": { color: "#8B7355" } }}>{ing}</Box>
          ))}
        </Box>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>Instructions</Typography>
        <Box component="ol" sx={{ pl: 2.5 }}>
          {["Mix yeast, sugar, and warm water. Let sit for 5 minutes.", "Add flour, salt, and oil. Mix until dough forms.", "Knead for 8-10 minutes until smooth and elastic."].map((step, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>{step}</Box>
          ))}
        </Box>

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* RIGHT PAGE: Large Image + Details */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
        <Box component="img" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=700&fit=crop" alt="Bread" sx={{ width: "100%", height: "60%", objectFit: "cover" }} />

        <Box sx={{ p: 6, flex: 1 }}>
          {/* Additional images */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, mb: 3 }}>
            <Box component="img" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop" alt="Step 1" sx={{ width: "100%", height: "80px", objectFit: "cover" }} />
            <Box component="img" src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=200&fit=crop" alt="Step 2" sx={{ width: "100%", height: "80px", objectFit: "cover" }} />
            <Box component="img" src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&h=200&fit=crop" alt="Step 3" sx={{ width: "100%", height: "80px", objectFit: "cover" }} />
          </Box>

          <Box component="ol" start={4} sx={{ pl: 2.5 }}>
            {["Place in greased bowl, cover, and let rise for 1 hour.", "Punch down dough and shape into a loaf.", "Let rise for another 30 minutes.", "Bake at 375°F for 30-35 minutes until golden."].map((step, i) => (
              <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>{step}</Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
