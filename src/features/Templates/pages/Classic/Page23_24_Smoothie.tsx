// Classic Template - Pages 23-24: Smoothie Bowl
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage23_24_Smoothie: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - SMOOTHIE header and description */}
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
          SMOOTHIE
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
          A refreshing smoothie bowl that's as beautiful as it is nutritious.
          Thick, creamy, and topped with colorful fresh fruits and crunchy
          granola, this recipe turns your morning smoothie into an Instagram-
          worthy breakfast bowl. Packed with vitamins and antioxidants.
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
            "2 frozen bananas",
            "1 cup frozen berries",
            "1/2 cup Greek yogurt",
            "1/4 cup milk or almond milk",
            "1 tbsp honey",
            "1/2 tsp vanilla extract",
            "Toppings: fresh fruit",
            "Granola",
            "Coconut flakes",
            "Chia seeds",
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
          src="https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop"
          alt="Smoothie Bowl"
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
              "Add frozen bananas and berries to a high-speed blender.",
              "Add yogurt, milk, honey, and vanilla extract.",
              "Blend on high until smooth and thick.",
              "Add more milk if needed, but keep consistency thick.",
              "Pour into a bowl.",
              "Arrange fresh fruit slices on top in rows or sections.",
              "Sprinkle with granola, coconut flakes, and chia seeds.",
              "Serve immediately with a spoon.",
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
