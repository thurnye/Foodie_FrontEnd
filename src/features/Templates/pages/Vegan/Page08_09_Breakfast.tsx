import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page08_09_Breakfast = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#ffffff",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: "#5D9C59",
              letterSpacing: "0.1em",
            }}
          >
            BREAKFAST
          </Typography>
        </Box>

        <Box
          sx={{
            ml: 10,
            width: "calc(100% - 80px)",
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800"
            alt="Breakfast bowl"
            sx={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              mt: 2,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400"
              alt="Breakfast item 1"
              sx={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
              alt="Breakfast item 2"
              sx={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
              alt="Breakfast item 3"
              sx={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Right Page */}
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
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Morning Energy Bowl
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#4d4d4d",
            mb: 2,
          }}
        >
          Start your day with this nutrient-packed breakfast bowl that combines the goodness of fresh fruits, wholesome grains, and plant-based proteins. This colorful creation is designed to fuel your morning with sustained energy and essential vitamins.
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
          Each ingredient is carefully selected to provide a balance of nutrients while delivering exceptional taste. The combination of textures and flavors creates a truly satisfying breakfast experience.
        </Typography>

        <Box
          sx={{
            bgcolor: "#f8f8f8",
            p: 3,
            borderRadius: 2,
            borderLeft: "4px solid #5D9C59",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#5D9C59",
              mb: 2,
            }}
          >
            Ingredients
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "Acai berry base",
              "Fresh strawberries & blueberries",
              "Sliced banana",
              "Granola clusters",
              "Chia seeds",
              "Coconut flakes",
              "Almond butter drizzle",
            ].map((ingredient, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  color: "#4d4d4d",
                }}
              >
                • {ingredient}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              color: "#5D9C59",
              fontWeight: 600,
            }}
          >
            Prep Time: 10 minutes | Serves: 2
          </Typography>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
