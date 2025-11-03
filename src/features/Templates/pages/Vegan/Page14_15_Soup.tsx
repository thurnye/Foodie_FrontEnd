import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export const Page14_15_Soup = () => {
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
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          Soup
        </Typography>

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800"
          alt="Soup bowl 1"
          sx={{
            width: "100%",
            height: "35%",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800"
          alt="Soup bowl 2"
          sx={{
            width: "100%",
            height: "35%",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200"
            alt="Tomato"
            sx={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200"
            alt="Vegetables"
            sx={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200"
            alt="Carrot"
            sx={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#5D9C59",
          p: 6,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "#ffffff",
            mb: 2,
          }}
        >
          Soup Name
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#ffffff",
                mb: 1,
              }}
            >
              Preparation Time
            </Typography>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                color: "#ffffff",
                opacity: 0.95,
              }}
            >
              15 minutes prep | 35 minutes cook | Serves 6
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#ffffff",
                mb: 1,
              }}
            >
              Difficulty
            </Typography>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                color: "#ffffff",
                opacity: 0.95,
              }}
            >
              Easy to Moderate
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#ffffff",
                mb: 2,
              }}
            >
              Ingredients
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                "2 cups diced tomatoes",
                "1 cup vegetable broth",
                "3 cloves garlic, minced",
                "1 onion, chopped",
                "2 carrots, diced",
                "2 celery stalks, chopped",
                "1 cup white beans",
                "Fresh basil leaves",
                "Olive oil",
                "Salt and pepper to taste",
              ].map((ingredient, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1rem",
                    color: "#ffffff",
                    pl: 3,
                    position: "relative",
                    "&::before": {
                      content: '"●"',
                      position: "absolute",
                      left: 0,
                      color: "#ffffff",
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  {ingredient}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
