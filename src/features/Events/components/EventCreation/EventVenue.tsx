import React from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";

export interface LocationInfo {
  type: "venue" | "online";
  venueName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  onlineUrl?: string;
}

interface Props {
  data: LocationInfo;
  onChange: (updated: LocationInfo) => void;
}

const EventVenue: React.FC<Props> = ({ data, onChange }) => {
  const update = (field: keyof LocationInfo, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Location Type</InputLabel>
        <Select
          value={data.type}
          onChange={(e) => update("type", e.target.value as "venue" | "online")}
          label="Location Type"
        >
          <MenuItem value="venue">Venue</MenuItem>
          <MenuItem value="online">Online</MenuItem>
        </Select>
      </FormControl>

      {data.type === "venue" ? (
        <>
          <TextField
            fullWidth
            label="Venue Name"
            value={data.venueName || ""}
            onChange={(e) => update("venueName", e.target.value)}
          />

          <TextField
            fullWidth
            label="Address"
            value={data.address || ""}
            onChange={(e) => update("address", e.target.value)}
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                value={data.city || ""}
                onChange={(e) => update("city", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                value={data.state || ""}
                onChange={(e) => update("state", e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                value={data.country || ""}
                onChange={(e) => update("country", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Postal Code"
                value={data.postalCode || ""}
                onChange={(e) => update("postalCode", e.target.value)}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <TextField
          fullWidth
          label="Online Event URL"
          value={data.onlineUrl || ""}
          onChange={(e) => update("onlineUrl", e.target.value)}
        />
      )}
    </Box>
  );
};

export default EventVenue;
