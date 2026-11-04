import { site } from '../data/site';
import { BrandIcon, Icon } from './Icon';

export function ContactBand() {
  return (
    <section id="contact" className="container section--tight">
      <div className="contact reveal">
        <div className="contact__icon">
          <Icon name="mail" size={40} />
        </div>
        <div className="contact__copy">
          <h2 className="contact__title">Let’s stay in touch</h2>
          <p>Have a project, role or idea worth talking about? My inbox is open.</p>
        </div>
        <div className="contact__actions">
          <a className="btn btn--dark" href={`mailto:${site.email}`}>
            Email me <Icon name="arrow" size={16} />
          </a>
          <a className="btn btn--outline" href={site.social.linkedin} target="_blank" rel="noopener">
            <BrandIcon name="linkedin" size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
