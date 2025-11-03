import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function CookingTeam() {
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

        {/* Large image placeholder */}
        <Box
          sx={{
            bgcolor: "#c0c0c0",
            width: "100%",
            height: "75%",
            mb: 3,
          }}
        />

        {/* Bottom section with title and quote */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* COOKING TOGETHER title */}
          <Box sx={{ flex: 0.4 }}>
            <Typography
              sx={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#000",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              COOKING
              <br />
              TOGET
              <br />
              HER
            </Typography>
          </Box>

          {/* Quote section */}
          <Box sx={{ flex: 0.6, pl: 4 }}>
            <Typography
              sx={{
                fontSize: "4rem",
                color: "#C85C5C",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: 700,
                lineHeight: 0.8,
                mb: 2,
              }}
            >
              "
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#000",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Quatemo voluptatem fugit
              <br />
              unti sitin omnit aspelit ul-
              <br />
              parup sit tatiume repraPa
              <br />
              autet quas asitatum earchillit
              <br />
              sed quatu
              <br />
              Am facimin ullias eate nisci-
              <br />
              derrum ium velest
            </Typography>
          </Box>
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

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            color: "#000",
            letterSpacing: "0.02em",
            mb: 3,
          }}
        >
          Cooking Team
        </Typography>

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
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit tatiume repraPa
            autet quas asitatum earchillit sed quatu
            <br />
            Am facimin ullias eate nisiciderrum ium velest et et eumquis magna sedictionerius et abo. Nam nis abo. Incto que dolore vendae cus est offic tendit fuga. cuptia
            quod quaeritatur aut eatianimenti reriand ipsapel
          </Typography>
        </Box>

        {/* Stats section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#000",
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              780+ Cooking Chef
            </Typography>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${95 - i * 10}%`,
                  bgcolor: "#5a5a5a",
                  mb: "5px",
                }}
              />
            ))}
            <Box sx={{ mt: 2 }}>
              {[...Array(2)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${85 - i * 20}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#000",
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              5 Years Experience
            </Typography>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${95 - i * 15}%`,
                  bgcolor: "#5a5a5a",
                  mb: "5px",
                }}
              />
            ))}
            <Box sx={{ mt: 2 }}>
              {[...Array(2)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: "8px",
                    width: `${75 - i * 25}%`,
                    bgcolor: "#5a5a5a",
                    mb: "5px",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Team members grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <Box key={i}>
              <Box
                sx={{
                  bgcolor: "#c0c0c0",
                  width: "100%",
                  aspectRatio: "3/4",
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#000",
                  fontWeight: 600,
                  borderBottom: "2px solid #000",
                  display: "inline-block",
                  pb: 0.3,
                }}
              >
                Robert William
              </Typography>
              <Box
                sx={{
                  height: "6px",
                  width: "60%",
                  bgcolor: "#C85C5C",
                  mt: 0.5,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </A3CanvasLayout>
  );
}
