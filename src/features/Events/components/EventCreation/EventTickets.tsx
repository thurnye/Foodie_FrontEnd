import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { ITicketTier } from '../../types/event.types';

export interface TicketsStepRef {
  validate: () => { valid: boolean; error?: string };
}

interface Props {
  data: ITicketTier[];
  onChange: (updated: ITicketTier[]) => void;
  capacity: number | string;
}

const EventTickets = forwardRef<TicketsStepRef, Props>(
  ({ data, onChange, capacity }, ref) => {
    const [remainingCapacity, setRemainingCapacity] = useState<number>();
    const addTier = () => {
      onChange([
        ...data,
        {
          name: '',
          description: '',
          price: 0,
          quantity: 0,
          quantitySold: 0,
          salesStartDate: '',
          salesEndDate: '',
        },
      ]);
    };

    const removeTier = (index: number) => {
      if (data.length > 1) {
        onChange(data.filter((_, i) => i !== index));
      }
    };

    const updateTier = (
      index: number,
      field: keyof ITicketTier,
      value: any
    ) => {
      const updated = [...data];
      updated[index] = { ...updated[index], [field]: value };
      onChange(updated);
    };

    useImperativeHandle(ref, () => ({
      validate: () => {
        const hasInvalid = data.some(
          (t) =>
            !t.name.trim() ||
            t.quantity <= 0 ||
            !t.salesStartDate ||
            !t.salesEndDate
        );
        if (hasInvalid) {
          return {
            valid: false,
            error: 'Please complete all ticket tier information.',
          };
        }
        return { valid: true };
      },
    }));

    useEffect(() => {
      // get the remaining capacity based off the total of all tickets quantity
      const totalTicketQuantity = data.reduce(
        (sum, t) => sum + (Number(t.quantity) || 0),
        0
      );
      const numericCapacity =
        typeof capacity === 'string'
          ? parseInt(capacity, 10) || 0
          : Number(capacity || 0);
      setRemainingCapacity(Math.max(numericCapacity - totalTicketQuantity, 0));
      //   console.log('remainingCapacity::', remainingCapacity);
    }, [capacity, data]);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6'>Ticket Tiers</Typography>
          <Button
            startIcon={<Add />}
            onClick={addTier}
            variant='outlined'
            size='small'
          >
            Add Tier
          </Button>
        </Box>

        {data.map((tier, index) => (
          <Paper key={index} sx={{ p: 2 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
            >
              <Typography variant='subtitle1'>Tier {index + 1}</Typography>
              {data.length > 1 && (
                <IconButton
                  size='small'
                  onClick={() => removeTier(index)}
                  color='error'
                >
                  <Delete fontSize='small' />
                </IconButton>
              )}
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Tier Name'
                  value={tier.name}
                  onChange={(e) => updateTier(index, 'name', e.target.value)}
                  required
                  size='small'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type='number'
                  label='Price'
                  value={tier.price}
                  onChange={(e) =>
                    updateTier(index, 'price', parseFloat(e.target.value) || 0)
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>$</InputAdornment>
                    ),
                  }}
                  required
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Description'
                  value={tier.description}
                  onChange={(e) =>
                    updateTier(index, 'description', e.target.value)
                  }
                  multiline
                  rows={2}
                  size='small'
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  type='number'
                  label='Quantity'
                  value={tier.quantity}
                  onChange={(e) =>
                    updateTier(index, 'quantity', parseInt(e.target.value) || 0)
                  }
                  required
                  size='small'
                  inputProps={{
                    min: 1,
                    max: remainingCapacity,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  type='datetime-local'
                  label='Sales Start'
                  value={tier.salesStartDate}
                  onChange={(e) =>
                    updateTier(index, 'salesStartDate', e.target.value)
                  }
                  InputLabelProps={{ shrink: true }}
                  required
                  size='small'
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  type='datetime-local'
                  label='Sales End'
                  value={tier.salesEndDate}
                  onChange={(e) =>
                    updateTier(index, 'salesEndDate', e.target.value)
                  }
                  InputLabelProps={{ shrink: true }}
                  required
                  size='small'
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    );
  }
);

export default EventTickets;
