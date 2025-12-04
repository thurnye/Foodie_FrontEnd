import { Box, Typography } from "@mui/material";
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

export default function TastyAndSpicy() {
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

        {/* Title with underline */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "3.5rem",
              color: "#C85C5C",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            Testy and
          </Typography>
          <Typography
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "3.5rem",
              color: "#C85C5C",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: "3px",
                bgcolor: "#C85C5C",
              },
            }}
          >
            Spicy
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "3px",
              bgcolor: "#C85C5C",
              mt: 1,
            }}
          />
        </Box>

        {/* Description paragraphs */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#C85C5C",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Quatemo voluptatem fugit unti sitin omnit aspelit ulparup sit tatiume repraPa
            autet quas asitatum earchillit sed quatu
            <br />
            Am facimin ullias eate nisiciderrum ium velest et et eumquis magna sedictionerius et abo. Nam nis abo. Incto que dolore vendae cus est offic tendit fuga. cuptia
            quod quaeritatur aut eatianimenti reriand ipsapel
          </Typography>

          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#000",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.6,
              mb: 1,
            }}
          >
            Quatemo voluptatem fugit unti sitin
            omnit aspelit ulparup sit tatiume
            repraPa autet quas asitatum earchillit
            Am facimin ullias eate nisiciderru ium
            velest et et eumquis magna
          </Typography>
        </Box>

        {/* Text lines - two columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            mb: 3,
          }}
        >
          <Box>
            {[...Array(8)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${90 - i * 4}%`,
                  bgcolor: "#5a5a5a",
                  mb: "5px",
                }}
              />
            ))}
          </Box>
          <Box>
            {[...Array(10)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: "8px",
                  width: `${95 - i * 3}%`,
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
            height: "100%",
          }}
        />
      </Box>
    </A3CanvasLayout>
  );
}
