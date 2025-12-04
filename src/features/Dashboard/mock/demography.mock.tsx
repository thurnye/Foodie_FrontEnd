

// Mock data for devices
export const deviceData = [
  { name: 'Mobile', value: 60, color: '#5e72e4' },
  { name: 'Desktop', value: 35, color: '#2dce89' },
  { name: 'Tablet', value: 5, color: '#fb6340' },
];

// Mock data for traffic sources
export const trafficSourceData = [
  { name: 'Social', value: 45, color: '#5e72e4' },
  { name: 'Organic', value: 35, color: '#2dce89' },
  { name: 'Referral', value: 15, color: '#fb6340' },
  { name: 'Direct', value: 5, color: '#11cdef' },
];

// Mock geo-location data with ISO codes
export const geoData: Record<
  string,
  { name: string; visitors: number; percentage: number; growth: number }
> = {
  USA: { name: 'United States', visitors: 2847, percentage: 42, growth: 15.3 },
  GBR: { name: 'United Kingdom', visitors: 1523, percentage: 23, growth: 8.7 },
  CAN: { name: 'Canada', visitors: 986, percentage: 15, growth: 12.1 },
  DEU: { name: 'Germany', visitors: 754, percentage: 11, growth: 6.5 },
  FRA: { name: 'France', visitors: 432, percentage: 6, growth: -2.3 },
  AUS: { name: 'Australia', visitors: 321, percentage: 5, growth: 9.8 },
  JPN: { name: 'Japan', visitors: 289, percentage: 4, growth: 11.2 },
  IND: { name: 'India', visitors: 256, percentage: 4, growth: 24.5 },
  BRA: { name: 'Brazil', visitors: 198, percentage: 3, growth: 7.1 },
  ESP: { name: 'Spain', visitors: 167, percentage: 2, growth: 5.4 },
};

// Mock geo-location data with ISO codes
// The 'geoName' field matches the exact country name from world-atlas TopoJSON
export const geoLocationData: Record<
  string,
  {
    name: string;
    shortName: string;
    geoName: string; // Exact name from TopoJSON for matching
    visitors: number;
    percentage: number;
    growth: number;
  }
> = {
  USA: {
    name: 'United States',
    shortName: 'USA',
    geoName: 'United States of America',
    visitors: 2847,
    percentage: 42,
    growth: 15.3
  },
  GBR: {
    name: 'United Kingdom',
    shortName: 'UK',
    geoName: 'United Kingdom',
    visitors: 1523,
    percentage: 23,
    growth: 8.7
  },
  CAN: {
    name: 'Canada',
    shortName: 'CAN',
    geoName: 'Canada',
    visitors: 986,
    percentage: 15,
    growth: 12.1
  },
  DEU: {
    name: 'Germany',
    shortName: 'DEU',
    geoName: 'Germany',
    visitors: 754,
    percentage: 11,
    growth: 6.5
  },
  FRA: {
    name: 'France',
    shortName: 'FRA',
    geoName: 'France',
    visitors: 432,
    percentage: 6,
    growth: -2.3
  },
  AUS: {
    name: 'Australia',
    shortName: 'AUS',
    geoName: 'Australia',
    visitors: 321,
    percentage: 5,
    growth: 9.8
  },
  JPN: {
    name: 'Japan',
    shortName: 'JPN',
    geoName: 'Japan',
    visitors: 289,
    percentage: 4,
    growth: 11.2
  },
  IND: {
    name: 'India',
    shortName: 'IND',
    geoName: 'India',
    visitors: 256,
    percentage: 4,
    growth: 24.5
  },
  BRA: {
    name: 'Brazil',
    shortName: 'BRA',
    geoName: 'Brazil',
    visitors: 198,
    percentage: 3,
    growth: 7.1
  },
  ESP: {
    name: 'Spain',
    shortName: 'ESP',
    geoName: 'Spain',
    visitors: 167,
    percentage: 2,
    growth: 5.4
  },
};