import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  InputAdornment,
  Grid,
  FormControlLabel,
  Switch,
} from "@mui/material";
import CalendarToday from "@mui/icons-material/CalendarToday";

export interface BasicInfo {
  title: string;
  description: string;
  category: string;
  tags: string[];
  startDate: string;
  endDate: string;
  capacity: number;
  isPublic: boolean;
  status: "draft" | "published";
}

interface Props {
  data: BasicInfo;
  onChange: (updated: BasicInfo) => void;
}

const EventBasicInfo: React.FC<Props> = ({ data, onChange }) => {
  const [tagInput, setTagInput] = React.useState("");

  const update = (field: keyof BasicInfo, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addTag = () => {
    if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
      update("tags", [...data.tags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    update("tags", data.tags.filter((t) => t !== tag));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        fullWidth
        label="Event Title"
        value={data.title}
        onChange={(e) => update("title", e.target.value)}
        required
      />

      <TextField
        fullWidth
        multiline
        minRows={4}
        label="Description"
        value={data.description}
        onChange={(e) => update("description", e.target.value)}
      />

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          value={data.category}
          onChange={(e) => update("category", e.target.value)}
          label="Category"
        >
          <MenuItem value="cooking-class">Cooking Class</MenuItem>
          <MenuItem value="food-festival">Food Festival</MenuItem>
          <MenuItem value="wine-tasting">Wine Tasting</MenuItem>
          <MenuItem value="restaurant-event">Restaurant Event</MenuItem>
          <MenuItem value="pop-up">Pop-up</MenuItem>
          <MenuItem value="networking">Networking</MenuItem>
          <MenuItem value="workshop">Workshop</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* TAGS */}
      <Box>
        <TextField
          fullWidth
          label="Tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTag()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={addTag}>Add</Button>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {data.tags.map((tag) => (
            <Chip key={tag} label={tag} onDelete={() => removeTag(tag)} />
          ))}
        </Box>
      </Box>

      {/* DATES */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="datetime-local"
            label="Start Date"
            value={data.startDate}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => update("startDate", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="datetime-local"
            label="End Date"
            value={data.endDate}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => update("endDate", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* CAPACITY */}
      <TextField
        type="number"
        fullWidth
        label="Capacity"
        value={data.capacity}
        onChange={(e) => update("capacity", parseInt(e.target.value) || 0)}
      />

      {/* PUBLIC + STATUS */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={data.isPublic}
              onChange={(e) => update("isPublic", e.target.checked)}
            />
          }
          label="Public Event"
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={data.status}
            onChange={(e) => update("status", e.target.value)}
            label="Status"
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="published">Published</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default EventBasicInfo;
