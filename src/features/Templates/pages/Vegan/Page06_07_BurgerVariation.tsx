import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page06_07_BurgerVariation = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#ffffff",
          p: 6,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Burger Name
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
            mb: 3,
          }}
        >
          Experience the ultimate plant-based burger creation. This innovative recipe combines fresh ingredients with bold flavors to create a satisfying meal that rivals any traditional burger. Perfect for lunch or dinner.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"
            alt="Burger ingredient 1"
            sx={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
            alt="Fresh vegetables"
            sx={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
            alt="Salad greens"
            sx={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400"
            alt="Avocado"
            sx={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800"
          alt="Vegan burger with fries"
          sx={{
            width: "100%",
            height: "65%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            bgcolor: "#5D9C59",
            height: "35%",
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#ffffff",
              mb: 1,
            }}
          >
            Ingredients
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "Black bean patty",
              "Whole wheat bun",
              "Fresh lettuce & tomatoes",
              "Avocado slices",
              "Vegan mayo & mustard",
              "Crispy sweet potato fries",
            ].map((ingredient, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  color: "#ffffff",
                  pl: 2,
                  position: "relative",
                  "&::before": {
                    content: '"•"',
                    position: "absolute",
                    left: 0,
                    color: "#ffffff",
                  },
                }}
              >
                {ingredient}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
