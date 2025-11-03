// Pages 6-7: Dessert Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

const ingredients = [
  "2 cups all-purpose flour",
  "1 cup sugar",
  "3 large eggs",
  "1 cup milk",
  "½ cup melted butter",
  "2 teaspoons baking powder",
  "1 teaspoon vanilla extract",
  "Pinch of salt",
  "Powdered sugar for dusting",
];

const steps = [
  "Preheat oven to 350°F (175°C). Grease and flour a 9-inch pan.",
  "In a large bowl, whisk together flour, baking powder, and salt.",
  "In another bowl, beat eggs and sugar until light and fluffy.",
  "Add milk, melted butter, and vanilla to the egg mixture.",
  "Gradually fold the dry ingredients into the wet mixture.",
  "Pour batter into prepared pan and smooth the top.",
  "Bake for 30-35 minutes until golden and a toothpick comes out clean.",
  "Let cool for 10 minutes, then dust with powdered sugar before serving.",
];

export const Page06_07_Dessert: React.FC = () => {
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
          DESSERT
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
          A delightful sweet treat for any occasion
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
                20 min
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
                8 slices
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
                Medium
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
        {/* Top small image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop"
          alt="Dessert detail"
          sx={{
            width: "100%",
            height: "30%",
            objectFit: "cover",
          }}
        />

        {/* Large hero image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop"
          alt="Dessert"
          sx={{
            width: "100%",
            height: "35%",
            objectFit: "cover",
            mt: 2,
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
