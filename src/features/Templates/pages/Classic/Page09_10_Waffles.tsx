// Classic Template - Pages 9-10: Waffles
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage09_10_Waffles: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - WAFFLES header and description */}
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
          WAFFLES
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#666",
            mb: 4,
          }}
        >
          NOTES
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
          Crispy on the outside, fluffy on the inside - these waffles are
          everything a breakfast waffle should be. The secret is in the
          technique: separating the eggs and folding in whipped egg whites
          creates an incredibly light texture. Perfect for lazy Sunday mornings.
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
            "2 cups all-purpose flour",
            "1 tbsp sugar",
            "4 tsp baking powder",
            "1/4 tsp salt",
            "2 eggs, separated",
            "1 3/4 cups milk",
            "1/2 cup vegetable oil",
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
          src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&h=600&fit=crop"
          alt="Waffles"
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
              "Preheat your waffle iron according to manufacturer's instructions.",
              "Mix flour, sugar, baking powder, and salt in a large bowl.",
              "In another bowl, beat egg whites until stiff peaks form.",
              "Whisk together egg yolks, milk, oil, and vanilla.",
              "Pour wet ingredients into dry ingredients and mix until just combined.",
              "Gently fold in the beaten egg whites.",
              "Pour batter onto hot waffle iron and cook until golden and crisp.",
              "Serve immediately with butter and maple syrup.",
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
