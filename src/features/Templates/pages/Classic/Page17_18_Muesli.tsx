// Classic Template - Pages 17-18: Muesli
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage17_18_Muesli: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - MUESLI header and description */}
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
          MUESLI
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
          A traditional Swiss breakfast that's both nutritious and delicious.
          Unlike granola, muesli is uncooked and soaked overnight in milk or
          yogurt, creating a creamy texture. This wholesome meal is packed
          with fiber, vitamins, and minerals to start your day right.
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
            "2 cups rolled oats",
            "1/2 cup wheat flakes",
            "1/2 cup barley flakes",
            "1/4 cup sunflower seeds",
            "1/4 cup chopped almonds",
            "1/4 cup dried cranberries",
            "1/4 cup raisins",
            "2 tbsp ground flaxseed",
            "Fresh fruit for serving",
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
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop"
          alt="Muesli"
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
              "Mix all dry ingredients in a large bowl.",
              "Store in an airtight container in a cool, dry place.",
              "To serve, place 1/2 cup muesli in a bowl.",
              "Add milk, yogurt, or plant-based alternative.",
              "Refrigerate overnight for best results.",
              "In the morning, stir and add more liquid if needed.",
              "Top with fresh fruit, honey, or additional nuts.",
              "Enjoy cold or let stand at room temperature for 5 minutes.",
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
