import React from 'react';
import Rustic from './Rustic/Rustic';
import Traditional from './Traditional/Traditional';
import Classic from './Classic/Classic';
import Minimalist from './Minimalist/Minimalist';
import Modern from './Modern/Modern';
import { useParams } from 'react-router-dom';
import Hot from './Hot/Hot';
import Vegan from './Vegan/Vegan';
import Caliente from './Caliente/Caliente';

export default function Template() {
  // get the id from the route params
  const { templateId } = useParams<{ templateId: string }>();
  console.log("TemplateID:::", templateId)

  const renderTemplate = () => {
    switch (templateId?.toLowerCase()) {
      case 'rustic':
        return <Rustic />;
      case 'traditional':
        return <Traditional />;
      case 'classic':
        return <Classic />;
      case 'minimalist':
        return <Minimalist />;
      case 'modern':
        return <Modern />;
      case 'vegan':
        return <Vegan />;
      case 'hot':
        return <Hot />;
      case 'caliente':
        return <Caliente />;
      default:
        return (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Template not found</h2>
            <p>The template <strong>{templateId}</strong> does not exist.</p>
          </div>
        );
    }
  };

  return <>{renderTemplate()}</>;
}
