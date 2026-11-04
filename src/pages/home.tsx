import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from '../components/Layout';
import { WorkCard } from '../components/WorkCard';
import { Icon } from '../components/Icon';
import { focusAreas, site, work } from '../data/site';
import '../styles/global.css';

const latestWriting = work.filter((w) => w.featured).slice(0, 3);
const selectedWork = ['Hubris Consult', 'White Aura Designs', 'Case Study: LinkedIn']
  .map((t) => work.find((w) => w.title === t))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <img src="/images/hero.jpg" alt="" width={1672} height={941} fetchPriority="high" />
      </div>
      <div className="container hero__content">
        <h1 className="hero__title">
          Operations strategy
          <br /> leadership.
        </h1>
        <p className="hero__lead">
          I lead the delivery of digital and physical products by blending product strategy, technical
          expertise and process design thinking.
        </p>
        <a className="btn btn--dark" href="/work">
          Explore My Work <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container section about">
      <figure className="about__photo reveal">
        <img src="/images/basil.jpg" alt="Portrait of Basil Obasi" width={400} height={400} />
      </figure>

      <div className="about__copy reveal">
        <p className="eyebrow eyebrow--rule">About me</p>
        <h2 className="display-2">I’m Basil.</h2>
        <p>
          I’m an operations leader, product manager and builder working in the technology sector, driving
          change and progress within the operations department of a $200 million company.
        </p>
        <p>
          Today I lead a cross-functional team of 60+ people, manage more than $20 million in hardware
          inventory, and build the vendor relationships and logistics improvements that keep things moving.
        </p>
        <a className="link-arrow" href={site.resume} target="_blank" rel="noopener">
          Download my résumé <Icon name="arrow" size={14} />
        </a>
      </div>

      <ul className="focus reveal">
        {focusAreas.map((f) => (
          <li key={f.title} className="focus__item">
            <Icon name={f.icon} size={28} />
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CardSection({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: typeof work;
}) {
  return (
    <section id={id} className="container section">
      <p className="eyebrow eyebrow--rule eyebrow--full">{eyebrow}</p>
      <div className="section__head">
        <h2 className="display-3">{title}</h2>
        <a className="link-arrow" href="/work">
          View all work <Icon name="arrow" size={14} />
        </a>
      </div>
      <div className="card-grid card-grid--divided">
        {items.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <CardSection
        id="writing"
        eyebrow="Latest writing"
        title="Thoughts, insights and stories."
        items={latestWriting}
      />
      <CardSection id="selected" eyebrow="Selected work" title="Things I’ve built and studied." items={selectedWork} />
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
