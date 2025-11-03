// Traditional Template - Page 6: Contact Us
import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  isbn?: string;
}

export const TraditionalPage06_Contact: React.FC<Props> = ({
  address = "123 Culinary Street\nFood City, FC 12345",
  phone = "+1 234 567 8900",
  email = "info@cookbook.com",
  website = "www.cookbook.com",
  isbn = "978-0-123456-78-9",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          width: "210mm",
          height: "297mm",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 0 25px rgba(0,0,0,0.15)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          p: 10,
        }}
      >
        {/* Main content - centered */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#2d2d2d",
              mb: 6,
            }}
          >
            CONTACT US
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.1rem",
              color: "#666",
              lineHeight: 2,
              textAlign: "center",
            }}
          >
            <strong>Address Information</strong>
            <br />
            {address.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <br />
            <strong>Phone:</strong> {phone}
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Website:</strong> {website}
          </Typography>
        </Box>

        {/* Barcode and ISBN - bottom */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: "150px",
              height: "50px",
              bgcolor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.8rem",
                color: "#666",
              }}
            >
              |||||||||||||||||||
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.8rem",
              color: "#999",
            }}
          >
            ISBN {isbn}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
