// Small inline-SVG icon set for service capability blocks. Stroke-based line icons
// (currentColor, 1.5 weight) to match the site's SVG diagrams — no icon dependency.
import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  architecture: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="5" r="1.6" />
      <circle cx="19" cy="5" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <path d="M10.4 10.4 6.2 6.2M13.6 10.4l4.2-4.2M12 14.4v4" />
    </>
  ),
  code: (
    <>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13.5 5l-3 14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  advisory: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5Z" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  app: (
    <>
      <path d="M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v4l5-4h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  automation: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
      <path d="M20 3.5V8h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
      <path d="M4 20.5V16h4.5" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </>
  ),
  // Industry icons
  healthcare: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 9v6M9 12h6" />
    </>
  ),
  finance: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9" />
      <path d="M14.5 9.5c-.6-.8-1.6-1.2-2.6-1.1-1.3 0-2.4.8-2.4 1.9 0 1.1 1 1.6 2.5 1.9s2.5.8 2.5 1.9-1.1 1.9-2.5 1.9c-1 .1-2-.3-2.6-1.1" />
    </>
  ),
  legal: (
    <>
      <path d="M12 3v17M6 7h12M8 20h8" />
      <path d="M6 7 3.5 13h5L6 7ZM18 7l-2.5 6h5L18 7Z" />
    </>
  ),
  professional: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18" />
    </>
  ),
  manufacturing: (
    <>
      <path d="M3 20V10l5 3.5V10l5 3.5V6l6 2v12H3Z" />
      <path d="M7 20v-3M12 20v-3M16 20v-3" />
    </>
  ),
  technology: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10h4v4h-4z" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
    </>
  ),
  retail: (
    <>
      <path d="M6.5 8h11l-1 11h-9l-1-11Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  education: (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5" />
    </>
  ),
  nonprofit: (
    <path d="M12 20S4.5 15.5 4.5 10.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7.5 2.5C19.5 15.5 12 20 12 20Z" />
  ),
  government: (
    <>
      <path d="M3 9h18L12 4 3 9Z" />
      <path d="M5 9v8M9 9v8M15 9v8M19 9v8M3 20h18" />
    </>
  ),
  logistics: (
    <>
      <path d="M3 7h11v8H3zM14 10h3.5L21 13v2h-7z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </>
  ),
  realestate: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9M10 19v-4.5h4V19" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
