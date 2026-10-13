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
