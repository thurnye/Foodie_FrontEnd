import React from 'react';
import HealthyFood from '../../../public/images/adverts/healthyFood.jpeg';
import Breakfast from '../../../public/images/adverts/breakfast.jpeg';
import AdGallery from '../../../app/components/AdGallery';

const FoodAd: React.FC = () => {
  const ads = [
    {
      src: HealthyFood,
      alt: 'Healthy Food Advert',
      href: 'https://example.com/healthy-food',
    },
    {
      src: Breakfast,
      alt: 'Breakfast Advert',
      href: 'https://example.com/breakfast',
    },
  ];

  return <AdGallery ads={ads} direction="column" hoverScale={1.03} spacing={2} />;
};

export default FoodAd;
