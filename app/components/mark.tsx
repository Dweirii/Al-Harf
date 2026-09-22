/*
  The Al-Harf mark, redrawn from the logo as what it is: one stroke
  that turns inward twice, a letter inside a letter. Drawing it as a
  single stroked path keeps it sharp at any size and lets it be
  written on screen rather than faded in.
*/
export default function Mark({
  className,
  draw = false,
}: {
  className?: string;
  draw?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 209 151.5"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 11.3H139A57.2 64.45 0 0 1 139 140.2H78.3V45.8H133A29.8 29.85 0 0 1 133 105.5H113.1V69"
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth={22.6}
        className={draw ? "mark-draw" : undefined}
      />
    </svg>
  );
}
