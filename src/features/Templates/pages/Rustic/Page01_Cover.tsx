// Page 1: Cover Page (A4)
import React from "react";
import { Box, Typography } from "@mui/material";

export const Page01_Cover: React.FC = () => {
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
          width: "210mm",
          height: "297mm",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          position: "relative",
          "@media print": {
            boxShadow: "none",
            pageBreakAfter: "always",
          },
        }}
      >
        {/* Top decorative food images */}
        <Box
          sx={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            height: "180px",
          }}
        >
          {/* Top left image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
            alt="Food"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          {/* Top right image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
            alt="Coffee"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Handwritten script at top */}
        <Typography
          sx={{
            position: "absolute",
            top: 245,
            left: 60,
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.8rem",
            color: "#8B7355",
            fontWeight: 500,
          }}
        >
          Healthy
        </Typography>

        {/* Main Title */}
        <Box
          sx={{
            position: "absolute",
            top: 280,
            left: 40,
            right: 40,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "5.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            THE
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "5.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            COOKBOOK
          </Typography>
        </Box>

        {/* Large hero image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
          alt="Main dish"
          sx={{
            position: "absolute",
            top: 440,
            left: 40,
            width: "calc(100% - 80px)",
            height: "420px",
            objectFit: "cover",
            borderRadius: 1,
          }}
        />

        {/* Bottom decorative food images */}
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: 40,
            right: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            height: "120px",
          }}
        >
          {/* Bottom left image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
            alt="Bread"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          {/* Bottom right image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop"
            alt="Pancakes"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Subtitle text */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Chef Mary Smith,
          <br />
          Special Edition Book
        </Typography>
      </Box>
    </Box>
  );
};
