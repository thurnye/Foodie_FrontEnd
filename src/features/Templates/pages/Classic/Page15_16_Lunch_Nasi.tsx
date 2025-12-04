// Classic Template - Pages 15-16: Lunch - Nasi
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage15_16_LunchNasi: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - LUNCH NASI header and description */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          LUNCH
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          NASI
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.9rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 4,
          }}
        >
          This fragrant Indonesian rice dish is a complete meal in itself.
          Nasi goreng combines perfectly seasoned rice with vegetables, protein,
          and aromatic spices. It's a versatile recipe that can be adapted with
          whatever ingredients you have on hand.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Ingredients
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          {[
            "3 cups cooked rice, day-old",
            "2 tbsp vegetable oil",
            "3 cloves garlic, minced",
            "1 small onion, diced",
            "2 eggs, beaten",
            "1 cup mixed vegetables",
            "2 tbsp soy sauce",
            "1 tbsp kecap manis",
            "1 tsp shrimp paste",
            "Green onions for garnish",
          ].map((ing, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.9rem",
                color: "#4a4a4a",
                mb: 0.5,
              }}
            >
              {ing}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right page - Large image and instructions */}
      <Box
        sx={{
          width: "50%",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop"
          alt="Nasi Goreng"
          sx={{ width: "100%", height: "60%", objectFit: "cover" }}
        />

        <Box sx={{ p: 6 }}>
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#2d2d2d",
              mb: 2,
            }}
          >
            Instructions
          </Typography>

          <Box component="ol" sx={{ pl: 3 }}>
            {[
              "Heat oil in a wok or large pan over high heat.",
              "Add garlic and onion, stir-fry until fragrant.",
              "Push to the side and scramble eggs in the center.",
              "Add vegetables and stir-fry for 2-3 minutes.",
              "Add rice, breaking up any clumps.",
              "Mix in soy sauce, kecap manis, and shrimp paste.",
              "Stir-fry everything together for 3-4 minutes.",
              "Garnish with green onions and serve hot.",
            ].map((step, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.9rem",
                  color: "#4a4a4a",
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
