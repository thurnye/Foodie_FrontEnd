import React from 'react';
import { Box } from '@mui/material';
import { Page01_Cover } from './Page01_Cover';
import { Page02_03_WelcomeTOC } from './Page02_03_WelcomeTOC';
import { Page04_05_FriedRice } from './Page04_05_FriedRice';
import { Page06_07_Dessert } from './Page06_07_Dessert';
import { Page08_09_FruitSalad } from './Page08_09_FruitSalad';
import { Page10_11_Bread } from './Page10_11_Bread';
import { Page12_13_CrispyChicken } from './Page12_13_CrispyChicken';
import { Page14_15_Chaomin } from './Page14_15_Chaomin';
import { Page16_17_FruitCustard } from './Page16_17_FruitCustard';
import { Page18_19_WeeklyPlanner } from './Page18_19_WeeklyPlanner';
import { Page20_TheEnd } from './Page20_TheEnd';

export default function Rustic() {
  return (
    <Box>
      {/* Page 1: Cover */}
      <Page01_Cover />

      {/* Pages 2-3: Welcome & Table of Contents */}
      <Page02_03_WelcomeTOC />

      {/* Pages 4-5: Fried Rice Recipe */}
      <Page04_05_FriedRice />

      {/* Pages 6-7: Dessert Recipe */}
      <Page06_07_Dessert />

      {/* Pages 8-9: Fruit Salad Recipe */}
      <Page08_09_FruitSalad />

      {/* Pages 10-11: Bread Recipe */}
      <Page10_11_Bread />

      {/* Pages 12-13: Crispy Chicken Recipe */}
      <Page12_13_CrispyChicken />

      {/* Pages 14-15: Chaomin Recipe */}
      <Page14_15_Chaomin />

      {/* Pages 16-17: Fruit Custard Recipe */}
      <Page16_17_FruitCustard />

      {/* Pages 18-19: Weekly Planner */}
      <Page18_19_WeeklyPlanner />

      {/* Page 20: The End */}
      <Page20_TheEnd />
    </Box>
  );
}
