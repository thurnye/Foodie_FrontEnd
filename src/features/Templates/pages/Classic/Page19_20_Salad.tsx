// Classic Template - Pages 19-20: Salad
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage19_20_Salad: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - SALAD header and description */}
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
          SALAD
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
          A vibrant, nutrient-packed salad that's anything but boring. This
          recipe combines crisp greens with colorful vegetables, protein-rich
          additions, and a tangy homemade dressing. It's substantial enough
          to be a meal on its own or serves as a perfect side dish.
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
            "4 cups mixed greens",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1 avocado, diced",
            "1/4 cup feta cheese",
            "1/4 cup toasted nuts",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "1 tsp Dijon mustard",
            "Salt and pepper",
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
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop"
          alt="Fresh Salad"
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
              "Wash and dry all greens thoroughly.",
              "Place mixed greens in a large serving bowl.",
              "Add tomatoes, cucumber, and red onion.",
              "In a small bowl, whisk together olive oil, lemon juice, and mustard.",
              "Season dressing with salt and pepper to taste.",
              "Pour dressing over salad just before serving.",
              "Top with avocado, feta cheese, and toasted nuts.",
              "Toss gently and serve immediately.",
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
