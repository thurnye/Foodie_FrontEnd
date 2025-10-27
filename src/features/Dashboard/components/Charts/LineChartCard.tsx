import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface LineChartCardProps {
  title: string;
  data: any[];
  xKey: string;
  yKey: string;
  timeframe?: 'daily' | 'weekly';
  onTimeframeChange?: (event: any, newValue: 'daily' | 'weekly') => void;
}

const LineChartCard: React.FC<LineChartCardProps> = ({
  title,
  data,
  xKey,
  yKey,
  timeframe,
  onTimeframeChange,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #eee',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>

          {timeframe && onTimeframeChange && (
            <ToggleButtonGroup
              value={timeframe}
              exclusive
              onChange={onTimeframeChange}
              size="small"
              sx={{
                '& .MuiToggleButton-root': {
                  textTransform: 'none',
                  fontSize: '0.875rem',
                },
              }}
            >
              <ToggleButton value="daily">Daily</ToggleButton>
              <ToggleButton value="weekly">Weekly</ToggleButton>
            </ToggleButtonGroup>
          )}
        </Box>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} stroke="#666" />
            <YAxis tick={{ fontSize: 12 }} stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #eee',
                borderRadius: 8,
              }}
            />
            <Line
              type="monotone"
              dataKey={yKey}
              stroke="#5e72e4"
              strokeWidth={3}
              dot={{ fill: '#5e72e4', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
