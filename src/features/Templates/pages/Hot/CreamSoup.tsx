import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function CreamSoup() {
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
          CREAM
          <br />
          SOUP
        </Typography>

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
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit tatiume repraPa
            autet quas asitatum earchillit sed quatu
            <br />
            Am facimin ullias eate nisiciderrum ium velest et et eumquis magna sedictionereius et abo. Nam nis abo. Incto que dolore vendae cus est
          </Typography>
        </Box>

        {/* DIRECTIONS section */}
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

          <Box sx={{ mt: 2 }}>
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${95 - i * 7}%`,
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
                  width: `${88 - i * 9}%`,
                  bgcolor: "#5a5a5a",
                  mb: "5px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* RIGHT PAGE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "#fff",
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
            zIndex: 1,
          }}
        />

        {/* Top red section with images */}
        <Box
          sx={{
            bgcolor: "#C85C5C",
            height: "55%",
            p: "50px 40px",
            display: "flex",
            gap: 2,
          }}
        >
          {/* Left image */}
          <Box
            sx={{
              bgcolor: "#c0c0c0",
              flex: 1,
            }}
          />
          {/* Right image - smaller */}
          <Box
            sx={{
              bgcolor: "#c0c0c0",
              width: "45%",
            }}
          />
        </Box>

        {/* Bottom white section */}
        <Box
          sx={{
            bgcolor: "#fff",
            flex: 1,
            p: "40px 60px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Description text */}
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#C85C5C",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit tatiume
            repraPa autet quas asitatum earchillit sed quatu
            <br />
            Am facimin ullias eate nisiciderrum ium velest et et eumquis magna sedictionereius et abo. Nam nis abo. Incto
          </Typography>

          {/* Bottom section with image and ingredients */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              flex: 1,
            }}
          >
            {/* Large bottom image */}
            <Box
              sx={{
                bgcolor: "#c0c0c0",
              }}
            />

            {/* INGREDIENTS section */}
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
            </Box>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
}
