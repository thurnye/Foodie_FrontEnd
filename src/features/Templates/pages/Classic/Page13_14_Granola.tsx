// Classic Template - Pages 13-14: Granola
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage13_14_Granola: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - GRANOLA header and description */}
      <Box sx={{ width: "50%", p: 6, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          GRANOLA
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
          Homemade granola is incredibly easy to make and far superior to
          store-bought versions. This recipe creates perfectly clustered,
          crunchy granola with just the right amount of sweetness. Enjoy it
          with yogurt, milk, or straight from the jar as a healthy snack.
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
            "3 cups old-fashioned oats",
            "1 cup mixed nuts, chopped",
            "1/2 cup seeds (pumpkin, sunflower)",
            "1/3 cup honey or maple syrup",
            "1/4 cup coconut oil",
            "1 tsp vanilla extract",
            "1/2 tsp cinnamon",
            "1/4 tsp salt",
            "1/2 cup dried fruit",
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
          src="https://images.unsplash.com/photo-1593096329871-e6e795f7a5be?w=800&h=600&fit=crop"
          alt="Granola"
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
              "Preheat oven to 325°F (165°C) and line a baking sheet with parchment.",
              "Mix oats, nuts, and seeds in a large bowl.",
              "Warm honey and coconut oil together until melted.",
              "Stir in vanilla, cinnamon, and salt.",
              "Pour wet ingredients over oat mixture and stir well.",
              "Spread evenly on baking sheet in a single layer.",
              "Bake for 25-30 minutes, stirring halfway through.",
              "Let cool completely, then mix in dried fruit. Store in airtight container.",
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
