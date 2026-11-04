import { useEffect, useState } from 'react';
import { nav, site } from '../data/site';
import { Icon } from './Icon';

export function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="wordmark">
          {site.name}
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav__link ${active === item.label ? 'is-active' : ''}`}
              aria-current={active === item.label ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--dark nav__mobile-cta" href={site.resume} target="_blank" rel="noopener">
            Résumé <Icon name="download" size={16} />
          </a>
        </nav>

        <div className="header__actions">
          <a className="btn btn--dark btn--sm header__cta" href={site.resume} target="_blank" rel="noopener">
            Résumé <Icon name="download" size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
