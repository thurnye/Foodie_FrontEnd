// Modern Template - Page 1: Cover
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage01_Cover: React.FC = () => {
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
        }}
      >
        {/* Photo montage background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 0.5,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop"
            alt="Food 1"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
            alt="Food 2"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop"
            alt="Food 3"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop"
            alt="Food 4"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=400&fit=crop"
            alt="Food 5"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=400&fit=crop"
            alt="Food 6"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop"
            alt="Food 7"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&h=400&fit=crop"
            alt="Food 8"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=400&fit=crop"
            alt="Food 9"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Centered title overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 1,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            p: 6,
            borderRadius: 1,
            minWidth: "60%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
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
              color: "#5C8D89",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Recipe Template
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
