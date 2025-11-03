// Modern Template - Pages 10-11: Full Page Recipe
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage10_11_FullPageRecipe: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          width: "420mm",
          height: "297mm",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* Left page - Large overhead food photo */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1200&fit=crop"
            alt="Overhead food styling"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right page - Full recipe text */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: "#2d2d2d",
              mb: 4,
              letterSpacing: "0.02em",
            }}
          >
            Classic Breakfast
          </Typography>

          <Box
            sx={{
              bgcolor: "#5C8D89",
              p: 3,
              borderRadius: 1,
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.8,
              }}
            >
              A perfect way to start your morning with a nutritious and delicious
              meal that provides energy for the day ahead.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#2d2d2d",
              mb: 2,
            }}
          >
            Instructions
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {[
              "Heat a non-stick pan over medium heat and add a small amount of butter.",
              "In a bowl, whisk together eggs, milk, salt, and pepper until well combined.",
              "Pour the egg mixture into the pan and let it cook undisturbed for 30 seconds.",
              "Using a spatula, gently push the eggs from the edges toward the center.",
              "Continue cooking until eggs are just set but still slightly moist.",
              "Serve immediately with toast and fresh fruit on the side.",
            ].map((step, index) => (
              <Box key={index} sx={{ display: "flex", gap: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#5C8D89",
                    minWidth: "30px",
                  }}
                >
                  {index + 1}.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#444",
                    lineHeight: 1.6,
                  }}
                >
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: "auto", pt: 4 }}>
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                color: "#666",
                fontStyle: "italic",
              }}
            >
              Serves 2 | Total time: 15 minutes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
