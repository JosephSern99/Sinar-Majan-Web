declare module 'react-simple-maps' {
  import { ComponentType, CSSProperties, MouseEvent, ReactNode } from 'react'

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: Record<string, unknown>
    width?: number
    height?: number
    style?: CSSProperties
    children?: ReactNode
  }
  export const ComposableMap: ComponentType<ComposableMapProps>

  export interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: Geography[] }) => ReactNode
  }
  export const Geographies: ComponentType<GeographiesProps>

  export interface Geography {
    rsmKey: string
    [key: string]: unknown
  }

  export interface GeographyProps {
    geography: Geography
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: CSSProperties
      hover?: CSSProperties
      pressed?: CSSProperties
    }
  }
  export const Geography: ComponentType<GeographyProps>

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    onMouseEnter?: (e: MouseEvent<SVGGElement>) => void
    onMouseLeave?: (e: MouseEvent<SVGGElement>) => void
    style?: CSSProperties
  }
  export const Marker: ComponentType<MarkerProps>

  export interface LineProps {
    from: [number, number]
    to: [number, number]
    stroke?: string
    strokeWidth?: number
    strokeOpacity?: number
    strokeLinecap?: 'round' | 'butt' | 'square'
    style?: CSSProperties
  }
  export const Line: ComponentType<LineProps>
}
