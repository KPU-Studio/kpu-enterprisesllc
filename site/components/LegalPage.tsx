import { PageHeader } from "./PageHeader";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader crumbs={[{ label: doc.title }]} eyebrow="Legal" title={doc.title} intro={doc.effective} />
      <article className="frame py-16 md:py-24">
        <div className="max-w-[70ch] space-y-5">
          {doc.blocks.map((b, i) => {
            if (b.type === "ul")
              return (
                <ul key={i} className="body-copy list-disc space-y-2 pl-6 marker:text-network-green">
                  {b.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            if (b.type === "h2") return <h2 key={i} className="h-feature pt-6">{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i} className="pt-2 text-[16px] font-semibold">{b.text}</h3>;
            return <p key={i} className="body-copy">{b.text}</p>;
          })}
        </div>
      </article>
    </>
  );
}
