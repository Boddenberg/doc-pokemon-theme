import React, {useMemo, useState} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import Link from '@docusaurus/Link';

/** Achata os itens do sidebar para sugerir resultados sem alterar o render. */
function flatten(items = []) {
  const out = [];
  const walk = (arr = []) =>
    (arr || []).forEach((it) => {
      if (!it) return;
      if (it.type === 'category') return walk(it.items || []);
      const label = it.label || it.docId || it.href || '';
      const href = it.href || (it.docId ? `/docs/${it.docId}` : null);
      if (href) out.push({label, href});
    });
  walk(items);
  return out;
}

export default function DocSidebar(props) {
  const [q, setQ] = useState('');
  const baseItems = props.sidebar?.items ?? props.sidebar ?? [];
  const flat = useMemo(() => flatten(baseItems), [baseItems]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return flat
      .filter((it) => it.label.toLowerCase().includes(s))
      .slice(0, 8);
  }, [flat, q]);

  return (
    <>
      {/* toolbar mínima e fixa */}
      <div className="sb-minibar">
        <input
          className="sb-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar página…"
          aria-label="Buscar no menu"
        />
        {q && (
          <ul className="sb-results" role="listbox">
            {results.length === 0 ? (
              <li className="sb-empty" aria-disabled>Sem resultados</li>
            ) : (
              results.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} onClick={() => setQ('')}>
                    {r.label}
                  </Link>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {/* sidebar nativo, intacto */}
      <OriginalDocSidebar {...props} />

      <style>{`
        .sb-minibar{
          position: sticky; top: 0; z-index: 1;
          padding: .5rem; border-bottom: 1px solid var(--ifm-toc-border-color);
          background: var(--ifm-background-surface-color);
        }
        .sb-input{
          width: 100%; padding: .45rem .6rem;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: var(--ifm-global-radius);
          background: var(--ifm-background-color);
        }
        .sb-results{
          margin: .4rem 0 0; padding: .25rem;
          list-style: none; border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: var(--ifm-global-radius);
          background: var(--ifm-background-surface-color);
          max-height: 240px; overflow: auto;
        }
        .sb-results li a{
          display:block; padding:.35rem .5rem; border-radius: .35rem;
        }
        .sb-results li a:hover{ background: var(--ifm-hover-overlay); }
        .sb-empty{ padding:.35rem .5rem; opacity:.65; }
      `}</style>
    </>
  );
}
