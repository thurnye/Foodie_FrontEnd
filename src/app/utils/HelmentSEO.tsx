import React from 'react';
import { Helmet } from 'react-helmet-async';

// Define the expected props
interface HelmetSEOProps {
  title: string;
  description: string;
  thumbnail: string;
  name?: string;
  type?: string;
  url?: string;
}

// Functional component with explicit props typing
const HelmentSEO: React.FC<HelmetSEOProps> = ({
  title,
  description,
  thumbnail,
  name,
  type = 'website',
  url,
}) => (
  <div>
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Open Graph (Facebook) tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={thumbnail} />
      <meta property='og:description' content={description} />
      {url && <meta property='og:url' content={url} />}

      {/* Twitter tags */}
      {name && <meta name='twitter:creator' content={name} />}
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  </div>
);

export default HelmentSEO;
