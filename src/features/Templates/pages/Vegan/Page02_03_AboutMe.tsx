// Vegan Template - Pages 2-3: About Me
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const VeganPage02_03_AboutMe: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box sx={{ width: "50%", bgcolor: "#fff", position: "relative", p: 6 }}>
        
        {/* Vertical text on left edge */}
        <Typography sx={{ position: "absolute", left: 20, top: "50%", transform: "rotate(-90deg) translateX(-50%)", transformOrigin: "left center", fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#5D9C59", whiteSpace: "nowrap" }}>
          and no
        </Typography>

        {/* Main title */}
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, color: "#2d2d2d", mb: 3, ml: 4 }}>
          about me
        </Typography>

        {/* Green decorative squares */}
        <Box sx={{ display: "flex", gap: 1, mb: 3, ml: 4 }}>
          <Box sx={{ width: "10px", height: "10px", bgcolor: "#5D9C59" }} />
          <Box sx={{ width: "10px", height: "10px", bgcolor: "#5D9C59" }} />
          <Box sx={{ width: "10px", height: "10px", bgcolor: "#5D9C59" }} />
        </Box>

        {/* Chef photo */}
        <Box component="img" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=400&fit=crop" alt="Chef" sx={{ width: "200px", height: "250px", objectFit: "cover", mb: 3, ml: 4 }} />

        {/* Newspaper column with drop cap */}
        <Box sx={{ ml: 4 }}>
          <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "0.9rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify" }}>
            <Box component="span" sx={{ float: "left", fontFamily: "'Playfair Display', serif", fontSize: "4rem", fontWeight: 700, lineHeight: 0.8, mr: 1, color: "#2d2d2d" }}>N</Box>
            utrition and health have always been my passion. Growing up in a family that valued fresh, wholesome foods, I learned early on that what we eat directly impacts how we feel. This cookbook is the result of years of experimenting, learning, and perfecting plant-based recipes that are not only nutritious but also incredibly delicious.
          </Typography>
        </Box>

        {/* Food images */}
        <Box sx={{ display: "flex", gap: 2, mt: 3, ml: 4 }}>
          <Box component="img" src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=150&h=100&fit=crop" alt="Food" sx={{ width: "120px", height: "80px", objectFit: "cover" }} />
          <Box component="img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=100&fit=crop" alt="Food" sx={{ width: "120px", height: "80px", objectFit: "cover" }} />
        </Box>
      </Box>

      {/* Right Page */}
      <Box sx={{ width: "50%", bgcolor: "#fff", p: 6 }}>
        
        {/* Newspaper column with drop cap */}
        <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "0.9rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify", mb: 3 }}>
          <Box component="span" sx={{ float: "left", fontFamily: "'Playfair Display', serif", fontSize: "4rem", fontWeight: 700, lineHeight: 0.8, mr: 1, color: "#2d2d2d" }}>P</Box>
          lant-based eating doesn't mean sacrificing flavor or satisfaction. Each recipe in this collection has been crafted to showcase the natural flavors of vegetables, fruits, grains, and legumes. From hearty burgers to comforting soups, these dishes prove that vegan food can be exciting, varied, and absolutely delicious.
        </Typography>

        <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "0.9rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify", mb: 3 }}>
          Whether you're a longtime vegan or just beginning to explore plant-based cooking, I hope these recipes inspire you to create meals that nourish both body and soul. Cooking is an act of love, and sharing good food with others is one of life's greatest pleasures.
        </Typography>

        {/* Food images */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Box component="img" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=150&fit=crop" alt="Food" sx={{ width: "48%", height: "150px", objectFit: "cover" }} />
          <Box component="img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop" alt="Food" sx={{ width: "48%", height: "150px", objectFit: "cover" }} />
        </Box>

        <Typography sx={{ fontFamily: "'Georgia', serif", fontSize: "0.9rem", color: "#4a4a4a", lineHeight: 1.8, textAlign: "justify" }}>
          Every recipe includes detailed nutritional information, preparation tips, and suggestions for variations. My goal is to make plant-based cooking accessible and enjoyable for everyone, regardless of experience level.
        </Typography>
      </Box>
    </A3CanvasLayout>
  );
};
