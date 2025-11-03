import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page12_13_PancakesName = () => {
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
            p: 4,
            display: "flex",
            alignItems: "center",
            minHeight: "120px",
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
            pancakes Name
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
            These exceptional pancakes represent the perfect fusion of traditional breakfast comfort and modern plant-based innovation. Each bite delivers a symphony of flavors and textures that will transform your morning routine.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4d4d4d",
            }}
          >
            Whether you're serving them for a special brunch or a simple weekend breakfast, these pancakes are guaranteed to impress. The recipe is straightforward, requiring minimal preparation time while delivering maximum flavor.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4d4d4d",
            }}
          >
            Top with your favorite fruits, maple syrup, or nut butter for a complete breakfast experience. The possibilities for customization are endless, making this recipe a versatile addition to your cooking repertoire.
          </Typography>

          <Box
            sx={{
              bgcolor: "#5D9C59",
              p: 4,
              borderRadius: 2,
              mt: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ffffff",
                mb: 2,
              }}
            >
              Nutritional Info
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[
                { label: "Calories", value: "320 kcal" },
                { label: "Protein", value: "8g" },
                { label: "Carbs", value: "48g" },
                { label: "Fiber", value: "6g" },
                { label: "Fat", value: "10g" },
                { label: "Sugar", value: "12g" },
              ].map((item, index) => (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.85rem",
                      color: "#ffffff",
                      opacity: 0.9,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 5,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
          alt="Matcha pancake stack"
          sx={{
            width: "100%",
            height: "95%",
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
        />
      </Box>
    </A3CanvasLayout>
  );
};
