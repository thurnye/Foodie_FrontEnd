// Vegan Template - Pages 4-5: Burgers
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const VeganPage04_05_Burgers: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box sx={{ width: "50%", bgcolor: "#fff", display: "flex", flexDirection: "column" }}>
        
        {/* Green panel with title */}
        <Box sx={{ bgcolor: "#5D9C59", p: 4, display: "flex", alignItems: "center", justifyContent: "center", height: "30%" }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5rem", fontWeight: 700, color: "#fff", textAlign: "center" }}>
            Burgers
          </Typography>
        </Box>

        {/* Description */}
        <Box sx={{ p: 6, flex: 1 }}>
          <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "1rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify", mb: 3 }}>
            Our vegan burgers are packed with protein, flavor, and satisfaction. These aren't your average veggie patties—these are hearty, juicy burgers that even meat-lovers will enjoy. Made with wholesome ingredients like black beans, chickpeas, and mushrooms, each burger is a complete meal in itself.
          </Typography>

          <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "1rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify" }}>
            The secret to a great vegan burger is in the texture and seasoning. We've perfected the balance of moisture and binding to create patties that hold together beautifully on the grill or in the pan, with a satisfying exterior crust and tender interior.
          </Typography>
        </Box>
      </Box>

      {/* Right Page */}
      <Box sx={{ width: "50%", bgcolor: "#fff", display: "flex", flexDirection: "column" }}>
        
        {/* Title */}
        <Box sx={{ p: 4, pt: 6 }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>
            Burger Name
          </Typography>
          <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem", color: "#666", lineHeight: 1.6, mb: 3 }}>
            A hearty, flavorful burger that's perfect for any occasion
          </Typography>
        </Box>

        {/* Large burger image on black background */}
        <Box sx={{ flex: 1, bgcolor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", p: 4 }}>
          <Box component="img" src="https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=500&fit=crop" alt="Vegan Burger" sx={{ width: "90%", height: "auto", maxHeight: "400px", objectFit: "cover" }} />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
