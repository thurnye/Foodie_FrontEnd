// Pages 2-3: Welcome/About + Table of Contents (A3 Double Spread)
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface ContentItem {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const contents: ContentItem[] = [
  {
    id: "01",
    title: "Fried Rice",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
  },
  {
    id: "02",
    title: "Main Dish",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: "03",
    title: "Dessert",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
  },
  {
    id: "04",
    title: "Soup",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },
  {
    id: "05",
    title: "Salad",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
  },
  {
    id: "06",
    title: "Breakfast",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
  },
  {
    id: "07",
    title: "Bread",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  },
];

export const Page02_03_WelcomeTOC: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* LEFT PAGE: Welcome/About */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top small images grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1.5,
            p: 4,
            pb: 3,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop"
            alt="Soup"
            sx={{
              width: "100%",
              height: "120px",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=300&h=200&fit=crop"
            alt="Strawberries"
            sx={{
              width: "100%",
              height: "120px",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Welcome section with decorative border */}
        <Box
          sx={{
            mx: 4,
            mb: 3,
            p: 4,
            border: "2px solid #8B7355",
            borderRadius: 1,
            bgcolor: "#FAFAF8",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#2d2d2d",
              mb: 2,
              textAlign: "center",
            }}
          >
            WELCOME
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#4a4a4a",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Typography>
        </Box>

        {/* Bottom large image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
          alt="Pizza"
          sx={{
            width: "calc(100% - 64px)",
            height: "220px",
            objectFit: "cover",
            mx: 4,
            mb: 4,
          }}
        />

        {/* Decorative circle at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 40,
            border: "2px solid #8B7355",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#8B7355",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      {/* RIGHT PAGE: Table of Contents */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Left gray stripe */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "18%",
            height: "100%",
            bgcolor: "#f3f3f3",
            zIndex: 0,
          }}
        />

        {/* Right images column */}
        <Box
          sx={{
            position: "absolute",
            top: 110,
            right: 30,
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 0,
          }}
        >
          {[0, 1, 2].map((idx) => (
            <Box
              key={idx}
              component="img"
              src={contents[idx].img}
              alt={contents[idx].title}
              sx={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            />
          ))}
        </Box>

        {/* Content text */}
        <Box sx={{ position: "relative", zIndex: 1, p: 6, pr: "35%" }}>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "3rem",
              mb: 4,
              color: "#2d2d2d",
              letterSpacing: "0.03em",
            }}
          >
            CONTENT
          </Typography>

          {contents.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                mb: 2.5,
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ width: "15%", flexShrink: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    color: "#2d2d2d",
                  }}
                >
                  {item.id}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "#2d2d2d",
                    mb: 0.3,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Decorative circle at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 40,
            border: "2px solid #8B7355",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#8B7355",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
