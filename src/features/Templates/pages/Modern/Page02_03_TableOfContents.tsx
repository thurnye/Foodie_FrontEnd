// Modern Template - Pages 2-3: Table of Contents
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage02_03_TableOfContents: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1200&fit=crop"
            alt="Overhead food spread"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right page - Table of Contents */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "#5C8D89",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#fff",
              mb: 6,
              letterSpacing: "0.02em",
            }}
          >
            Table of Content
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[
              { num: "01", title: "Cookbook Template", page: "04" },
              { num: "02", title: "Cooking Quote", page: "06" },
              { num: "03", title: "Cookbook Sidebar", page: "08" },
              { num: "04", title: "Full Page Recipe", page: "10" },
              { num: "05", title: "Healthy", page: "12" },
              { num: "06", title: "Cookbook Fastfood", page: "14" },
              { num: "07", title: "Cookbook Sidebar Menu", page: "16" },
            ].map((item) => (
              <Box
                key={item.num}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#fff",
                    minWidth: "60px",
                  }}
                >
                  {item.num}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "#fff",
                    flex: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {item.page}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
