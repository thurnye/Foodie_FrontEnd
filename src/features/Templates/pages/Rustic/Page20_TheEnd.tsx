// Page 20: The End (A4 Single Page)
import React from "react";
import { Box, Typography } from "@mui/material";

export const Page20_TheEnd: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media print": {
            boxShadow: "none",
            pageBreakAfter: "always",
          },
        }}
      >
        {/* Main Title */}
        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "7rem",
            fontWeight: 700,
            color: "#2d2d2d",
            lineHeight: 1,
            letterSpacing: "0.05em",
            mb: 6,
          }}
        >
          THE
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "7rem",
            fontWeight: 700,
            color: "#2d2d2d",
            lineHeight: 1,
            letterSpacing: "0.05em",
            mb: 8,
          }}
        >
          END
        </Typography>

        {/* Decorative line */}
        <Box
          sx={{
            width: "200px",
            height: "2px",
            bgcolor: "#8B7355",
            mb: 6,
          }}
        />

        {/* Subtitle text */}
        <Typography
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1.1rem",
            color: "#4a4a4a",
            textAlign: "center",
            lineHeight: 1.8,
            maxWidth: "400px",
          }}
        >
          Thank you for cooking with
          <br />
          <Typography
            component="span"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#2d2d2d",
              display: "block",
              mt: 1,
              mb: 0.5,
            }}
          >
            Best Recipes
          </Typography>
          Chef Mary Smith,
          <br />
          Special Edition Book
        </Typography>

        {/* Decorative circle at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 60,
            border: "3px solid #8B7355",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: "#8B7355",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
