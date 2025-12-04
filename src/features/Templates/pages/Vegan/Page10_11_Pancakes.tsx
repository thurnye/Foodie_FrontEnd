import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page10_11_Pancakes = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "#5D9C59",
            p: 6,
            display: "flex",
            alignItems: "center",
            minHeight: "200px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "4rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Pancakes
          </Typography>
        </Box>

        <Box sx={{ p: 6, flexGrow: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4d4d4d",
            }}
          >
            Fluffy, delicious, and entirely plant-based. These pancakes are the perfect weekend breakfast treat that everyone will love. Made with simple ingredients and packed with flavor.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4d4d4d",
            }}
          >
            The secret to achieving the perfect texture lies in the balance of wet and dry ingredients, creating a light and airy pancake that's golden brown on the outside and tender on the inside.
          </Typography>

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800"
            alt="Matcha pancakes"
            sx={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: 2,
              mt: 2,
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800"
          alt="Gourmet food"
          sx={{
            width: "90%",
            height: "90%",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Box>
    </A3CanvasLayout>
  );
};
