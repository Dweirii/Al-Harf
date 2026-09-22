import Image from "next/image";

export type ShelfBrand = {
  slug: string;
  logo: string;
  name: string;
  origin: string;
  note: string;
};

/*
  Brand marks sit on shelves: white tiles resting on a gold shelf edge,
  the way the goods themselves sit in the markets.
*/
export default function BrandShelf({ items }: { items: ShelfBrand[] }) {
  const perRow = 4;
  const rows: ShelfBrand[][] = [];
  for (let i = 0; i < items.length; i += perRow) {
    rows.push(items.slice(i, i + perRow));
  }

  return (
    <div className="space-y-10">
      {rows.map((row, i) => (
        <div key={i}>
          <ul className="grid grid-cols-2 gap-px bg-bone sm:grid-cols-3 lg:grid-cols-4">
            {row.map((brand) => (
              <li key={brand.slug} className="flex min-w-0 flex-col bg-shelf p-6 lg:p-8">
                <div className="flex h-24 min-w-0 items-center justify-center lg:h-28">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={300}
                    height={170}
                    className="max-h-20 w-auto max-w-[80%] object-contain lg:max-h-[5.5rem]"
                  />
                </div>
                <div className="mt-5 border-t border-bone pt-4">
                  <h3 className="display-tight text-lg">{brand.name}</h3>
                  {brand.origin && (
                    <p className="mt-1 text-sm text-gold-deep">{brand.origin}</p>
                  )}
                  <p className="lede mt-2 text-[0.95rem] leading-6 text-ink-soft">
                    {brand.note}
                  </p>
                </div>
              </li>
            ))}
            {/* keep the shelf full-width when the last row is short */}
            {row.length < perRow &&
              Array.from({ length: perRow - row.length }).map((_, k) => (
                <li key={`pad-${k}`} aria-hidden className="hidden bg-shelf lg:block" />
              ))}
          </ul>
          <div className="h-[6px] shelf-edge" />
        </div>
      ))}
    </div>
  );
}
