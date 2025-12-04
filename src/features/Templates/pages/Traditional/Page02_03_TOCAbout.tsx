// Traditional Template - Pages 2-3: Table of Contents & About Us
import React from "react";
import { Box, Typography } from "@mui/material";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";

interface ContentItem {
  id: string;
  name: string;
  page: string;
}

interface Props {
  contentItems?: ContentItem[];
  chefName?: string;
  chefImage?: string;
  chefBio?: string;
}

export const TraditionalPage02_03_TOCAbout: React.FC<Props> = ({
  contentItems = [
    { id: "01", name: "Best Salad", page: "04" },
    { id: "02", name: "Testes Spaghetti", page: "08" },
    { id: "03", name: "The Pizza", page: "12" },
    { id: "04", name: "Chicken Soup", page: "16" },
    { id: "05", name: "The Bread", page: "20" },
    { id: "06", name: "Fresh Vegetable", page: "24" },
  ],
  chefName = "Sophie Trahan",
  chefImage = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=500&fit=crop",
  chefBio = "With over 20 years of culinary experience, Sophie brings authentic traditional recipes to your kitchen. Her passion for cooking started in her grandmother's kitchen and has evolved into a lifetime dedication to preserving culinary heritage.",
}) => {
  return (
    <A3CanvasLayout>
      {/* Left page - Table of Contents */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 6,
          }}
        >
          TABLE OF CONTENTS
        </Typography>

        {contentItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              pb: 2,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Times New Roman', serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#2d2d2d",
                width: "60px",
              }}
            >
              {item.id}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Times New Roman', serif",
                fontSize: "1.1rem",
                color: "#666",
                flex: 1,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Times New Roman', serif",
                fontSize: "1.1rem",
                color: "#999",
              }}
            >
              {item.page}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right page - About Us */}
      <Box sx={{ width: "50%", p: 8, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 4,
          }}
        >
          ABOUT US
        </Typography>

        <Box
          component="img"
          src={chefImage}
          alt={chefName}
          sx={{ width: "250px", height: "300px", objectFit: "cover", mb: 4 }}
        />

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#2d2d2d",
            mb: 2,
          }}
        >
          {chefName}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          {chefBio}
        </Typography>
      </Box>
    </A3CanvasLayout>
  );
};
