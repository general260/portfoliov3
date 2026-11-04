// All site content lives here. Edit this file to update copy, links and projects.

export const site = {
  name: 'Basil Obasi',
  email: 'basilobasic@gmail.com',
  resume: '/resume/Resume%20-%20Basil%20Obasi.pdf',
  tagline: 'Build. Operate. Improve.',
  social: {
    linkedin: 'https://www.linkedin.com/in/basil-obasi',
    github: 'https://github.com/general260',
    medium: 'https://basil-o.medium.com',
  },
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/#about' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Contact', href: '/#contact' },
];

export const focusAreas = [
  { icon: 'chart', title: 'Operations Leadership', text: 'Scaling teams, fleets and supply chains.' },
  { icon: 'compass', title: 'Product Management', text: 'Discovery, strategy and delivery.' },
  { icon: 'code', title: 'Software & Design', text: 'Building clean, useful things for the web.' },
  { icon: 'pen', title: 'Writing', text: 'Lessons from operations and tech.' },
] as const;

export type Category = 'Writing' | 'Case Study' | 'Product' | 'Website';

export interface WorkItem {
  title: string;
  description: string;
  category: Category;
  image: string;
  href: string;
  featured?: boolean;
}

const img = (n: number) => `/images/work/item-${n}.png`;

// Ordered newest / most relevant first.
export const work: WorkItem[] = [
  {
    title: 'Slow is Smooth. Smooth is Fast.',
    description: 'Why moving deliberately puts operations teams ahead.',
    category: 'Writing',
    image: img(17),
    href: 'https://medium.com/@basil-o/slow-is-smooth-smooth-is-fast-154f18b66267',
    featured: true,
  },
  {
    title: 'Managing Operations at a Unicorn',
    description: 'Hard-won lessons from running operations at scale.',
    category: 'Writing',
    image: img(18),
    href: 'https://medium.com/@basil-o/managing-operations-at-a-unicorn-4ab64447ee69',
    featured: true,
  },
  {
    title: 'Unicorns Amidst the Turmoil',
    description: 'Significant growth in the African tech scene.',
    category: 'Writing',
    image: img(12),
    href: 'https://basil-o.medium.com/unicorns-amidst-the-turmoil-9fd733b9af9b',
    featured: true,
  },
  {
    title: 'The Multi-Billion Dollar Bird',
    description: 'Managing a billion-dollar product: Twitter.',
    category: 'Writing',
    image: img(6),
    href: 'https://basil-o.medium.com/the-multi-billion-dollar-bird-ac35c33d43e6',
  },
  {
    title: 'Procter & Gamble',
    description: "The media's presumed effect on global brands.",
    category: 'Writing',
    image: img(10),
    href: 'https://basil-o.medium.com/procter-gamble-5cb64961fd9d',
  },
  {
    title: 'Case Study: LinkedIn',
    description: 'Complete discovery and product development.',
    category: 'Case Study',
    image: img(14),
    href: 'https://www.keepandshare.com/doc12/255919/case-study-for-linkedin-by-basil-obasi-pdf-923k?da=y',
  },
  {
    title: 'Case Study: Any.do',
    description: 'Discovery and implementation experiment.',
    category: 'Case Study',
    image: img(13),
    href: 'https://www.keepandshare.com/doc12/255858/case-study-for-any-do-by-basil-obasi-pdf-383k?da=y',
  },
  {
    title: 'Case Study: SaaSafras',
    description: 'Run-rate operational strategy.',
    category: 'Case Study',
    image: img(15),
    href: 'https://www.keepandshare.com/doc12/256770/case-study-for-saasafras-by-basil-obasi-pdf-996k?da=y',
  },
  {
    title: 'Product Study: Incognito',
    description: 'Product management study.',
    category: 'Case Study',
    image: img(16),
    href: 'https://www.keepandshare.com/doc12/257536/product-study-for-incognito-blog-by-basil-obasi-pdf-369k?dn=y&dnad=y',
  },
  {
    title: 'LL Product Requirements',
    description: 'Detailed, fluid PRD.',
    category: 'Product',
    image: img(4),
    href: 'https://docs.google.com/document/d/1q9PephaNDnxh-cJpydGSKXbRYzmFiaro2o4ktAWygDI/edit',
  },
  {
    title: 'LL Product Vision',
    description: 'Qualitative market analysis.',
    category: 'Product',
    image: img(5),
    href: 'https://docs.google.com/presentation/d/1qisxNU5OsWZwrDbf9m7fAoEHTiTix3FuOnm_rhq40iE/edit#slide=id.g57515110cb_1_42',
  },
  {
    title: 'LL Design Sprint',
    description: 'Sprint focus, prototyping and handoffs.',
    category: 'Product',
    image: img(7),
    href: 'https://docs.google.com/presentation/d/1QYfXqd3O458DHwucgLooEwPf4tUXRViFVS3kMYL9vzY/edit#slide=id.p1',
  },
  {
    title: 'LL Sprint Backlog',
    description: 'User story prioritization by criticality.',
    category: 'Product',
    image: img(9),
    href: 'https://docs.google.com/presentation/d/1MREoVSSEpknYq-J39QZXX6GD7AdwmaRwxVBSM5HvjbA/edit#slide=id.g62a7771621_0_24',
  },
  {
    title: 'Hubris Consult',
    description: 'Elegant tech consulting agency website.',
    category: 'Website',
    image: img(3),
    href: 'https://www.hubrisconsult.com',
  },
  {
    title: 'Hubris Blog',
    description: 'News and media publishing website.',
    category: 'Website',
    image: img(23),
    href: 'https://blog.hubrisconsult.com/',
  },
  {
    title: 'White Aura Designs',
    description: 'Interior design showcase website.',
    category: 'Website',
    image: img(2),
    href: 'https://www.whiteauradesigns.com',
  },
  {
    title: 'WAPCEF',
    description: 'Website for a non-governmental organization.',
    category: 'Website',
    image: img(20),
    href: 'https://wapcef.org',
  },
  {
    title: 'Construction Company',
    description: 'Professional construction services website.',
    category: 'Website',
    image: img(21),
    href: 'https://soeiconcrete.netlify.app/',
  },
  {
    title: 'Football Club',
    description: 'Sports club community website.',
    category: 'Website',
    image: img(22),
    href: 'https://now-fc.netlify.app/',
  },
  {
    title: 'Social Intelligence',
    description: 'Social media marketing strategy website.',
    category: 'Website',
    image: img(24),
    href: 'https://sosnation.netlify.app/',
  },
  {
    title: 'Ecommerce',
    description: 'Gadget sales website.',
    category: 'Website',
    image: img(19),
    href: 'https://egeonugadgets.netlify.app/',
  },
  {
    title: 'Landing Page',
    description: 'MVP experiment website.',
    category: 'Website',
    image: img(8),
    href: 'https://slimecredit.netlify.app/',
  },
  {
    title: 'Email Development',
    description: 'Responsive marketing email template.',
    category: 'Website',
    image: img(11),
    href: 'https://github.com/general260/jam-test',
  },
  {
    title: 'Portfolio v1',
    description: 'Simple, responsive portfolio website.',
    category: 'Website',
    image: img(1),
    href: 'https://general260.github.io/portfolio/',
  },
];

export const categories: Category[] = ['Writing', 'Case Study', 'Product', 'Website'];
