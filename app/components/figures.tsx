import type { Dictionary } from "../lib/dictionaries";
import { figureValues } from "../lib/site";

/*
  The company's published figures. Cells are padded away from the
  dividers between them; the row is pulled out by the page gutter so
  the first number still lines up with the text above it.
*/
export default function Figures({
  labels,
  tone,
  note,
}: {
  labels: Dictionary["figures"];
  tone: "light" | "dark";
  note?: string;
}) {
  const keys = Object.keys(figureValues) as (keyof typeof figureValues)[];
  const dark = tone === "dark";

  return (
    <div>
      <dl
        className={`-mx-5 grid grid-cols-2 gap-px sm:-mx-8 lg:-mx-10 lg:grid-cols-4 ${
          dark ? "bg-white/15" : "bg-grey/25"
        }`}
      >
        {keys.map((key) => (
          <div
            key={key}
            className={`flex flex-col-reverse px-5 py-7 sm:px-8 lg:px-10 lg:py-9 ${
              dark ? "bg-ink" : "bg-shelf"
            }`}
          >
            <dt className={`mt-1 text-[1rem] ${dark ? "text-grey-light" : "text-ink-soft"}`}>
              {labels[key]}
            </dt>
            <dd
              className={`display text-[clamp(2.3rem,4vw,3.4rem)] ${
                dark ? "text-signal" : "text-gold-deep"
              }`}
            >
              {figureValues[key]}
            </dd>
          </div>
        ))}
      </dl>
      {note && (
        <p className={`mt-4 text-sm ${dark ? "text-grey-light" : "text-ink-soft"}`}>
          {note}
        </p>
      )}
    </div>
  );
}
