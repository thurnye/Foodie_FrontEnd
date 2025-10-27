import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { geoLocationData } from '../../mock/demography.mock';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const DemographyMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState('');

  // Helper: find country data by matching geoName from TopoJSON
  const getCountryData = (geo: any) => {
    const countryName = geo.properties?.name;
    if (!countryName) return null;

    // Find country by matching geoName field (case-insensitive)
    return (
      Object.values(geoLocationData).find(
        (country) => country.geoName.toLowerCase() === countryName.toLowerCase()
      ) || null
    );
  };

  const getFillColor = (geo: any) => {
    const countryData = getCountryData(geo);
    if (!countryData) return '#E3E3E3';

    const { percentage } = countryData;
    if (percentage >= 40) return '#5e72e4';
    if (percentage >= 20) return '#8b9aeb';
    if (percentage >= 10) return '#b8c2f2';
    if (percentage >= 5) return '#d4dbf7';
    return '#e8ecfc';
  };

  return (
    <>
      <Grid item xs={12} lg={8}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            overflow: 'visible',
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
              Global Visitor Distribution
            </Typography>

            {/* Map */}
            <Box
              sx={{
                position: 'relative',
                bgcolor: '#f8f9fa',
                borderRadius: 2,
                p: 2,
                minHeight: 400,
              }}
            >
              <ComposableMap
                projectionConfig={{ scale: 147 }}
                width={800}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              >
                <ZoomableGroup>
                  <Geographies geography={geoUrl}>
                    {({ geographies }: any) =>
                      geographies.map((geo: any) => {
                        const countryData = getCountryData(geo);
                        const isHovered = hoveredCountry === geo.id;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                              const countryName =
                                geo.properties?.name || 'Unknown';
                              setHoveredCountry(geo.id);

                              if (countryData) {
                                setTooltipContent(
                                  `${
                                    countryData.name
                                  }: ${countryData.visitors.toLocaleString()} visitors (${
                                    countryData.percentage
                                  }%)`
                                );
                              } else {
                                setTooltipContent(
                                  `${countryName}: 0 visitors (0%)`
                                );
                              }
                            }}
                            onMouseLeave={() => {
                              setHoveredCountry(null);
                              setTooltipContent('');
                            }}
                            style={{
                              default: {
                                fill: getFillColor(geo),
                                stroke: '#FFFFFF',
                                strokeWidth: 0.5,
                                outline: 'none',
                                transition: 'all 0.2s',
                              },
                              hover: {
                                fill: countryData ? '#3d4ed8' : '#E3E3E3',
                                stroke: '#FFFFFF',
                                strokeWidth: 1,
                                outline: 'none',
                                cursor: countryData ? 'pointer' : 'default',
                              },
                              pressed: {
                                fill: '#2d3eb8',
                                stroke: '#FFFFFF',
                                strokeWidth: 1,
                                outline: 'none',
                              },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>

              {/* Tooltip */}
              {tooltipContent && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    bgcolor: 'rgba(26, 26, 46, 0.95)',
                    color: 'white',
                    py: 1.5,
                    px: 2,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 1000,
                  }}
                >
                  <Typography variant='body2' fontWeight={500}>
                    {tooltipContent}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Legend */}
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Typography
                variant='caption'
                color='text.secondary'
                fontWeight={500}
              >
                Visitor Share:
              </Typography>
              {[
                { label: '40%+', color: '#5e72e4' },
                { label: '20–40%', color: '#8b9aeb' },
                { label: '10–20%', color: '#b8c2f2' },
                { label: '5–10%', color: '#d4dbf7' },
                { label: '<5%', color: '#e8ecfc' },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      bgcolor: item.color,
                      borderRadius: 0.5,
                      border: '1px solid #ddd',
                    }}
                  />
                  <Typography variant='caption' color='text.secondary'>
                    {item.label}
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

export default DemographyMap;
