export type IconPart =
  | { type: 'path'; d: string; fill?: string; stroke?: string; strokeWidth?: string }
  | { type: 'line'; x1: string; y1: string; x2: string; y2: string; stroke?: string; strokeWidth?: string }
  | { type: 'polyline'; points: string; stroke?: string; strokeWidth?: string }
  | { type: 'rect'; x?: string; y?: string; width: string; height: string; rx?: string; fill?: string }
  | { type: 'circle'; cx: string; cy: string; r: string; fill?: string }
  | { type: 'polygon'; points: string; fill?: string };

export interface IconDefinition {
  viewBox: string;
  fill: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'butt' | 'square';
  strokeLinejoin?: 'round' | 'miter' | 'bevel';
  parts: IconPart[];
}

export const ICONS = {
  add: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '12', y1: '5', x2: '12', y2: '19' },
      { type: 'line', x1: '5', y1: '12', x2: '19', y2: '12' },
    ],
  },
  arrowRight: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M5 12h14M12 5l7 7-7 7' },
    ],
  },
  arrowDown: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M12 5v14M5 12l7 7 7-7' },
    ],
  },
  bell: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7' },
      { type: 'path', d: 'M13.73 21a2 2 0 0 1-3.46 0' },
    ],
  },
  check: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'polyline', points: '20 6 9 17 4 12' },
    ],
  },
  checkThick: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '3.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'm20 6-11 11-5-5' },
    ],
  },
  chevronDown: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M6 9l6 6 6-6' },
    ],
  },
  columns: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'rect', x: '6', y: '4', width: '4', height: '16', rx: '1' },
      { type: 'rect', x: '14', y: '4', width: '4', height: '16', rx: '1' },
    ],
  },
  activity: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'polyline', points: '22 12 18 12 15 21 9 3 6 12 2 12' },
    ],
  },
  barChart: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '18', y1: '20', x2: '18', y2: '10' },
      { type: 'line', x1: '12', y1: '20', x2: '12', y2: '4' },
      { type: 'line', x1: '6', y1: '20', x2: '6', y2: '14' },
    ],
  },
  densityCompact: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '5', y1: '7', x2: '19', y2: '7' },
      { type: 'line', x1: '5', y1: '12', x2: '19', y2: '12' },
      { type: 'line', x1: '5', y1: '17', x2: '19', y2: '17' },
    ],
  },
  densityComfortable: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '5', y1: '6', x2: '19', y2: '6' },
      { type: 'line', x1: '5', y1: '12', x2: '19', y2: '12' },
      { type: 'line', x1: '5', y1: '18', x2: '19', y2: '18' },
    ],
  },
  densitySpacious: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '5', y1: '5', x2: '19', y2: '5' },
      { type: 'line', x1: '5', y1: '12', x2: '19', y2: '12' },
      { type: 'line', x1: '5', y1: '19', x2: '19', y2: '19' },
    ],
  },
  download: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' },
      { type: 'polyline', points: '7 10 12 15 17 10' },
      { type: 'line', x1: '12', y1: '15', x2: '12', y2: '3' },
    ],
  },
  edit: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M12 20h9' },
      { type: 'path', d: 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' },
    ],
  },
  eye: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z' },
      { type: 'circle', cx: '12', cy: '12', r: '3' },
    ],
  },
  eyeOff: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M17.94 17.94A10.9 10.9 0 0 1 12 20C5 20 1 12 1 12a20.2 20.2 0 0 1 5.06-5.94' },
      { type: 'path', d: 'M9.9 4.24A10.7 10.7 0 0 1 12 4c7 0 11 8 11 8a20.7 20.7 0 0 1-2.16 3.19' },
      { type: 'path', d: 'M14.12 14.12a3 3 0 0 1-4.24-4.24' },
      { type: 'line', x1: '1', y1: '1', x2: '23', y2: '23' },
    ],
  },
  gridRows: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '5', y1: '5', x2: '19', y2: '5' },
      { type: 'line', x1: '5', y1: '12', x2: '19', y2: '12' },
      { type: 'line', x1: '5', y1: '19', x2: '19', y2: '19' },
    ],
  },
  googleBrand: {
    viewBox: '0 0 24 24',
    fill: 'none',
    parts: [
      {
        type: 'path',
        d: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z',
        fill: '#4285F4',
      },
      {
        type: 'path',
        d: 'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z',
        fill: '#34A853',
      },
      {
        type: 'path',
        d: 'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z',
        fill: '#FBBC05',
      },
      {
        type: 'path',
        d: 'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z',
        fill: '#EA4335',
      },
    ],
  },
  microsoftBrand: {
    viewBox: '0 0 23 23',
    fill: 'none',
    parts: [
      { type: 'rect', width: '23', height: '23', fill: '#f3f3f3' },
      { type: 'path', d: 'M1 1h10v10H1z', fill: '#f35325' },
      { type: 'path', d: 'M12 1h10v10H12z', fill: '#81bc06' },
      { type: 'path', d: 'M1 12h10v10H1z', fill: '#05a6f0' },
      { type: 'path', d: 'M12 12h10v10H12z', fill: '#ffba08' },
    ],
  },
  file: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
      { type: 'polyline', points: '14 2 14 8 20 8' },
    ],
  },
  home: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { type: 'polyline', points: '9 22 9 12 15 12 15 22' },
    ],
  },
  help: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '12', cy: '12', r: '10' },
      { type: 'path', d: 'M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4' },
      { type: 'line', x1: '12', y1: '17', x2: '12.01', y2: '17' },
    ],
  },
  gear: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '12', cy: '12', r: '3' },
      { type: 'path', d: 'M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.3.16.62.25 1 .25H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z' },
    ],
  },
  checkChip: {
    viewBox: '0 0 14 14',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M3 7.2L5.8 10L11 4.2', stroke: 'white', strokeWidth: '2.2' },
    ],
  },
  idCard: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'rect', x: '3', y: '5', width: '18', height: '14', rx: '2' },
      { type: 'circle', cx: '8', cy: '12', r: '2' },
      { type: 'path', d: 'M13 10h5M13 14h4' },
    ],
  },
  inbox: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'polyline', points: '22 12 16 12 14 15 10 15 8 12 2 12' },
      { type: 'path', d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' },
    ],
  },
  link: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' },
      { type: 'path', d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' },
    ],
  },
  lock: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'rect', x: '3', y: '11', width: '18', height: '11', rx: '2' },
      { type: 'path', d: 'M7 11V7a5 5 0 0 1 10 0v4' },
    ],
  },
  logOut: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' },
      { type: 'polyline', points: '16 17 21 12 16 7' },
      { type: 'line', x1: '21', y1: '12', x2: '9', y2: '12' },
    ],
  },
  keyboard: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'rect', x: '3', y: '5', width: '18', height: '14', rx: '2' },
      { type: 'line', x1: '7', y1: '9', x2: '7.01', y2: '9' },
      { type: 'line', x1: '11', y1: '9', x2: '11.01', y2: '9' },
      { type: 'line', x1: '15', y1: '9', x2: '15.01', y2: '9' },
      { type: 'line', x1: '7', y1: '13', x2: '17', y2: '13' },
    ],
  },
  menu: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '4', y1: '6', x2: '20', y2: '6' },
      { type: 'line', x1: '4', y1: '12', x2: '20', y2: '12' },
      { type: 'line', x1: '4', y1: '18', x2: '20', y2: '18' },
    ],
  },
  moreVertical: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '12', cy: '12', r: '1' },
      { type: 'circle', cx: '12', cy: '5', r: '1' },
      { type: 'circle', cx: '12', cy: '19', r: '1' },
    ],
  },
  search: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '11', cy: '11', r: '7' },
      { type: 'path', d: 'm21 21-4.3-4.3' },
    ],
  },
  settings: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '12', cy: '12', r: '3' },
      { type: 'path', d: 'M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14' },
    ],
  },
  circle: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'circle', cx: '12', cy: '12', r: '10' },
    ],
  },
  shield: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z' },
    ],
  },
  sort: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'm7 15 5 5 5-5' },
      { type: 'path', d: 'm7 9 5-5 5 5' },
    ],
  },
  sparkles: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' },
    ],
  },
  starburst: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8' },
    ],
  },
  tag: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' },
      { type: 'line', x1: '7', y1: '7', x2: '7.01', y2: '7' },
    ],
  },
  trash: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M3 6h18' },
      { type: 'path', d: 'M8 6V4h8v2' },
      { type: 'path', d: 'M19 6l-1 14H6L5 6' },
      { type: 'path', d: 'M10 11v5' },
      { type: 'path', d: 'M14 11v5' },
    ],
  },
  users: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
      { type: 'circle', cx: '9', cy: '7', r: '4' },
      { type: 'path', d: 'M22 21v-2a4 4 0 0 0-3-3.87' },
      { type: 'path', d: 'M16 3.13a4 4 0 0 1 0 7.75' },
    ],
  },
  warning: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'path', d: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z' },
      { type: 'line', x1: '12', y1: '9', x2: '12', y2: '13' },
      { type: 'line', x1: '12', y1: '17', x2: '12.01', y2: '17' },
    ],
  },
  x: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    parts: [
      { type: 'line', x1: '18', y1: '6', x2: '6', y2: '18' },
      { type: 'line', x1: '6', y1: '6', x2: '18', y2: '18' },
    ],
  },
} as const satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof ICONS;
