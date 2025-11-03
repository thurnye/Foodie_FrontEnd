import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function WelcomeAndHistory() {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "#C85C5C",
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

        {/* Top text paragraph */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#fff",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Quatemo voluptatem fugit unti sitin omnit as-
            <br />
            pelit ulparup sit tatiume repraPa
            <br />
            autet quas asitatum earchillit sed
            <br />
            quatu
          </Typography>

          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              sx={{
                height: "8px",
                width: `${85 - i * 3}%`,
                bgcolor: "rgba(90,90,90,0.6)",
                mb: "5px",
              }}
            />
          ))}
        </Box>

        {/* Large gray image box */}
        <Box
          sx={{
            bgcolor: "#c0c0c0",
            width: "100%",
            height: "250px",
            mb: 4,
          }}
        />

        {/* More text lines */}
        <Box sx={{ mb: "auto" }}>
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                height: "8px",
                width: `${80 - i * 6}%`,
                bgcolor: "rgba(90,90,90,0.6)",
                mb: "5px",
              }}
            />
          ))}
        </Box>

        {/* Decorative line above WELCOME */}
        <Box
          sx={{
            width: "80px",
            height: "3px",
            bgcolor: "rgba(255,255,255,0.5)",
            mb: 3,
            mt: 4,
          }}
        />

        {/* "WELCOME" title */}
        <Typography
          sx={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            color: "#fff",
            letterSpacing: "0.02em",
          }}
        >
          WELCOME
        </Typography>

        {/* Chat icon placeholder */}
        <Box
          sx={{
            position: "absolute",
            bottom: 50,
            left: 60,
            width: 28,
            height: 28,
            border: "2px solid #fff",
            borderRadius: "6px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 0.5,
          }}
        >
          <Box
            sx={{
              width: "60%",
              height: "3px",
              bgcolor: "#fff",
              borderRadius: "1px",
            }}
          />
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

        {/* Top section: Table of contents */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {/* Left column - TOC */}
          <Box sx={{ flex: 1, mr: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#000",
                }}
              >
                Cover Page Design
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#000",
                  fontWeight: 600,
                }}
              >
                02
              </Typography>
            </Box>
            {[
              "50+ Original Recipes",
              "Step By Step",
              "Ingredient Of Food",
              "Restaurant Reciepes",
              "Dinner Recipes",
              "Cover Page Design",
              "Others Food",
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#000",
                  }}
                >
                  {item}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#000",
                    fontWeight: 600,
                  }}
                >
                  02
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right column - Small paragraph */}
          <Box sx={{ width: "35%" }}>
            <Typography
              sx={{
                fontSize: "0.65rem",
                color: "#000",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Quatemo voluptatem fugit unti sitin omnit as-pelit ulparup sit tatiume repraPa autet quas asitatum earchillit sed quatu Am facimin ullias eate nisiciderrum ium velest et et eumquis
            </Typography>
          </Box>
        </Box>

        {/* Middle: two gray image boxes */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            mb: 4,
          }}
        >
          <Box sx={{ bgcolor: "#c0c0c0", height: "200px" }} />
          <Box sx={{ bgcolor: "#c0c0c0", height: "140px" }} />
        </Box>

        {/* Bottom red HISTORY section */}
        <Box
          sx={{
            bgcolor: "#C85C5C",
            color: "#fff",
            p: "40px 35px",
            mt: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "3.5rem",
              mb: 3,
              letterSpacing: "0.02em",
            }}
          >
            HISTORY
          </Typography>

          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                height: "8px",
                width: `${90 - i * 6}%`,
                bgcolor: "rgba(90,90,90,0.6)",
                mb: "5px",
              }}
            />
          ))}

          <Box
            sx={{
              width: "80px",
              height: "3px",
              bgcolor: "rgba(255,255,255,0.5)",
              mt: 3,
            }}
          />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
}
