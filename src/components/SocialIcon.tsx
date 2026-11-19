export function SocialIcon({ name }: { name: string }) {
  const className = "h-5 w-5";
  if (name === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M14.2 8.5h2.3V5.6h-2.3c-2.1 0-3.7 1.7-3.7 3.8v1.8H8.2v2.9h2.3V21h3.1v-6.9h2.4l.4-2.9h-2.8V9.6c0-.6.4-1.1 1.1-1.1z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14 3.2h2.1c.2 1.7 1.3 3.1 2.9 3.7v2.3a6 6 0 0 1-3.1-.9v6.2a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.4a3.1 3.1 0 1 0 2.2 3V3.2z" />
    </svg>
  );
}
