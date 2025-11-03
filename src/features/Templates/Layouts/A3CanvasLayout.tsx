// src/components/A3Canvas.tsx
import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const A3CanvasLayout: React.FC<Props> = ({ children }) => {
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
          width: "90vw",
          aspectRatio: "1 / 0.707", // A3 landscape ratio (2-page spread)
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          display: "flex",
          overflow: "hidden",
          "@media print": {
            width: "420mm",
            height: "297mm",
            boxShadow: "none",
            pageBreakAfter: "always",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
