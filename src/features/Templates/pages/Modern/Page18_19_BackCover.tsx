// Modern Template - Pages 18-19: Back Cover
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage18_19_BackCover: React.FC = () => {
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
          bgcolor: "#5C8D89",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 8,
          position: "relative",
        }}
      >
        {/* Centered back cover text */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.05em",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Kitchen with
            <br />
            COOK&BOOK
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Recipe Template
          </Typography>
        </Box>

        {/* Bottom decorative line */}
        <Box
          sx={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "2px",
            bgcolor: "rgba(255,255,255,0.5)",
          }}
        />

        {/* Bottom text */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 30,
            fontFamily: "'Arial', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
          }}
        >
          www.cookandbook.com
        </Typography>
      </Box>
    </Box>
  );
};
