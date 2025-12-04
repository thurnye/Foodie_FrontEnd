import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Chip } from '@mui/material';
import { geoLocationData } from '../../mock/demography.mock';

const TopCountries: React.FC = () => {
  
  const topCountries = Object.values(geoLocationData)
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 5);

  return (
    <>
      <Grid item xs={12} lg={4}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            height: '100%',
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
              Top Performing Countries
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {topCountries.map((country, index) => (
                <Box key={country.name}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor:
                          index === 0
                            ? '#5e72e4'
                            : index === 1
                            ? '#8b9aeb'
                            : '#b8c2f2',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 0.5,
                        }}
                      >
                        <Typography variant='body2' fontWeight={600}>
                          {country.name}
                        </Typography>
                        <Chip
                          label={`+${country.growth}%`}
                          size='small'
                          sx={{
                            height: 22,
                            bgcolor: country.growth > 0 ? '#e8f5e9' : '#ffebee',
                            color: country.growth > 0 ? '#2e7d32' : '#c62828',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant='caption' color='text.secondary'>
                          {country.visitors.toLocaleString()} visitors
                        </Typography>
                        <Typography variant='caption' fontWeight={600}>
                          {country.percentage}%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {index < topCountries.length - 1 && (
                    <Box
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        bgcolor: '#e3e3e3',
                        overflow: 'hidden',
                        mt: 1,
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: `${country.percentage}%`,
                          bgcolor:
                            index === 0
                              ? '#5e72e4'
                              : index === 1
                              ? '#8b9aeb'
                              : '#b8c2f2',
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TopCountries;
