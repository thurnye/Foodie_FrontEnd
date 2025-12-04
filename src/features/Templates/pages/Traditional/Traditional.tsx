// Traditional Template - Complete Book (9 Sections)
import React from "react";
import { Box } from "@mui/material";
import { TraditionalPage01_Cover } from "./Page01_Cover";
import { TraditionalPage02_03_TOCAbout } from "./Page02_03_TOCAbout";
import { TraditionalPage04_05_Recipe } from "./Page04_05_Recipe";
import { TraditionalPage06_07_TestesSpaghetti } from "./Page06_07_TestesSpaghetti";
import { TraditionalPage08_09_ChickenSoup } from "./Page08_09_ChickenSoup";
import { TraditionalPage10_11_TheBread } from "./Page10_11_TheBread";
import { TraditionalPage12_13_ThePizza } from "./Page12_13_ThePizza";
import { TraditionalPage14_15_FreshVegetable } from "./Page14_15_FreshVegetable";
import { TraditionalPage06_Contact } from "./Page06_Contact";

export default function Traditional() {
  const saladData = {
    title: "BEST SALAD",
    subtitle: "A fresh and healthy choice",
    mainImg: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop",
    smallImgs: [
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
    ],
    ingredients: [
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Olive oil",
      "Balsamic vinegar",
      "Salt and pepper",
    ],
    steps: [
      "Wash all vegetables thoroughly.",
      "Chop vegetables into bite-sized pieces.",
      "Combine in a large bowl.",
      "Drizzle with olive oil and vinegar.",
      "Season with salt and pepper.",
      "Toss gently and serve immediately.",
    ],
    pageNumber: "04",
  };

  return (
    <Box>
      {/* Section 1: Cover */}
      <TraditionalPage01_Cover />

      {/* Section 2: Table of Contents & About Us */}
      <TraditionalPage02_03_TOCAbout />

      {/* Section 3: Best Salad */}
      <TraditionalPage04_05_Recipe {...saladData} />

      {/* Section 4: Testes Spaghetti */}
      <TraditionalPage06_07_TestesSpaghetti />

      {/* Section 5: Chicken Soup */}
      <TraditionalPage08_09_ChickenSoup />

      {/* Section 6: The Bread */}
      <TraditionalPage10_11_TheBread />

      {/* Section 7: The Pizza */}
      <TraditionalPage12_13_ThePizza />

      {/* Section 8: Fresh Vegetable */}
      <TraditionalPage14_15_FreshVegetable />

      {/* Section 9: Contact Us */}
      <TraditionalPage06_Contact />
    </Box>
  );
}
