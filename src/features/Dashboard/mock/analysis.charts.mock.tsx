// Mock data for daily/weekly recipe views
export const dailyViewsData = [
  { date: 'Mon', views: 240 },
  { date: 'Tue', views: 380 },
  { date: 'Wed', views: 290 },
  { date: 'Thu', views: 470 },
  { date: 'Fri', views: 580 },
  { date: 'Sat', views: 690 },
  { date: 'Sun', views: 520 },
];

export const weeklyViewsData = [
  { week: 'Week 1', views: 1850 },
  { week: 'Week 2', views: 2200 },
  { week: 'Week 3', views: 1980 },
  { week: 'Week 4', views: 2450 },
];

// Mock data for top 5 recipes by engagement
export const topRecipesData = [
  { name: 'Chocolate Cake', engagement: 485 },
  { name: 'Pasta Carbonara', engagement: 412 },
  { name: 'Caesar Salad', engagement: 385 },
  { name: 'Chicken Curry', engagement: 358 },
  { name: 'Vegan Pizza', engagement: 325 },
];

// Mock data for recipe categories
export const recipeCategoriesData = [
  { name: 'Desserts', value: 28, color: '#5e72e4' },
  { name: 'Vegan', value: 22, color: '#2dce89' },
  { name: 'Drinks', value: 18, color: '#fb6340' },
  { name: 'Main Course', value: 20, color: '#11cdef' },
  { name: 'Appetizers', value: 12, color: '#f5365c' },
];

// Mock data for recipe performance over time
export const performanceData = [
  { month: 'Jan', views: 1200, likes: 480, saves: 240 },
  { month: 'Feb', views: 1800, likes: 650, saves: 310 },
  { month: 'Mar', views: 1500, likes: 520, saves: 280 },
  { month: 'Apr', views: 2100, likes: 780, saves: 420 },
  { month: 'May', views: 2400, likes: 890, saves: 480 },
  { month: 'Jun', views: 2900, likes: 1050, saves: 580 },
];

// Mock data for individual recipe metrics
export const recipeMetrics = [
  {
    name: 'Chocolate Lava Cake',
    views: 2847,
    engagement: 92,
    trend: 15.3,
    category: 'Dessert',
  },
  {
    name: 'Thai Green Curry',
    views: 2134,
    engagement: 88,
    trend: 8.7,
    category: 'Main Course',
  },
  {
    name: 'Vegan Buddha Bowl',
    views: 1923,
    engagement: 85,
    trend: -2.4,
    category: 'Vegan',
  },
  {
    name: 'Homemade Pizza',
    views: 1756,
    engagement: 81,
    trend: 12.1,
    category: 'Main Course',
  },
  {
    name: 'Mango Smoothie',
    views: 1542,
    engagement: 78,
    trend: 6.5,
    category: 'Drinks',
  },
];
