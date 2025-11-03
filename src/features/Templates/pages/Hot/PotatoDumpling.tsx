import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function PotatoDumpling() {
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
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#C85C5C",
              fontWeight: 600,
              mb: 2,
            }}
          >
            02
          </Typography>
          <Typography
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "3rem",
              color: "#000",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            PHOTATO
            <br />
            DUMPLING
          </Typography>
        </Box>

        {/* Description paragraph */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#C85C5C",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
            }}
          >
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit
            tatiume repraPa autet quas asitatum earchillit sed quatu
            <br />
            Am facimin ullias eate nisiciderrum ium velest et et eumquis
            magna sedictionerius et abo. Nam nis abo. Incto que dolore
            vendae cus est offic tendit fuga. cuptia
          </Typography>
        </Box>

        {/* Left side image */}
        <Box
          sx={{
            bgcolor: "#c0c0c0",
            width: "100%",
            flex: 1,
          }}
        />
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

        {/* Top large image */}
        <Box
          sx={{
            bgcolor: "#c0c0c0",
            width: "100%",
            height: "45%",
            mb: 3,
          }}
        />

        {/* Bottom section with directions and ingredients */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            flex: 1,
          }}
        >
          {/* DIRECTIONS column */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#C85C5C",
                fontWeight: 600,
                letterSpacing: "0.05em",
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <span>→</span> DIRECTIONS
            </Typography>

            {[...Array(7)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${95 - i * 5}%`,
                  bgcolor: "#5a5a5a",
                  mb: "5px",
                }}
              />
            ))}

            <Box sx={{ mt: 2 }}>
              {[...Array(6)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${90 - i * 6}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>

            <Box sx={{ mt: 2 }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${85 - i * 8}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* INGREDIENTS column */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#C85C5C",
                fontWeight: 600,
                letterSpacing: "0.05em",
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <span>→</span> INGREDIENTS
            </Typography>

            {[
              "01- Baking powder",
              "02- Pure Water 5 Cup",
              "03- Vegetables",
              "04- Beans (black, kidney, chickpeas)",
              "05- Milk (cow, almond, oat, soy)",
              "06- Chili powder",
              "07- 2 Letter Oil",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: "0.7rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#000",
                  mb: 0.8,
                }}
              >
                {item}
              </Typography>
            ))}

            <Box sx={{ mt: 2 }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${90 - i * 10}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>

            <Box sx={{ mt: 2 }}>
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${85 - i * 12}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
}
