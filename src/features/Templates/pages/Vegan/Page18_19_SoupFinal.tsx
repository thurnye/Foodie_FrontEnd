import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page18_19_SoupFinal = () => {
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
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          The beauty of this recipe lies in its versatility. Feel free to substitute vegetables based on seasonal availability or personal preference. Root vegetables add earthiness, while leafy greens contribute freshness and nutritional value.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          For a creamier texture, blend a portion of the soup and stir it back into the pot. This technique creates body without the need for dairy, maintaining the soup's vegan integrity while enhancing its luxurious mouthfeel.
        </Typography>

        <Box
          sx={{
            bgcolor: "#5D9C59",
            p: 4,
            borderRadius: 2,
            my: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#ffffff",
              mb: 2,
            }}
          >
            Key Ingredients
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              "Fresh organic vegetables",
              "Quality vegetable broth",
              "Extra virgin olive oil",
              "Aromatic herbs and spices",
              "Sea salt and black pepper",
            ].map((ingredient, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  color: "#ffffff",
                  pl: 3,
                  position: "relative",
                  "&::before": {
                    content: '"✓"',
                    position: "absolute",
                    left: 0,
                    color: "#ffffff",
                    fontWeight: 700,
                  },
                }}
              >
                {ingredient}
              </Typography>
            ))}
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
          }}
        >
          This soup stores beautifully in the refrigerator for up to five days and freezes well for future meals. The flavors actually deepen over time, making it an ideal candidate for batch cooking.
        </Typography>
      </Box>

      {/* Right Page */}
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
            p: 4,
            display: "flex",
            alignItems: "center",
            minHeight: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Soup Name
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            p: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1569058242252-92a2c29f8255?w=800"
            alt="Final soup presentation"
            sx={{
              width: "100%",
              height: "60%",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                pb: 2,
                borderBottom: "2px solid #5D9C59",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#5D9C59",
                }}
              >
                Chef's Tip:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  color: "#4d4d4d",
                }}
              >
                Add a splash of lemon juice before serving to brighten flavors
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.85rem",
                    color: "#5D9C59",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  CALORIES
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#2d2d2d",
                  }}
                >
                  180
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.85rem",
                    color: "#5D9C59",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  PROTEIN
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#2d2d2d",
                  }}
                >
                  7g
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
