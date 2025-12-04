import { Box } from "@mui/material";
import { VeganPage01_Cover } from "./Page01_Cover";
import { VeganPage02_03_AboutMe } from "./Page02_03_AboutMe";
import { VeganPage04_05_Burgers } from "./Page04_05_Burgers";
import { Page06_07_BurgerVariation } from "./Page06_07_BurgerVariation";
import { Page08_09_Breakfast } from "./Page08_09_Breakfast";
import { Page10_11_Pancakes } from "./Page10_11_Pancakes";
import { Page12_13_PancakesName } from "./Page12_13_PancakesName";
import { Page14_15_Soup } from "./Page14_15_Soup";
import { Page16_17_SoupContinued } from "./Page16_17_SoupContinued";
import { Page18_19_SoupFinal } from "./Page18_19_SoupFinal";

export default function Vegan() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VeganPage01_Cover />
      <VeganPage02_03_AboutMe />
      <VeganPage04_05_Burgers />
      <Page06_07_BurgerVariation />
      <Page08_09_Breakfast />
      <Page10_11_Pancakes />
      <Page12_13_PancakesName />
      <Page14_15_Soup />
      <Page16_17_SoupContinued />
      <Page18_19_SoupFinal />
    </Box>
  );
}
