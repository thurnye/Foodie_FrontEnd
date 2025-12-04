// Pages 14-15: Chaomin Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

export const Page14_15_Chaomin: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Recipe Details */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", p: 6 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#2d2d2d", mb: 1 }}>
          CHAOMIN
        </Typography>
        <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#8B7355", mb: 4, fontStyle: "italic" }}>
          Delicious stir-fried noodles with vegetables
        </Typography>

        <Box sx={{ display: "flex", gap: 4, mb: 5, pb: 4, borderBottom: "1px solid #e0e0e0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTime sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>Prep Time</Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>25 min</Typography>
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
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>Easy</Typography>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>Ingredients</Typography>
        <Box component="ul" sx={{ pl: 2, mb: 4 }}>
          {["400g noodles", "2 cups mixed vegetables", "2 tablespoons soy sauce", "1 tablespoon oyster sauce", "2 cloves garlic", "1 onion, sliced", "2 tablespoons oil", "Green onions for garnish"].map((ing, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.2, lineHeight: 1.6, "&::marker": { color: "#8B7355" } }}>{ing}</Box>
          ))}
        </Box>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>Instructions</Typography>
        <Box component="ol" sx={{ pl: 2.5 }}>
          {["Cook noodles according to package instructions.", "Heat oil in a wok over high heat.", "Add garlic and onion, stir-fry for 1 minute."].map((step, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>{step}</Box>
          ))}
        </Box>

        <Box component="img" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=300&fit=crop" alt="Chaomin ingredients" sx={{ width: "100%", height: "180px", objectFit: "cover", mt: 3 }} />

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* RIGHT PAGE: Large Image + Continued Instructions */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
        <Box component="img" src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=700&fit=crop" alt="Chaomin" sx={{ width: "100%", height: "60%", objectFit: "cover" }} />

        <Box sx={{ p: 6, flex: 1 }}>
          <Box component="ol" start={4} sx={{ pl: 2.5 }}>
            {["Add vegetables and stir-fry for 3-4 minutes.", "Add cooked noodles to the wok.", "Pour in soy sauce and oyster sauce.", "Toss everything together for 2-3 minutes.", "Garnish with green onions and serve hot."].map((step, i) => (
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
