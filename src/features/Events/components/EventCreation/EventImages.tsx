import React from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Chip,
  Typography,
  IconButton,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import { IEventImage } from "../../types/event.types";
import { BasicInfo } from "./EventBasicInfo";
import { LocationInfo } from "./EventVenue";
import { ITicketTier } from "../../types/event.types";

interface Props {
  basicInfo: BasicInfo;
  location: LocationInfo;
  tickets: ITicketTier[];
  images: IEventImage[];
  onImagesChange: (updated: IEventImage[]) => void;
}

const EventImages: React.FC<Props> = ({
  basicInfo,
  location,
  tickets,
  images,
  onImagesChange,
}) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [imageAlt, setImageAlt] = React.useState("");

  const addImage = () => {
    if (imageUrl.trim()) {
      onImagesChange([
        ...images,
        {
          url: imageUrl.trim(),
          alt: imageAlt.trim(),
          isCover: images.length === 0,
        },
      ]);
      setImageUrl("");
      setImageAlt("");
    }
  };

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const setCover = (index: number) => {
    onImagesChange(images.map((img, i) => ({ ...img, isCover: i === index })));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h6">Event Images</Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <TextField
          label="Alt"
          value={imageAlt}
          sx={{ maxWidth: 150 }}
          onChange={(e) => setImageAlt(e.target.value)}
        />
        <Button startIcon={<Add />} onClick={addImage} variant="contained">
          Add
        </Button>
      </Box>

      {images.map((img, index) => (
        <Paper key={index} sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography>{img.url}</Typography>
            {img.alt && (
              <Typography variant="caption" color="text.secondary">
                Alt: {img.alt}
              </Typography>
            )}
          </Box>

          {img.isCover ? (
            <Chip label="Cover" color="primary" />
          ) : (
            <Button onClick={() => setCover(index)}>Set as Cover</Button>
          )}

          <IconButton color="error" onClick={() => removeImage(index)}>
            <Delete />
          </IconButton>
        </Paper>
      ))}

      <Typography variant="h6">Event Summary</Typography>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2">Title</Typography>
        <Typography>{basicInfo.title}</Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Category
        </Typography>
        <Typography>{basicInfo.category}</Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Dates
        </Typography>
        <Typography>
          {basicInfo.startDate} → {basicInfo.endDate}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Location
        </Typography>
        <Typography>
          {location.type === "venue"
            ? `${location.venueName}, ${location.city}, ${location.country}`
            : "Online Event"}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Ticket Tiers
        </Typography>
        <Typography>{tickets.length} tier(s)</Typography>
      </Paper>
    </Box>
  );
};

export default EventImages;
