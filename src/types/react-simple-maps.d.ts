declare module 'react-simple-maps' {
  import { ComponentType } from 'react';

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number;
      rotation?: number[];
      center?: number[];
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (data: { geographies: any[] }) => React.ReactNode;
  }

  export interface GeographyProps {
    geography: any;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface ZoomableGroupProps {
    zoom?: number;
    center?: number[];
    onMoveStart?: () => void;
    onMoveEnd?: () => void;
    children?: React.ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
}
