// Modern Template - Complete Book
import React from "react";
import { Box } from "@mui/material";
import { ModernPage01_Cover } from "./Page01_Cover";
import { ModernPage02_03_TableOfContents } from "./Page02_03_TableOfContents";
import { ModernPage04_05_CookbookTemplate } from "./Page04_05_CookbookTemplate";
import { ModernPage06_07_Quote } from "./Page06_07_Quote";
import { ModernPage08_09_CookbookSidebar } from "./Page08_09_CookbookSidebar";
import { ModernPage10_11_FullPageRecipe } from "./Page10_11_FullPageRecipe";
import { ModernPage12_13_Healthy } from "./Page12_13_Healthy";
import { ModernPage14_15_CookbookFastfood } from "./Page14_15_CookbookFastfood";
import { ModernPage16_17_CookbookSidebarMenu } from "./Page16_17_CookbookSidebarMenu";
import { ModernPage18_19_BackCover } from "./Page18_19_BackCover";

export default function Modern() {
  return (
    <Box>
      <ModernPage01_Cover />
      <ModernPage02_03_TableOfContents />
      <ModernPage04_05_CookbookTemplate />
      <ModernPage06_07_Quote />
      <ModernPage08_09_CookbookSidebar />
      <ModernPage10_11_FullPageRecipe />
      <ModernPage12_13_Healthy />
      <ModernPage14_15_CookbookFastfood />
      <ModernPage16_17_CookbookSidebarMenu />
      <ModernPage18_19_BackCover />
    </Box>
  );
}
