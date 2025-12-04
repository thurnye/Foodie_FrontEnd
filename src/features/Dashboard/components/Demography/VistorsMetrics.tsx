import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  Public as PublicIcon,
} from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { trafficSourceData } from '../../mock/demography.mock';

const VisitorsMetrics: React.FC = () => {
  return (
    <>
      <Grid item xs={12} md={4}>
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
              <PublicIcon sx={{ color: '#5e72e4' }} />
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Visitors by Source
              </Typography>
            </Box>

            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={trafficSourceData}
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
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <Box sx={{ mt: 2 }}>
              {trafficSourceData.map((source) => (
                <Box
                  key={source.name}
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
                        bgcolor: source.color,
                      }}
                    />
                    <Typography variant='body2'>{source.name}</Typography>
                  </Box>
                  <Typography variant='body2' fontWeight={600}>
                    {source.value}%
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

export default VisitorsMetrics;
