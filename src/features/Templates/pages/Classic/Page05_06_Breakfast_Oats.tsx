// Classic Template - Pages 5-6: Breakfast - Oats
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const ClassicPage05_06_BreakfastOats: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left page - BREAKFAST header and description */}
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
          BREAKFAST
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
          OATS
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
          Start your day with this nutritious and delicious oat recipe. Packed
          with fiber and essential nutrients, this breakfast will keep you
          energized throughout the morning. The combination of creamy oats with
          fresh fruits creates a perfect balance of taste and health.
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
            "1 cup rolled oats",
            "2 cups milk or water",
            "1 tbsp honey",
            "1/2 tsp cinnamon",
            "Fresh berries",
            "Sliced banana",
            "Chopped nuts",
            "Pinch of salt",
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
          src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&h=600&fit=crop"
          alt="Oats"
          sx={{ width: "100%", height: "55%", objectFit: "cover" }}
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
              "Bring milk or water to a gentle boil in a saucepan.",
              "Add oats and salt, reduce heat to medium-low.",
              "Cook for 5-7 minutes, stirring occasionally.",
              "Remove from heat and stir in honey and cinnamon.",
              "Let sit for 2 minutes to thicken.",
              "Top with fresh berries, banana, and nuts.",
              "Serve warm and enjoy immediately.",
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
