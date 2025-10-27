import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
  Grid,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import { recipeMetrics } from '../../mock/analysis.charts.mock';

const TopPerformingRecipeTable: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #eee',
        }}
      >
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
            Top Performing Recipes
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Recipe Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align='right'>
                    Views
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align='center'>
                    Engagement
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align='right'>
                    Trend
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipeMetrics.map((recipe, index) => (
                  <TableRow
                    key={recipe.name}
                    sx={{
                      '&:hover': {
                        bgcolor: '#f8f9fa',
                      },
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Box
                          sx={{
                            minWidth: 28,
                            height: 28,
                            borderRadius: '50%',
                            bgcolor: index === 0 ? '#5e72e4' : '#f8f9fa',
                            color: index === 0 ? 'white' : 'text.primary',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography variant='body2' fontWeight={500}>
                          {recipe.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={recipe.category} size='small' />
                    </TableCell>
                    <TableCell align='right'>
                      <Typography variant='body2' fontWeight={600}>
                        {recipe.views.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Box sx={{ width: '100%' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 0.5,
                          }}
                        >
                          <Typography variant='caption' color='text.secondary'>
                            {recipe.engagement}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant='determinate'
                          value={recipe.engagement}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: '#e3e3e3',
                            '& .MuiLinearProgress-bar': {
                              bgcolor:
                                recipe.engagement >= 90
                                  ? '#2dce89'
                                  : recipe.engagement >= 80
                                  ? '#5e72e4'
                                  : '#fb6340',
                            },
                          }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <Chip
                        icon={
                          recipe.trend > 0 ? (
                            <TrendingUpIcon sx={{ fontSize: 16 }} />
                          ) : (
                            <TrendingDownIcon sx={{ fontSize: 16 }} />
                          )
                        }
                        label={`${recipe.trend > 0 ? '+' : ''}${recipe.trend}%`}
                        size='small'
                        sx={{
                          bgcolor: recipe.trend > 0 ? '#e8f5e9' : '#ffebee',
                          color: recipe.trend > 0 ? '#2e7d32' : '#c62828',
                          fontWeight: 600,
                          '& .MuiChip-icon': {
                            color: 'inherit',
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TopPerformingRecipeTable;
