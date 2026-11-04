import { nav, site } from '../data/site';
import { BrandIcon } from './Icon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="wordmark">
              {site.name}
            </a>
            <div className="footer__social">
              <a href={site.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <BrandIcon name="linkedin" />
              </a>
              <a href={site.social.github} target="_blank" rel="noopener" aria-label="GitHub">
                <BrandIcon name="github" />
              </a>
              <a href={site.social.medium} target="_blank" rel="noopener" aria-label="Medium">
                <BrandIcon name="medium" />
              </a>
            </div>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
