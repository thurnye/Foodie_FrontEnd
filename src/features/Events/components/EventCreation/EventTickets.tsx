import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import { ITicketTier } from "../../types/event.types";

interface Props {
  data: ITicketTier[];
  onChange: (updated: ITicketTier[]) => void;
}

const EventTickets: React.FC<Props> = ({ data, onChange }) => {
  const addTier = () => {
    onChange([
      ...data,
      {
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        quantitySold: 0,
        salesStartDate: "",
        salesEndDate: "",
      },
    ]);
  };

  const removeTier = (index: number) => {
    if (data.length > 1) {
      onChange(data.filter((_, i) => i !== index));
    }
  };

  const updateTier = (i: number, field: keyof ITicketTier, value: any) => {
    const updated = [...data];
    updated[i] = { ...updated[i], [field]: value };
    onChange(updated);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Ticket Tiers</Typography>
        <Button startIcon={<Add />} onClick={addTier}>
          Add Tier
        </Button>
      </Box>

      {data.map((tier, index) => (
        <Paper key={index} sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1">Tier {index + 1}</Typography>
            {data.length > 1 && (
              <IconButton onClick={() => removeTier(index)} color="error">
                <Delete />
              </IconButton>
            )}
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tier Name"
                value={tier.name}
                onChange={(e) => updateTier(index, "name", e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                value={tier.price}
                onChange={(e) =>
                  updateTier(index, "price", parseFloat(e.target.value) || 0)
                }
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                minRows={2}
                value={tier.description}
                onChange={(e) => updateTier(index, "description", e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                value={tier.quantity}
                onChange={(e) =>
                  updateTier(index, "quantity", parseInt(e.target.value) || 0)
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="datetime-local"
                label="Sales Start"
                value={tier.salesStartDate}
                onChange={(e) => updateTier(index, "salesStartDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="datetime-local"
                label="Sales End"
                value={tier.salesEndDate}
                onChange={(e) => updateTier(index, "salesEndDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default EventTickets;
