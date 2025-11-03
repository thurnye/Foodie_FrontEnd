// Modern Template - Pages 12-13: Healthy
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage12_13_Healthy: React.FC = () => {
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
        {/* Left page - "Healthy" title with 3 food images */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top section - Green background with title */}
          <Box
            sx={{
              bgcolor: "#5C8D89",
              p: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "4rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.02em",
              }}
            >
              Healthy
            </Typography>
          </Box>

          {/* Bottom section - 3 food images in a row */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              height: "60%",
              p: 2,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop"
              alt="Healthy salad"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=600&fit=crop"
              alt="Fresh vegetables"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=600&fit=crop"
              alt="Fruit bowl"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>

        {/* Right page - Three food photos in vertical layout */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 2,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&h=400&fit=crop"
            alt="Healthy breakfast bowl"
            sx={{
              width: "100%",
              height: "33.33%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
            alt="Colorful salad"
            sx={{
              width: "100%",
              height: "33.33%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=400&fit=crop"
            alt="Smoothie bowl"
            sx={{
              width: "100%",
              height: "33.33%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
