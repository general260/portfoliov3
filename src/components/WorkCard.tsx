import type { WorkItem } from '../data/site';
import { Icon } from './Icon';

const cta: Record<WorkItem['category'], string> = {
  Writing: 'Read article',
  'Case Study': 'Read case study',
  Product: 'View document',
  Website: 'Visit site',
};

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="card reveal">
      <a href={item.href} target="_blank" rel="noopener" className="card__media" tabIndex={-1} aria-hidden="true">
        <img src={item.image} alt="" loading="lazy" />
      </a>
      <div className="card__body">
        <p className="eyebrow eyebrow--sm">{item.category}</p>
        <h3 className="card__title">
          <a href={item.href} target="_blank" rel="noopener">
            {item.title}
          </a>
        </h3>
        <p className="card__text">{item.description}</p>
        <a className="link-arrow" href={item.href} target="_blank" rel="noopener">
          {cta[item.category]} <Icon name="arrow" size={14} />
        </a>
      </div>
    </article>
  );
}
