import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, Check, ChevronRight, LockKeyhole, Menu, MessageCircle, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

/** Keep community channels in one place so a real URL can be swapped in without hunting through the page. */
const LINKS = {
  // Swap these two URLs for the live community invite and publication when ready.
  discord: 'https://discord.com/',
  substack: 'https://substack.com/',
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 ${light ? 'text-[#f5f0e6]' : 'text-[#202b3a]'}`}
      aria-label="TrueNorth home"
      data-testid="link-logo"
    >
      <span className="relative flex h-7 w-7 items-center justify-center border border-current">
        <span className="h-2 w-2 bg-[#c9765c]" />
        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
        <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-current" />
      </span>
      <span className="text-[0.84rem] font-bold tracking-[0.16em]">TRUE NORTH</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#why', label: 'Why we’re here' },
    { href: '#community', label: 'The community' },
    { href: '#circle', label: 'Founding Circle' },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="site-container flex h-[76px] items-center justify-between">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.73rem] font-medium text-[#c7d0ca] transition-colors hover:text-[#f5f0e6]"
              data-testid={`link-nav-${link.href.slice(1)}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#circle"
            className="border border-[#c7d0ca]/50 px-4 py-2 text-[0.7rem] font-bold tracking-[0.08em] text-[#f5f0e6] transition-colors hover:border-[#f5f0e6]"
            data-testid="link-nav-join"
          >
            JOIN THE LIST
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-[#f5f0e6] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav className="mx-5 border border-[#c7d0ca]/20 bg-[#202b3a] p-4 md:hidden" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#c7d0ca]/15 py-3 text-sm text-[#f5f0e6]"
              data-testid={`link-mobile-${link.href.slice(1)}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#circle" onClick={() => setOpen(false)} className="mt-3 inline-flex text-sm font-bold text-[#d48b71]" data-testid="link-mobile-join">
            Join the Founding Circle <ArrowUpRight size={15} className="ml-1" />
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#202b3a] text-[#f5f0e6]">
      <div className="pointer-events-none absolute right-[-12vw] top-[-8vw] h-[42vw] w-[42vw] rounded-full border border-[#a3b6a6]/20" />
      <div className="pointer-events-none absolute right-[3vw] top-[7vw] h-[24vw] w-[24vw] rounded-full border border-[#a3b6a6]/15" />
      <div className="site-container relative flex min-h-[680px] items-end pb-20 pt-36 md:min-h-[760px] md:pb-28">
        <div className="max-w-[850px]">
          <Reveal className="reveal-delay-1">
            <p className="eyebrow mb-7 text-[#a3b6a6]" data-testid="text-hero-eyebrow">A community for becoming yourself</p>
          </Reveal>
          <Reveal className="reveal-delay-2">
            <h1 className="display-serif max-w-[850px] text-[clamp(3.4rem,9vw,8.4rem)] leading-[0.98] tracking-[-0.055em]" data-testid="text-hero-title">
              A calmer way<br /><em className="text-[#d48b71]">to live.</em>
            </h1>
          </Reveal>
          <Reveal className="reveal-delay-3">
            <div className="mt-10 flex max-w-[570px] flex-col gap-8 md:flex-row md:items-end">
              <p className="max-w-[370px] text-[1.05rem] leading-[1.65] text-[#c7d0ca]" data-testid="text-hero-description">
                TrueNorth is a smaller, more genuine place for young women and students who are tired of performing their lives online.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={LINKS.discord} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#d48b71] px-5 text-[0.72rem] font-bold tracking-[0.08em] text-[#202b3a] transition-colors hover:bg-[#e19a7e]" data-testid="link-hero-discord">
                  JOIN THE COMMUNITY <ArrowUpRight size={15} />
                </a>
                <a href={LINKS.substack} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.1em] text-[#f5f0e6]" data-testid="link-hero-substack">
                  READ THE SUBSTACK <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="site-container flex justify-between border-t border-[#c7d0ca]/20 py-4 text-[0.64rem] tracking-[0.12em] text-[#aab8b0]">
        <span data-testid="text-hero-footer-left">NOT ANOTHER FEED</span>
        <span data-testid="text-hero-footer-right">EST. IN THE QUIETER PART OF THE INTERNET</span>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="bg-[#f5f0e6] py-24 text-[#202b3a] md:py-36">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
            <p className="eyebrow text-[#527164]" data-testid="text-why-eyebrow">Why we’re here</p>
            <div>
              <h2 className="display-serif max-w-[720px] text-[clamp(2.3rem,5.4vw,5.1rem)] leading-[1.08] tracking-[-0.045em]" data-testid="text-why-heading">
                The internet got louder.<br /><em>We got quieter.</em>
              </h2>
              <p className="mt-9 max-w-[570px] text-[1.03rem] leading-[1.75] text-[#53606a]" data-testid="text-why-copy">
                Somewhere between the comparison and the constant performance, it became difficult to hear your own thoughts. Not because you’re doing anything wrong. Because it is a lot to be a person in public.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-0 border-t border-[#c4c0b5] md:grid-cols-3">
          {[
            ['The pressure', 'To have an opinion ready before you’ve had time to form one.'],
            ['The habit', 'To turn a life into updates, then wonder where the living went.'],
            ['The want', 'A place where showing up can mean being honest, not impressive.'],
          ].map(([title, copy], index) => (
            <Reveal key={title} className={`border-b border-[#c4c0b5] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 reveal-delay-${index + 1}`}>
              <span className="display-serif text-3xl text-[#d48b71]" data-testid={`text-why-number-${index}`}>0{index + 1}</span>
              <h3 className="mt-7 text-sm font-bold" data-testid={`text-why-title-${index}`}>{title}</h3>
              <p className="mt-3 max-w-[260px] text-sm leading-[1.7] text-[#68716f]" data-testid={`text-why-copy-${index}`}>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticeSection() {
  const practices = [
    ['01', 'Pause before reaction', 'A little more room between what happens and what we make of it.'],
    ['02', 'Privacy as architecture', 'Not a setting buried in a menu. A quieter default, built into the bones.'],
    ['03', 'Depth over frequency', 'Fewer things. Better conversations. Enough time for something real to take shape.'],
  ];
  return (
    <section className="bg-[#a3b6a6] py-24 text-[#202b3a] md:py-32">
      <div className="site-container">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#527164]" data-testid="text-practice-eyebrow">A different pace</p>
              <h2 className="display-serif mt-6 max-w-[620px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.05em]" data-testid="text-practice-heading">We’re practicing<br /><em>another way.</em></h2>
            </div>
            <p className="max-w-[260px] text-sm leading-[1.7] text-[#3e5b51]" data-testid="text-practice-intro">This is not a set of rules. It’s a set of choices we keep returning to.</p>
          </div>
        </Reveal>
        <div className="mt-20 border-t border-[#527164]/40">
          {practices.map(([number, title, copy], index) => (
            <Reveal key={number} className={`grid gap-5 border-b border-[#527164]/40 py-7 md:grid-cols-[100px_1fr_0.8fr] md:items-center reveal-delay-${index + 1}`}>
              <span className="font-mono text-xs text-[#527164]" data-testid={`text-practice-number-${index}`}>{number}</span>
              <h3 className="display-serif text-2xl md:text-3xl" data-testid={`text-practice-title-${index}`}>{title}</h3>
              <p className="max-w-[290px] text-sm leading-[1.65] text-[#3e5b51]" data-testid={`text-practice-copy-${index}`}>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="bg-[#f5f0e6] py-24 md:py-36">
      <div className="site-container">
        <Reveal>
          <div className="grid items-start gap-14 md:grid-cols-[1fr_1.05fr] md:gap-24">
            <div>
              <p className="eyebrow text-[#c9765c]" data-testid="text-community-eyebrow">The community</p>
              <h2 className="display-serif mt-7 text-[clamp(2.5rem,5vw,4.7rem)] leading-[1.06] tracking-[-0.05em] text-[#202b3a]" data-testid="text-community-heading">
                A small corner<br />of the internet.
              </h2>
              <div className="mt-10 h-px w-20 bg-[#c9765c]" />
              <p className="mt-7 max-w-[430px] text-[1.02rem] leading-[1.75] text-[#53606a]" data-testid="text-community-copy">
                We’re starting on Discord, intentionally. It’s familiar, flexible, and — for now — small enough to feel like a room instead of a crowd.
              </p>
              <a href={LINKS.discord} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#202b3a] link-underline" data-testid="link-community-discord">
                Visit us on Discord <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="relative min-h-[390px] bg-[#202b3a] p-7 text-[#f5f0e6] md:min-h-[460px] md:p-10">
              <div className="absolute right-8 top-8 h-16 w-16 border border-[#a3b6a6]/40" />
              <div className="absolute right-12 top-12 h-8 w-8 bg-[#c9765c]" />
              <MessageCircle className="absolute bottom-9 right-9 text-[#a3b6a6]" size={31} strokeWidth={1} />
              <p className="eyebrow text-[#a3b6a6]" data-testid="text-community-card-label">Inside the room</p>
              <p className="display-serif mt-16 max-w-[380px] text-[2rem] leading-[1.23] md:text-[2.65rem]" data-testid="text-community-card-quote">
                “A place to ask the question beneath the question.”
              </p>
              <div className="absolute bottom-9 left-7 right-7 border-t border-[#c7d0ca]/20 pt-4 md:left-10 md:right-10">
                <p className="text-xs leading-[1.6] text-[#c7d0ca]">Low-stakes check-ins. Unfinished thoughts. The kind of conversation that doesn’t need an audience.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-[#202b3a] py-24 text-[#f5f0e6] md:py-32">
      <div className="site-container">
        <Reveal>
          <div className="max-w-[720px]">
            <p className="eyebrow text-[#a3b6a6]" data-testid="text-approach-eyebrow">Community → insight → product</p>
            <h2 className="display-serif mt-7 text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.06] tracking-[-0.05em]" data-testid="text-approach-heading">Nothing about you,<br /><em>without you.</em></h2>
            <p className="mt-8 max-w-[530px] text-[1.03rem] leading-[1.75] text-[#c7d0ca]" data-testid="text-approach-copy">
              TrueNorth is being shaped in conversation with the people it hopes to serve. We listen first, look for patterns together, then build only what earns its place.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 grid border-t border-[#c7d0ca]/20 md:grid-cols-3">
          {[
            ['Community', 'We start with real people and the things they keep bringing up.'],
            ['Insight', 'We pay attention without pretending every feeling needs a feature.'],
            ['Product', 'We make small, careful tools that give something back.'],
          ].map(([title, copy], index) => (
            <Reveal key={title} className={`border-b border-[#c7d0ca]/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 reveal-delay-${index + 1}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#d48b71]">0{index + 1}</span>
                {index < 2 && <ChevronRight size={16} className="text-[#a3b6a6] md:hidden" />}
              </div>
              <h3 className="mt-8 text-lg font-bold" data-testid={`text-approach-title-${index}`}>{title}</h3>
              <p className="mt-3 max-w-[220px] text-sm leading-[1.7] text-[#aab8b0]" data-testid={`text-approach-copy-${index}`}>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WritingSection() {
  return (
    <section className="bg-[#e7dfd1] py-24 text-[#202b3a] md:py-32">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-24">
            <div>
              <BookOpen className="text-[#c9765c]" size={25} strokeWidth={1.2} />
              <p className="eyebrow mt-7 text-[#c9765c]" data-testid="text-writing-eyebrow">The writing channel</p>
            </div>
            <div>
              <h2 className="display-serif max-w-[640px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.07] tracking-[-0.05em]" data-testid="text-writing-heading">Some things need<br /><em>a longer sentence.</em></h2>
              <p className="mt-8 max-w-[550px] text-[1.02rem] leading-[1.75] text-[#53606a]" data-testid="text-writing-copy">
                Our Substack is where we make room for the thoughts that don’t belong in a caption. Notes on attention, friendship, identity, and making a life that feels like yours.
              </p>
              <a href={LINKS.substack} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold link-underline" data-testid="link-writing-substack">
                Read the notes <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CircleSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSent(true);
  };
  return (
    <section id="circle" className="bg-[#c9765c] py-24 text-[#202b3a] md:py-32">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <div>
              <LockKeyhole size={25} strokeWidth={1.2} />
              <p className="eyebrow mt-7 text-[#704438]" data-testid="text-circle-eyebrow">The Founding Circle</p>
            </div>
            <div>
              <h2 className="display-serif max-w-[670px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.05em]" data-testid="text-circle-heading">Small by design.<br /><em>Open by nature.</em></h2>
              <p className="mt-8 max-w-[540px] text-[1.02rem] leading-[1.75] text-[#704438]" data-testid="text-circle-copy">
                We’re inviting a first group of women and students to help set the tone. There are no perks to collect and no urgency to manufacture. Just a chance to help make a place you’d want to return to.
              </p>
              <form onSubmit={submit} className="mt-10 flex max-w-[510px] flex-col gap-3 sm:flex-row" aria-label="Join the Founding Circle">
                <label htmlFor="circle-email" className="sr-only">Email address</label>
                <input
                  id="circle-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => { setEmail(event.target.value); setSent(false); }}
                  placeholder="Your email address"
                  className="min-h-12 flex-1 border-b border-[#704438] bg-transparent px-0 text-sm text-[#202b3a] placeholder:text-[#845746] focus:border-[#202b3a] focus:outline-none"
                  data-testid="input-circle-email"
                />
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#202b3a] px-6 text-xs font-bold tracking-[0.08em] text-[#f5f0e6] transition-colors hover:bg-[#334356]" data-testid="button-circle-submit">
                  {sent ? <><Check size={15} /> YOU’RE ON THE LIST</> : <>I’M INTERESTED <ArrowUpRight size={15} /></>}
                </button>
              </form>
              <p className="mt-4 text-xs text-[#704438]" data-testid="text-circle-note">
                {sent ? 'Thank you. We’ll be in touch when there is something worth sharing.' : 'No newsletters. No inbox clutter. We’ll write when it matters.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#202b3a] py-14 text-[#f5f0e6]">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Logo light />
            <p className="display-serif mt-8 max-w-[420px] text-3xl leading-[1.2] md:text-4xl" data-testid="text-footer-heading">You don’t have to keep up.</p>
          </div>
          <div className="flex flex-col items-start gap-4 text-sm text-[#c7d0ca] md:items-end">
            <a href="#top" className="link-underline" data-testid="link-footer-top">Back to the beginning</a>
            <a href={LINKS.discord} target="_blank" rel="noreferrer" className="link-underline" data-testid="link-footer-discord">Discord</a>
            <a href={LINKS.substack} target="_blank" rel="noreferrer" className="link-underline" data-testid="link-footer-substack">Substack</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-[#c7d0ca]/20 pt-5 text-[0.64rem] tracking-[0.1em] text-[#aab8b0] sm:flex-row">
          <span data-testid="text-footer-copyright">TRUE NORTH, FOR THE QUIETER PART OF THE INTERNET</span>
          <span data-testid="text-footer-status">EARLY DAYS. TAKING OUR TIME.</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  useEffect(() => {
    document.title = 'TrueNorth — A calmer way to live';
    const description = 'A smaller, more genuine space for young women and students. TrueNorth is a calmer way to live online.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <div className="grain min-h-[100dvh] overflow-hidden">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <PracticeSection />
        <CommunitySection />
        <ApproachSection />
        <WritingSection />
        <CircleSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;