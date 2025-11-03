// Minimalist Template - Complete Book (9 Sections)
import React from "react";
import { Box } from "@mui/material";
import { MinimalistPage01_Cover } from "./Page01_Cover";
import { MinimalistPage02_03_ContentChef } from "./Page02_03_ContentChef";
import { MinimalistPage04_05_Recipe } from "./Page04_05_Recipe";
import { MinimalistPage06_07_CookedLamb } from "./Page06_07_CookedLamb";
import { MinimalistPage08_09_HowToCook } from "./Page08_09_HowToCook";
import { MinimalistPage10_11_MenuPackage } from "./Page10_11_MenuPackage";
import { MinimalistPage12_13_Oil } from "./Page12_13_Oil";
import { MinimalistPage14_15_MenuList } from "./Page14_15_MenuList";
import { MinimalistPage06_ThankYou } from "./Page06_ThankYou";

export default function Minimalist() {
  const pancakeData = {
    title: "Pancake with fruits",
    subtitle: "A delightful breakfast treat",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=1000&fit=crop",
    ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "2 tbsp sugar", "Berries", "Honey"],
    direction: "Mix flour, eggs, milk and sugar. Pour batter onto heated pan. Cook until bubbles form. Flip and cook until golden. Serve with fresh berries and honey.",
  };

  return (
    <Box>
      {/* Section 1: Cover */}
      <MinimalistPage01_Cover />

      {/* Section 2: Content & Meet the Chef */}
      <MinimalistPage02_03_ContentChef />

      {/* Section 3: Pancake Recipe */}
      <MinimalistPage04_05_Recipe {...pancakeData} />

      {/* Section 4: Cooked Lamb */}
      <MinimalistPage06_07_CookedLamb />

      {/* Section 5: How to Cook */}
      <MinimalistPage08_09_HowToCook />

      {/* Section 6: Menu Package */}
      <MinimalistPage10_11_MenuPackage />

      {/* Section 7: Oil Recipe */}
      <MinimalistPage12_13_Oil />

      {/* Section 8: Menu List */}
      <MinimalistPage14_15_MenuList />

      {/* Section 9: Thank You */}
      <MinimalistPage06_ThankYou />
    </Box>
  );
}
