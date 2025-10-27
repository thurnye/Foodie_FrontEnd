import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

interface BarChartCardProps {
  title: string;
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
}

const BarChartCard: React.FC<BarChartCardProps> = ({
  title,
  data,
  xKey,
  yKey,
  color = '#5e72e4',
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
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
          {title}
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey={xKey}
              tick={{ fontSize: 12 }}
              stroke="#666"
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #eee',
                borderRadius: 8,
              }}
              cursor={{ fill: 'rgba(94, 114, 228, 0.1)' }}
            />
            <Bar dataKey={yKey} fill={color} radius={[8, 8, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={index} fill={`rgba(94, 114, 228, ${1 - index * 0.15})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
