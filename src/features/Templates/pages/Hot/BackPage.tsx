import { Box, Typography } from "@mui/material";
import React from "react";

export default function BackPage() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          width: "420px",
          height: "594px",
          position: "relative",
          bgcolor: "#C85C5C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* White corner piece - top right */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "15%",
            height: "15%",
            bgcolor: "#fff",
          }}
        />

        {/* Contact information */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.05em",
              mb: 0.5,
            }}
          >
            CONTACT US FOR MORE
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            INFORMATION
          </Typography>
        </Box>

        {/* Decorative lines */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "3px",
              bgcolor: "rgba(90,90,90,0.6)",
            }}
          />
          <Box
            sx={{
              width: "80px",
              height: "3px",
              bgcolor: "rgba(90,90,90,0.6)",
            }}
          />
          <Box
            sx={{
              width: "90px",
              height: "3px",
              bgcolor: "rgba(90,90,90,0.6)",
            }}
          />
        </Box>

        {/* Barcode */}
        <Box
          sx={{
            bgcolor: "#fff",
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "flex-end",
            gap: 0.3,
          }}
        >
          {/* Barcode lines */}
          {[8, 12, 6, 10, 8, 12, 6, 10, 8, 6, 12, 10, 8, 6, 10, 8].map((height, i) => (
            <Box
              key={i}
              sx={{
                width: i % 3 === 0 ? "3px" : "2px",
                height: `${height * 3}px`,
                bgcolor: "#000",
              }}
            />
          ))}
        </Box>

        {/* Barcode number */}
        <Typography
          sx={{
            fontSize: "0.7rem",
            fontFamily: "monospace",
            color: "#fff",
            mt: 1,
            letterSpacing: "0.15em",
          }}
        >
          123 458 7
        </Typography>

        {/* White corner piece - bottom left */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "10%",
            height: "10%",
            bgcolor: "#fff",
          }}
        />
      </Box>
    </Box>
  );
}
