import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import { ICookbookAuthor } from '../../../CookBook/types/cookbook.types';

interface IIntroPageLayoutTwo {
  author: ICookbookAuthor;
}

export default function IntroPageLayoutTwo({ author }: IIntroPageLayoutTwo) {
  console.log('author in IntroPageLayoutTwo', author);
  return (
    <Box
      key='welcome'
      sx={{
        // border: '2px dotted green',
         width: 794, height: 1123 ,
        position: 'relative',
      }}
    >
       <Box
              sx={{
                width: "420mm",
                height: "297mm",
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: "0 0 25px rgba(0,0,0,0.15)",
                overflow: "hidden",
                display: "flex",
              }}
            >
              {/* Left page - Cookbook Template text */}
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  bgcolor: "#5C8D89",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "#fff",
                    mb: 4,
                    letterSpacing: "0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Cookbook
                  <br />
                  Template
                </Typography>
      
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  A cookbook or cookery book is a kitchen reference containing recipes.
                  Cookbooks may be general, or may specialize in a particular cuisine
                  or category of food.
                </Typography>
      
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Recipes in cookbooks are organized in various ways: by course (appetizer,
                  first course, main course, dessert), by main ingredient, by cooking
                  technique, alphabetically, by region or country, and so on.
                </Typography>
      
                <Typography
                  sx={{
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.8,
                  }}
                >
                  They may include illustrations of finished dishes and preparation
                  steps; discussions of cooking techniques, advice on kitchen equipment,
                  ingredients, and substitutions; historical and cultural notes; and so on.
                </Typography>
              </Box>
      
              {/* Right page - Large oatmeal/breakfast bowl image */}
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&h=1200&fit=crop"
                  alt="Breakfast bowl with oatmeal"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
    </Box>
  );
}
