// Classic Template - Complete Book (13 Sections)
import React from "react";
import { Box } from "@mui/material";
import { ClassicPage01_Cover } from "./Page01_Cover";
import { ClassicPage02_03_TOC } from "./Page02_03_TOC";
import { ClassicPage03_04_Intro } from "./Page03_04_Intro";
import { ClassicPage05_06_BreakfastOats } from "./Page05_06_Breakfast_Oats";
import { ClassicPage07_08_Pancakes } from "./Page07_08_Pancakes";
import { ClassicPage09_10_Waffles } from "./Page09_10_Waffles";
import { ClassicPage11_12_Eggs } from "./Page11_12_Eggs";
import { ClassicPage13_14_Granola } from "./Page13_14_Granola";
// import { ClassicPage15_16_Lunch_Nasi } from "./Page15_16_Lunch_Nasi";
import { ClassicPage17_18_Muesli } from "./Page17_18_Muesli";
import { ClassicPage19_20_Salad } from "./Page19_20_Salad";
import { ClassicPage21_22_Soup } from "./Page21_22_Soup";
import { ClassicPage23_24_Smoothie } from "./Page23_24_Smoothie";
import { ClassicPage25_26_BackCover } from "./Page25_26_BackCover";
import { ClassicPage15_16_LunchNasi } from "./Page15_16_Lunch_Nasi";

export default function Classic() {
  return (
    <Box>
      {/* Section 1: Cover */}
      <ClassicPage01_Cover />

      {/* Section 2: Table of Contents */}
      <ClassicPage02_03_TOC />

      {/* Section 3: Introduction/Sign Up */}
      <ClassicPage03_04_Intro />

      {/* Section 4: Breakfast - Oats */}
      <ClassicPage05_06_BreakfastOats />

      {/* Section 5: Pancakes */}
      <ClassicPage07_08_Pancakes />

      {/* Section 6: Waffles */}
      <ClassicPage09_10_Waffles />

      {/* Section 7: Eggs */}
      <ClassicPage11_12_Eggs />

      {/* Section 8: Granola */}
      <ClassicPage13_14_Granola />

      {/* Section 9: Lunch - Nasi */}
      <ClassicPage15_16_LunchNasi />

      {/* Section 10: Muesli */}
      <ClassicPage17_18_Muesli />

      {/* Section 11: Salad */}
      <ClassicPage19_20_Salad />

      {/* Section 12: Soup */}
      <ClassicPage21_22_Soup />

      {/* Section 13: Smoothie & Back Cover */}
      <ClassicPage23_24_Smoothie />
      <ClassicPage25_26_BackCover />
    </Box>
  );
}
