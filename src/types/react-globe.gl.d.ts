declare module 'react-globe.gl' {
  import { Component } from 'react'

  interface GlobeProps {
    ref?: React.Ref<unknown>
    width?: number
    height?: number
    backgroundColor?: string
    globeImageUrl?: string
    bumpImageUrl?: string
    backgroundImageUrl?: string
    atmosphereColor?: string
    atmosphereAltitude?: number
    showAtmosphere?: boolean
    showGraticules?: boolean

    pointsData?: object[]
    pointLat?: string | ((d: object) => number)
    pointLng?: string | ((d: object) => number)
    pointColor?: string | ((d: object) => string)
    pointAltitude?: string | number | ((d: object) => number)
    pointRadius?: string | number | ((d: object) => number)
    pointResolution?: number
    pointsMerge?: boolean
    pointLabel?: string | ((d: object) => string)

    ringsData?: object[]
    ringLat?: string | ((d: object) => number)
    ringLng?: string | ((d: object) => number)
    ringColor?: string | ((d: object) => string | string[] | ((t: number) => string))
    ringMaxRadius?: string | number | ((d: object) => number)
    ringPropagationSpeed?: string | number | ((d: object) => number)
    ringRepeatPeriod?: string | number | ((d: object) => number)
    ringAltitude?: string | number | ((d: object) => number)

    arcsData?: object[]
    arcStartLat?: string | ((d: object) => number)
    arcStartLng?: string | ((d: object) => number)
    arcEndLat?: string | ((d: object) => number)
    arcEndLng?: string | ((d: object) => number)
    arcColor?: string | ((d: object) => string | string[])
    arcAltitude?: string | number | ((d: object) => number) | null
    arcAltitudeAutoScale?: string | number | ((d: object) => number)
    arcStroke?: string | number | ((d: object) => number) | null
    arcDashLength?: string | number | ((d: object) => number)
    arcDashGap?: string | number | ((d: object) => number)
    arcDashInitialGap?: string | number | ((d: object) => number)
    arcDashAnimateTime?: string | number | ((d: object) => number)
    arcLabel?: string | ((d: object) => string)

    labelsData?: object[]
    labelLat?: string | ((d: object) => number)
    labelLng?: string | ((d: object) => number)
    labelText?: string | ((d: object) => string)
    labelColor?: string | ((d: object) => string)
    labelAltitude?: string | number | ((d: object) => number)
    labelSize?: string | number | ((d: object) => number)
    labelDotRadius?: string | number | ((d: object) => number)
    labelDotOrientation?: string | ((d: object) => string)
    labelResolution?: number
    labelIncludeDot?: boolean | ((d: object) => boolean)

    enablePointerInteraction?: boolean
    onGlobeClick?: (coords: { lat: number; lng: number }, event: MouseEvent) => void
    onPointClick?: (point: object, event: MouseEvent) => void
    onPointHover?: (point: object | null, prevPoint: object | null) => void
  }

  export default class GlobeComponent extends Component<GlobeProps> {
    pointOfView(pov: { lat: number; lng: number; altitude: number }, ms?: number): void
    controls(): { autoRotate: boolean; autoRotateSpeed: number; enableZoom: boolean }
  }
}
