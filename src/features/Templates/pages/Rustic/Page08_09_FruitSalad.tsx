// Pages 8-9: Fruit Salad Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

export const Page08_09_FruitSalad: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Large Image + Recipe Title */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Large hero image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800&h=900&fit=crop"
          alt="Fruit Salad"
          sx={{
            width: "100%",
            height: "70%",
            objectFit: "cover",
          }}
        />

        {/* Title section */}
        <Box sx={{ p: 6, flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
              mb: 1,
            }}
          >
            FRUIT SALAD
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "#8B7355",
              fontStyle: "italic",
            }}
          >
            Fresh, colorful, and healthy
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 40,
            border: "2px solid #8B7355",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* RIGHT PAGE: Recipe Details */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          bgcolor: "#ffffff",
          p: 6,
        }}
      >
        {/* Recipe Stats */}
        <Box sx={{ display: "flex", gap: 4, mb: 5, pb: 4, borderBottom: "1px solid #e0e0e0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTime sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>
                Prep Time
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>
                10 min
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Restaurant sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>
                Servings
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>
                6 people
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalFireDepartment sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#999", textTransform: "uppercase" }}>
                Difficulty
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#2d2d2d" }}>
                Easy
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Ingredients */}
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>
          Ingredients
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 4 }}>
          {["2 cups strawberries, halved", "2 bananas, sliced", "1 cup blueberries", "1 cup grapes", "2 oranges, segmented", "1 apple, diced", "2 tablespoons honey", "1 tablespoon lemon juice", "Fresh mint for garnish"].map((ing, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.2, lineHeight: 1.6, "&::marker": { color: "#8B7355" } }}>
              {ing}
            </Box>
          ))}
        </Box>

        {/* Instructions */}
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>
          Instructions
        </Typography>
        <Box component="ol" sx={{ pl: 2.5 }}>
          {["Wash all fruits thoroughly and cut as specified.", "In a large bowl, combine all fruit pieces.", "In a small bowl, whisk together honey and lemon juice.", "Pour the honey-lemon dressing over the fruit.", "Gently toss to coat all fruit evenly.", "Chill for 30 minutes before serving.", "Garnish with fresh mint leaves and serve cold."].map((step, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>
              {step}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 40,
            border: "2px solid #8B7355",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
