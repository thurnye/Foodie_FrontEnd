// Pages 4-5: Fried Rice Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

const ingredients = [
  "2 cups cooked rice (preferably day-old)",
  "2 eggs, beaten",
  "1 cup mixed vegetables",
  "2 tablespoons soy sauce",
  "1 tablespoon sesame oil",
  "2 cloves garlic, minced",
  "1 small onion, diced",
  "2 green onions, sliced",
  "Salt and pepper to taste",
];

const steps = [
  "Heat oil in a large wok or skillet over high heat.",
  "Add beaten eggs and scramble until just set. Remove and set aside.",
  "Add garlic and onion, cook until fragrant.",
  "Toss in mixed vegetables and stir-fry for 2-3 minutes.",
  "Add the rice, breaking up any clumps, and stir-fry for 3-4 minutes.",
  "Return eggs to the pan, add soy sauce and sesame oil.",
  "Mix everything together and cook for another 2 minutes.",
  "Garnish with green onions and serve hot.",
];

export const Page04_05_FriedRice: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Recipe Details */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          p: 6,
        }}
      >
        {/* Recipe Title */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 1,
            letterSpacing: "0.02em",
          }}
        >
          FRIED RICE
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem",
            color: "#8B7355",
            mb: 4,
            fontStyle: "italic",
          }}
        >
          A classic Asian dish, perfect for any meal
        </Typography>

        {/* Recipe Stats */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mb: 5,
            pb: 4,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTime sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  color: "#999",
                  textTransform: "uppercase",
                }}
              >
                Prep Time
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                }}
              >
                15 min
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Restaurant sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  color: "#999",
                  textTransform: "uppercase",
                }}
              >
                Servings
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                }}
              >
                4 people
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalFireDepartment sx={{ fontSize: "1.2rem", color: "#8B7355" }} />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  color: "#999",
                  textTransform: "uppercase",
                }}
              >
                Difficulty
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                }}
              >
                Easy
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Ingredients */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Ingredients
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 4 }}>
          {ingredients.map((ingredient, idx) => (
            <Box
              component="li"
              key={idx}
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                color: "#4a4a4a",
                mb: 1.2,
                lineHeight: 1.6,
                "&::marker": {
                  color: "#8B7355",
                },
              }}
            >
              {ingredient}
            </Box>
          ))}
        </Box>

        {/* Instructions */}
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Instructions
        </Typography>

        <Box component="ol" sx={{ pl: 2.5 }}>
          {steps.slice(0, 3).map((step, idx) => (
            <Box
              component="li"
              key={idx}
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                color: "#4a4a4a",
                mb: 1.5,
                lineHeight: 1.6,
                "&::marker": {
                  color: "#8B7355",
                  fontWeight: 700,
                },
              }}
            >
              {step}
            </Box>
          ))}
        </Box>

        {/* Decorative circle at bottom */}
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
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#8B7355",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      {/* RIGHT PAGE: Large Image + Continued Instructions */}
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
          src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop"
          alt="Fried Rice"
          sx={{
            width: "100%",
            height: "55%",
            objectFit: "cover",
          }}
        />

        {/* Continued instructions */}
        <Box sx={{ p: 6, flex: 1 }}>
          <Box component="ol" start={4} sx={{ pl: 2.5 }}>
            {steps.slice(3).map((step, idx) => (
              <Box
                component="li"
                key={idx + 3}
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  color: "#4a4a4a",
                  mb: 1.5,
                  lineHeight: 1.6,
                  "&::marker": {
                    color: "#8B7355",
                    fontWeight: 700,
                  },
                }}
              >
                {step}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Decorative circle at bottom */}
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
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#8B7355",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
