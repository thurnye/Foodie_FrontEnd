import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { Devices } from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { deviceData } from '../../mock/demography.mock';

const DeviceMetrics: React.FC = () => {
  return (
    <>
      {/* Devices Used */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            height: '100%',
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Devices sx={{ color: '#2dce89' }} />
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Devices Used
              </Typography>
            </Box>

            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  label={({ name, percent }: any) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill='#8884d8'
                  dataKey='value'
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <Box sx={{ mt: 2 }}>
              {deviceData.map((device) => (
                <Box
                  key={device.name}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: device.color,
                      }}
                    />
                    <Typography variant='body2'>{device.name}</Typography>
                  </Box>
                  <Typography variant='body2' fontWeight={600}>
                    {device.value}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default DeviceMetrics;
