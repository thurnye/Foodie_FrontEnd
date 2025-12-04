// Modern Template - Pages 6-7: Quote
import React from "react";
import { Box, Typography } from "@mui/material";

export const ModernPage06_07_Quote: React.FC = () => {
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
        {/* Left page - Coffee/breakfast image grid */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
            alt="Coffee"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop"
            alt="Toast"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop"
            alt="Coffee cup"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&h=400&fit=crop"
            alt="Breakfast"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right page - Quote on green background */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "#5C8D89",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "4rem",
              fontWeight: 300,
              color: "#fff",
              mb: 2,
            }}
          >
            "
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "2rem",
              fontWeight: 400,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.6,
              mb: 4,
              fontStyle: "italic",
            }}
          >
            Cooking is like love. It should be entered into with abandon or not at all.
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
            }}
          >
            - Harriet Van Horne
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
