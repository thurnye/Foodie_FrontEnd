import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page16_17_SoupContinued = () => {
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
            fontFamily: "Georgia, serif",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          This hearty soup combines the richness of fresh vegetables with aromatic herbs to create a comforting dish perfect for any season. The carefully balanced flavors develop beautifully as the soup simmers, creating depth and complexity.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          Begin by sautéing the aromatics in a large pot until fragrant and translucent. This foundation builds the flavor profile that makes this soup truly exceptional. Add the vegetables in stages, allowing each to release its unique essence.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          Pour in the vegetable broth and bring to a gentle simmer. The key is patience - allowing the ingredients to meld together creates a harmonious blend that's both nourishing and satisfying.
        </Typography>

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=800"
          alt="Soup in bowl"
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: 2,
            mt: 2,
          }}
        />

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
            fontStyle: "italic",
          }}
        >
          Season with salt and pepper, garnish with fresh herbs, and serve hot with crusty bread for a complete meal.
        </Typography>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#2d2d2d",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 40,
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.8rem",
              fontWeight: 700,
              color: "#5D9C59",
              letterSpacing: "0.5em",
            }}
          >
            S o u p N a m e
          </Typography>
        </Box>

        <Box
          sx={{
            ml: 12,
            width: "calc(100% - 96px)",
            p: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800"
            alt="Soup pot"
            sx={{
              width: "100%",
              height: "90%",
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
