import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout, useReveal } from '../components/Layout';
import { WorkCard } from '../components/WorkCard';
import { categories, work, type Category } from '../data/site';
import '../styles/global.css';

type Filter = 'All' | Category;
const filters: Filter[] = ['All', ...categories];

function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('All');
  const items = filter === 'All' ? work : work.filter((w) => w.category === filter);
  useReveal([filter]);

  return (
    <section className="container section">
      <div className="filters" role="group" aria-label="Filter work by category">
        {filters.map((f) => (
          <button
            key={f}
            className={`chip ${filter === f ? 'is-active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            <span className="chip__count">
              {f === 'All' ? work.length : work.filter((w) => w.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <Layout active="Work">
      <section className="container page-head">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display-1">Work, writing and case studies.</h1>
        <p className="page-head__lead">
          A collection of product case studies, operations writing, product documents and websites I’ve
          designed and built.
        </p>
      </section>
      <WorkGrid />
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Work />
  </StrictMode>,
);
