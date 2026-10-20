/**
 * Fallback SVG Data URIs for tool logos ensuring the Zero-Broken-Image policy
 * is strictly upheld if local PNGs are still loading or awaiting user placement.
 */

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

export interface ToolItem {
  name: string;
  image: string;
  fallback: string;
}

export const ROW_1_TOOLS: ToolItem[] = [
  {
    name: 'Google Workspace',
    image: 'GoogleWorkspace.svg',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#ffffff"/>
        <g stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13 16l6 17" stroke="#4285F4"/>
          <path d="M19 33l5-12" stroke="#EA4335"/>
          <path d="M24 21l5 12" stroke="#FBBC05"/>
          <path d="M29 33l6-17" stroke="#34A853"/>
        </g>
      </svg>
    `),
  },
  {
    name: 'Google Docs',
    image: 'Docs.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#4285F4"/>
        <path fill="#ffffff" d="M16 14h16v3H16zm0 6h16v3H16zm0 6h11v3H16z"/>
      </svg>
    `),
  },
  {
    name: 'Google Sheets',
    image: 'Sheets.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#0F9D58"/>
        <path fill="#ffffff" d="M14 14h20v20H14zm3 3v4h6v-4zm9 0v4h5v-4zm-9 7v4h6v-4zm9 0v4h5v-4zm-9 7v4h6v-4zm9 0v4h5v-4z"/>
      </svg>
    `),
  },
  {
    name: 'Google Drive',
    image: 'Drive.svg',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#ffffff"/>
        <g transform="translate(24, 25) scale(0.32)">
          <path fill="#0066DA" d="m-37 18 3.8 6.7c.8 1.4 2 2.5 3.3 3.3l13.8-23.8h-27.5c0 1.6.4 3.1 1.2 4.5z"/>
          <path fill="#00AC47" d="m0-23.8-13.8-23.8c-1.3.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 3-1.2 4.5h27.5z"/>
          <path fill="#EA4335" d="m30 28c1.3-.8 2.5-1.9 3.3-3.3l1.6-2.7 7.7-13.3c.8-1.4 1.2-3 1.2-4.5H16.3l5.8 11.5z"/>
          <path fill="#00832D" d="m0-23.8 13.8-23.8c-1.4-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.2.4-4.5 1.2z"/>
          <path fill="#2684FC" d="m16.2 4.2h-32.3l-13.8 23.8c1.4.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.2-.4 4.5-1.2z"/>
          <path fill="#FFBA00" d="m29.8-22.3-12.7-22c-.8-1.4-2-2.5-3.3-3.3l-13.8 23.8 16.2 28h27.4c0-1.6-.4-3.1-1.2-4.5z"/>
        </g>
      </svg>
    `),
  },
  {
    name: 'Apps Script',
    image: 'AppsScript.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#ffffff"/>
        <path fill="#4285F4" d="M14 24l8-8v4l-4 4 4 4v4z"/>
        <path fill="#EA4335" d="M34 24l-8 8v-4l4-4-4-4v-4z"/>
      </svg>
    `),
  },
  {
    name: 'Google Calendar',
    image: 'GoogleCalendar.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#4285F4"/>
        <rect x="8" y="16" width="32" height="24" rx="4" fill="#ffffff"/>
        <text x="24" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold" fill="#4285F4" text-anchor="middle">31</text>
        <circle cx="16" cy="11" r="2.5" fill="#ffffff"/>
        <circle cx="32" cy="11" r="2.5" fill="#ffffff"/>
      </svg>
    `),
  },
  {
    name: 'Microsoft Teams',
    image: 'Teams.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#5059C9"/>
        <path fill="#7B83EB" d="M34 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm2 8h-8a4 4 0 0 0-4 4v4h16v-4a4 4 0 0 0-4-4z"/>
        <rect x="8" y="14" width="18" height="20" rx="3" fill="#ffffff"/>
        <text x="17" y="29" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#5059C9" text-anchor="middle">T</text>
      </svg>
    `),
  },
  {
    name: 'Microsoft Word',
    image: 'Word.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#185ABD"/>
        <rect x="10" y="12" width="20" height="24" rx="3" fill="#ffffff"/>
        <text x="20" y="29" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#185ABD" text-anchor="middle">W</text>
        <path fill="#ffffff" fill-opacity="0.8" d="M32 16h6v2h-6zm0 5h6v2h-6zm0 5h6v2h-6zm0 5h4v2h-4z"/>
      </svg>
    `),
  },
  {
    name: 'Microsoft Excel',
    image: 'Excel.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#107C41"/>
        <rect x="10" y="12" width="20" height="24" rx="3" fill="#ffffff"/>
        <text x="20" y="29" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#107C41" text-anchor="middle">X</text>
        <path fill="#ffffff" fill-opacity="0.8" d="M32 16h6v4h-6zm0 6h6v4h-6zm0 6h6v4h-6z"/>
      </svg>
    `),
  },
];

export const ROW_2_TOOLS: ToolItem[] = [
  {
    name: 'AWS',
    image: 'AWS.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#ffffff"/>
        <text x="24" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="#232F3E" text-anchor="middle" letter-spacing="0.5">AWS</text>
        <path d="M12 28c7 4 17 4 24 0" stroke="#FF9900" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <polygon points="34.5,27 37,28.5 35.5,25.5" fill="#FF9900"/>
      </svg>
    `),
  },
  {
    name: 'Amazon S3',
    image: 'S3.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#E25342"/>
        <rect x="12" y="14" width="24" height="20" rx="3" fill="#ffffff"/>
        <text x="24" y="28" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#E25342" text-anchor="middle">S3</text>
      </svg>
    `),
  },
  {
    name: 'DynamoDB',
    image: 'DynamoDB.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#4B63D5"/>
        <ellipse cx="24" cy="16" rx="10" ry="4" fill="#ffffff"/>
        <path d="M14 16v14c0 2.2 4.5 4 10 4s10-1.8 10-4V16" stroke="#ffffff" stroke-width="2.5" fill="none"/>
      </svg>
    `),
  },
  {
    name: 'AWS Lambda',
    image: 'Lambda.png',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#FF9900"/>
        <text x="24" y="32" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">λ</text>
      </svg>
    `),
  },
  {
    name: 'AWS Amplify',
    image: 'Amplify.svg',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#FF9900"/>
        <g fill="#ffffff" transform="translate(13, 9) scale(0.68)">
          <path d="M16.125 0L0 27.93l1.838 3.183 14.287-24.747 14.288 24.747 1.837-3.183L16.125 0zm-4.72 13.92L0 33.722l1.838 3.183 9.567-16.57 9.567 16.57 1.837-3.183-11.405-19.792zm-4.72 8.172L0 39.516 1.838 42.7l4.847-8.397 4.847 8.397 1.837-3.183-6.684-11.58z"/>
        </g>
      </svg>
    `),
  },
  {
    name: 'Meta',
    image: 'Meta.svg',
    fallback: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#ffffff"/>
        <defs>
          <linearGradient id="meta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0866FF" />
            <stop offset="100%" stopColor="#0081FB" />
          </linearGradient>
        </defs>
        <path fill="url(#meta-grad)" transform="translate(-1, 5) scale(0.96)" d="M18.8 7.74c-3.04 0-5.83 1.26-7.85 3.28-2.03 2.03-3.28 4.82-3.28 7.87 0 3.05 1.25 5.84 3.28 7.86 2.02 2.02 4.81 3.28 7.85 3.28 2.62 0 5.05-1 6.89-2.75l.07-.06.06.06c1.84 1.75 4.27 2.75 6.89 2.75 3.05 0 5.84-1.26 7.86-3.28 2.02-2.02 3.28-4.81 3.28-7.86 0-3.05-1.26-5.84-3.28-7.87-2.02-2.02-4.81-3.28-7.86-3.28-2.62 0-5.05 1-6.89 2.75l-.06.06-.07-.06c-1.84-1.75-4.27-2.75-6.89-2.75zm0 3.73c2.01 0 3.86.83 5.19 2.17.21.21.41.44.59.68-.86 1.4-1.92 2.89-3.13 4.41-1.35 1.7-2.79 3.28-4.22 4.67-.74.72-1.5 1.34-2.26 1.83-.05-.03-.1-.07-.15-.1-.99-.99-1.6-2.35-1.6-3.86 0-1.51.61-2.87 1.6-3.86 1.01-1.01 2.37-1.63 3.98-1.94zm13.91 0c1.61.31 2.97.93 3.98 1.94.99.99 1.6 2.35 1.6 3.86 0 1.51-.61 2.87-1.6 3.86-.05.03-.1.07-.15.1-.76-.49-1.52-1.11-2.26-1.83-1.43-1.39-2.87-2.97-4.22-4.67-1.21-1.52-2.27-3.01-3.13-4.41.18-.24.38-.47.59-.68 1.33-1.34 3.18-2.17 5.19-2.17z"/>
      </svg>
    `),
  },
];
