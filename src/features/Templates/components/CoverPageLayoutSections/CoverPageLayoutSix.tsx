import React from 'react';
import { Box, Typography } from '@mui/material';
import { Spa } from "@mui/icons-material";

export const CoverPageLayoutSix: React.FC = () => {
  return (
    <Box
      key='coverPage'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box sx={{ width: "210mm", height: "297mm", bgcolor: "#fff", borderRadius: 2, boxShadow: "0 0 25px rgba(0,0,0,0.15)", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", p: 8 }}>
              
              {/* Top Image */}
              <Box component="img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" alt="Fresh Salad" sx={{ width: "80%", height: "auto", maxHeight: "300px", objectFit: "cover", mb: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }} />
      
              {/* Main Title */}
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", fontWeight: 700, color: "#2d2d2d", mb: 2, textAlign: "center" }}>
                The Cookbook
              </Typography>
      
              {/* Subtitle with leaf icons */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Spa sx={{ fontSize: "1.8rem", color: "#5D9C59" }} />
                <Typography sx={{ fontFamily: "'Arial', sans-serif", fontSize: "1.3rem", fontWeight: 600, color: "#5D9C59", letterSpacing: "0.2em" }}>
                  VEGAN RECIPE
                </Typography>
                <Spa sx={{ fontSize: "1.8rem", color: "#5D9C59" }} />
              </Box>
      
              {/* Bottom Image */}
              <Box component="img" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=300&fit=crop" alt="Green vegetables" sx={{ width: "70%", height: "auto", maxHeight: "200px", objectFit: "cover", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }} />
            </Box>
    </Box>
  );
};
