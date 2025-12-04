// Pages 16-17: Fruit Custard Recipe (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { AccessTime, Restaurant, LocalFireDepartment } from "@mui/icons-material";

export const Page16_17_FruitCustard: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Large Fruit Image + Ingredients */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
        <Box component="img" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=500&fit=crop" alt="Fruits" sx={{ width: "100%", height: "45%", objectFit: "cover" }} />

        <Box sx={{ p: 6, flex: 1 }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>
            Ingredients
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {["2 cups milk", "3 tablespoons sugar", "2 tablespoons custard powder", "1 cup mixed fruits", "½ cup strawberries", "½ cup grapes", "1 banana, sliced", "Chopped nuts for garnish"].map((ing, i) => (
              <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.2, lineHeight: 1.6, "&::marker": { color: "#8B7355" } }}>{ing}</Box>
            ))}
          </Box>

          {/* Stats */}
          <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTime sx={{ fontSize: "1rem", color: "#8B7355" }} />
              <Box>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", color: "#999", textTransform: "uppercase" }}>Time</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#2d2d2d" }}>20 min</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Restaurant sx={{ fontSize: "1rem", color: "#8B7355" }} />
              <Box>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", color: "#999", textTransform: "uppercase" }}>Serves</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#2d2d2d" }}>6</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalFireDepartment sx={{ fontSize: "1rem", color: "#8B7355" }} />
              <Box>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", color: "#999", textTransform: "uppercase" }}>Level</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#2d2d2d" }}>Easy</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* RIGHT PAGE: Title + Instructions */}
      <Box sx={{ width: "50%", position: "relative", bgcolor: "#ffffff", p: 6 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#2d2d2d", mb: 1 }}>
          FRUIT CUSTARD
        </Typography>
        <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#8B7355", mb: 5, fontStyle: "italic" }}>
          Creamy, fruity, and refreshing dessert
        </Typography>

        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d2d2d", mb: 2 }}>
          Instructions
        </Typography>
        <Box component="ol" sx={{ pl: 2.5 }}>
          {[
            "Heat milk in a saucepan over medium heat.",
            "Mix custard powder with a little cold milk to make a smooth paste.",
            "When milk is warm, add sugar and stir until dissolved.",
            "Pour the custard paste into the milk, stirring continuously.",
            "Cook for 3-4 minutes until the custard thickens.",
            "Remove from heat and let it cool completely.",
            "Chop all fruits into bite-sized pieces.",
            "Once custard is chilled, fold in the fruits.",
            "Refrigerate for 1-2 hours before serving.",
            "Garnish with chopped nuts and serve cold."
          ].map((step, i) => (
            <Box component="li" key={i} sx={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#4a4a4a", mb: 1.5, lineHeight: 1.6, "&::marker": { color: "#8B7355", fontWeight: 700 } }}>
              {step}
            </Box>
          ))}
        </Box>

        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, border: "2px solid #8B7355", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ width: 8, height: 8, bgcolor: "#8B7355", borderRadius: "50%" }} />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
