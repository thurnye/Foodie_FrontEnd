// Classic Template - Pages 2-3: Table of Contents
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface RecipeItem {
  id: string;
  name: string;
  img: string;
}

interface Props {
  recipes?: RecipeItem[];
}

export const ClassicPage02_03_TOC: React.FC<Props> = ({
  recipes = [
    {
      id: "01",
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop",
    },
    {
      id: "02",
      name: "Lunch",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
    },
    {
      id: "03",
      name: "Dinner",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
    },
    {
      id: "04",
      name: "Dessert",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop",
    },
  ],
}) => {
  return (
    <A3CanvasLayout>
      <Box sx={{ width: "100%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
            textAlign: "center",
          }}
        >
          TABLE OF CONTENTS
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={recipe.img}
                alt={recipe.name}
                sx={{ width: "100%", height: "250px", objectFit: "cover", mb: 2 }}
              />
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                  mb: 1,
                }}
              >
                {recipe.id}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.2rem",
                  color: "#666",
                }}
              >
                {recipe.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
