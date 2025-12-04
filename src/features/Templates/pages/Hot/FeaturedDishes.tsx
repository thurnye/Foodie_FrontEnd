import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function FeaturedDishes() {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "#fff",
          p: "50px 60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top decorative line */}
        <Box
          sx={{
            position: "absolute",
            top: 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "3px",
            bgcolor: "#5a5a5a",
          }}
        />

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            color: "#000",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            mb: 3,
          }}
        >
          FEATURED
          <br />
          DISHES
        </Typography>

        {/* Grid of dishes - 2x2 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            mb: 3,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <Box key={i}>
              <Box
                sx={{
                  bgcolor: "#c0c0c0",
                  width: "100%",
                  aspectRatio: "4/3",
                  mb: 1.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#C85C5C",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  mb: 1,
                }}
              >
                FOOD NAMES
              </Typography>
              {[...Array(3)].map((_, j) => (
                <Box
                  key={j}
                  sx={{
                    height: "7px",
                    width: `${85 - j * 15}%`,
                    bgcolor: "#5a5a5a",
                    mb: "4px",
                  }}
                />
              ))}
              <Box sx={{ mt: 1.5 }}>
                {[...Array(2)].map((_, j) => (
                  <Box
                    key={j}
                    sx={{
                      height: "7px",
                      width: `${70 - j * 20}%`,
                      bgcolor: "#5a5a5a",
                      mb: "4px",
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom ingredients section */}
        <Box sx={{ mt: "auto" }}>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Baking powder
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Pure Water 5 Cup
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Vegetables
          </Typography>
        </Box>
      </Box>

      {/* RIGHT PAGE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "#fff",
          p: "50px 60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top decorative line */}
        <Box
          sx={{
            position: "absolute",
            top: 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "3px",
            bgcolor: "#5a5a5a",
          }}
        />

        {/* Description paragraph */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#C85C5C",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
            }}
          >
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit repraPa autet quas
            asitatum earchillit sed quatu facimin ullias eate nisiciderrum ium et et eumquis
            magna sedictionerius et abo. Nam nis abo. Incto
          </Typography>
        </Box>

        {/* Text lines */}
        <Box sx={{ mb: 3 }}>
          {[...Array(2)].map((_, i) => (
            <Box
              key={i}
              sx={{
                height: "8px",
                width: `${95 - i * 25}%`,
                bgcolor: "#5a5a5a",
                mb: "5px",
              }}
            />
          ))}
        </Box>

        {/* Grid of dishes - 2x2 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <Box key={i}>
              <Box
                sx={{
                  bgcolor: "#c0c0c0",
                  width: "100%",
                  aspectRatio: "4/3",
                  mb: 1.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#C85C5C",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  mb: 1,
                }}
              >
                FOOD NAMES
              </Typography>
              {[...Array(3)].map((_, j) => (
                <Box
                  key={j}
                  sx={{
                    height: "7px",
                    width: `${85 - j * 15}%`,
                    bgcolor: "#5a5a5a",
                    mb: "4px",
                  }}
                />
              ))}
              <Box sx={{ mt: 1.5 }}>
                {[...Array(2)].map((_, j) => (
                  <Box
                    key={j}
                    sx={{
                      height: "7px",
                      width: `${70 - j * 20}%`,
                      bgcolor: "#5a5a5a",
                      mb: "4px",
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom ingredients section */}
        <Box sx={{ mt: "auto" }}>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Baking powder
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Pure Water 5 Cup
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000",
              mb: 0.8,
            }}
          >
            Vegetables
          </Typography>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
}
