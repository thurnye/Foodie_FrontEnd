// Minimalist Template - Pages 10-11: Menu Package
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const MinimalistPage10_11_MenuPackage: React.FC = () => {
  const menuSections = [
    {
      title: "STARTER SELECTION",
      items: [
        "Garden fresh salad with citrus vinaigrette",
        "Seasonal vegetable soup with herbs",
        "Grilled vegetables platter",
      ],
    },
    {
      title: "MAIN COURSE",
      items: [
        "Pan-seared salmon with lemon butter",
        "Herb-crusted white fish fillet",
        "Roasted vegetable medley",
      ],
    },
  ];

  return (
    <A3CanvasLayout>
      {/* Left page - Large colorful image */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative" }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1000&fit=crop"
          alt="Colorful salad bowl"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Right page - Menu Package details */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Menu Package
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "1.2rem",
            color: "#666",
            mb: 6,
          }}
        >
          Vegetable & Fish
        </Typography>

        {/* Menu sections */}
        {menuSections.map((section, idx) => (
          <Box key={idx} sx={{ mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  bgcolor: "#FFB800",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {idx + 1}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {section.title}
              </Typography>
            </Box>

            <Box component="ul" sx={{ pl: 4, listStyle: "none" }}>
              {section.items.map((item, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "0.85rem",
                    color: "#666",
                    mb: 1,
                    lineHeight: 1.8,
                  }}
                >
                  • {item}
                </Box>
              ))}
            </Box>
          </Box>
        ))}

        {/* Pricing info */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "2px solid #f0f0f0",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              Per Person
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#FFB800",
              }}
            >
              $45
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "0.75rem",
              color: "#999",
              textAlign: "right",
            }}
          >
            Minimum 2 people
          </Typography>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
