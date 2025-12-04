// Classic Template - Pages 7-8: Pancakes
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage07_08_Pancakes: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - PANCAKES header and description */}
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
          PANCAKES
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
          Fluffy, golden pancakes are a breakfast classic that never goes out
          of style. This recipe creates perfectly light and airy pancakes with
          a tender crumb. Whether you top them with maple syrup, fresh fruit,
          or whipped cream, these pancakes will become your go-to weekend
          breakfast treat.
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
            "1 1/2 cups all-purpose flour",
            "3 1/2 tsp baking powder",
            "1 tsp salt",
            "1 tbsp white sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp butter, melted",
            "1 tsp vanilla extract",
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
          src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop"
          alt="Pancakes"
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
              "In a large bowl, sift together flour, baking powder, salt, and sugar.",
              "Make a well in the center and pour in milk, egg, and melted butter.",
              "Mix until smooth and let batter rest for 5 minutes.",
              "Heat a lightly oiled griddle over medium-high heat.",
              "Pour 1/4 cup batter for each pancake onto the griddle.",
              "Cook until bubbles form and edges are dry, about 2-3 minutes.",
              "Flip and cook until golden brown on the other side.",
              "Serve hot with your favorite toppings.",
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
