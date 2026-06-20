import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: '58', label: 'Cold DMs sent' },
  { value: '25.9%', label: 'Response rate' },
  { value: '2', label: 'Calls booked in 6 days' },
];

const results = [
  { metric: 'Total DMs Sent', value: '58' },
  { metric: 'Total Responses', value: '15' },
  { metric: 'Response Rate', value: '25.9%', highlight: true },
  { metric: 'Calls Booked', value: '2' },
  { metric: 'Positive / Engaged Responses', value: '11' },
  { metric: 'Not Interested', value: '3' },
  { metric: 'Cold LinkedIn Benchmark', value: '3–5%' },
  { metric: 'Our Rate vs. Benchmark', value: '5–8x higher', highlight: true },
];

const responseBreakdown = [
  { category: 'Call Booked', count: '2' },
  { category: 'Interested (explicit)', count: '7' },
  { category: 'Routed to decision maker', count: '2' },
  { category: 'Needs to verify internally', count: '1' },
  { category: 'Not Interested', count: '3' },
  { category: 'Not in Role', count: '1' },
];

const notableResponses = [
  {
    name: 'John Partin',
    role: 'Board Director, Schneider Electric',
    industry: 'Manufacturing',
    result: 'Call confirmed within 24 hours. Availability shared same day. Calendar link sent.',
  },
  {
    name: 'Joel Kanter',
    role: 'Board Director,Alliance Healthcare',
    industry: 'Healthcare',
    result: 'Responded as interested, call booked.',
  },
  {
    name: 'Howard Brod Brownstein',
    role: 'Board Director,Manufacturing',
    industry: 'Manufacturing',
    result: 'Responded "Interested" within the campaign window.',
  },
  {
    name: 'Chris Kern',
    role: 'Board Director,Financial Services',
    industry: 'Financial Services',
    result: 'Responded "Interested."',
  },
  {
    name: 'Kelly DePonte',
    role: 'Board Director,IMDDA',
    industry: 'Financial Services',
    result: 'Responded "Interested."',
  },
  {
    name: 'Nicholas D\'Ambrosio',
    role: 'Board Director,NOMADICS',
    industry: 'Defense Technology',
    result: 'Responded "Interested."',
  },
];

const whyItWorked = [
  {
    number: '01',
    title: 'Regulatory trigger, not product pitch',
    body: 'Every message opened with a real, sourced regulatory pressure signal: a law the company is subject to, a peer breach in their exact industry, or a governance gap documented by a public regulator. The prospect read a peer flagging something real, not a vendor pitch.',
  },
  {
    number: '02',
    title: 'Board-specific framing',
    body: 'The message spoke to fiduciary duty, not technology. Board Directors think in terms of liability, Caremark doctrine, D&O insurance, and SEC filings. The message met them in that language.',
  },
  {
    number: '03',
    title: 'Zero-friction offer',
    body: '"Want me to send the free assessment link?" requires no commitment. No "hop on a call," no "schedule a demo." A self-serve, instant assessment was the CTA. Genuinely useful on its own.',
  },
  {
    number: '04',
    title: 'Speed at scale without sacrificing quality',
    body: '23 messages sent on Day 1. Each backed by 15–20 sources, verified claims, and a communication style profile of the individual. That ratio is only possible with the AI research pipeline.',
  },
  {
    number: '05',
    title: 'Peer-to-peer sender',
    body: 'All messages went from the CEO\'s LinkedIn. A peer-to-peer message from an executive talking to another executive lands differently than an SDR cold DM.',
  },
];

const economics = [
  { metric: 'Cost', traditional: '~$80K–$120K/year SDR salary', crescenflow: 'Pay per call booked' },
  { metric: 'Response rate', traditional: '3–5%', crescenflow: '25.9%' },
  { metric: 'Research per prospect', traditional: '2–4 hrs manual', crescenflow: 'Automated, minutes' },
  { metric: 'Daily message volume', traditional: '10–15 max', crescenflow: '20–30' },
  { metric: 'Consistency', traditional: 'Varies by rep', crescenflow: 'QA\'d, sourced, consistent' },
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEE7DF]/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(71,124,94,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(71,124,94,0.055) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="blob-a absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#EEE7DF]/60 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...f(0)}>
            <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium bg-white/70 backdrop-blur-sm">
              Case Study · IpServices / ITPI
            </span>
          </motion.div>

          <motion.h1
            {...f(0.1)}
            className="mt-7 font-bold text-primary leading-[1.1] tracking-tight text-4xl md:text-5xl"
          >
            25.9% Response Rate{' '}
            <span className="font-serif font-normal italic text-accent">
              in 6 Days
            </span>
          </motion.h1>

          <motion.p {...f(0.2)} className="mt-5 text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Cold LinkedIn outreach to Board Directors at mid-market companies.
            No SDR team. No paid ads. Zero manual research.
          </motion.p>

          <motion.div {...f(0.3)} className="mt-4 flex flex-wrap gap-2 justify-center text-xs text-secondary/50 font-medium tracking-widest uppercase">
            <span>Financial Services</span><span>·</span>
            <span>Healthcare</span><span>·</span>
            <span>Manufacturing</span><span>·</span>
            <span>Defense Technology</span><span>·</span>
            <span>FinTech</span>
          </motion.div>

          <motion.div {...f(0.4)} className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-white/70 backdrop-blur-md border border-border rounded-2xl shadow-sm overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-border">
              {stats.map((s) => (
                <motion.div
                  key={s.value}
                  whileHover={{ backgroundColor: 'rgba(238,231,223,0.35)' }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-8 flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-5 h-0.5 bg-accent rounded-full mb-4" />
                  <p className="text-2xl font-bold text-primary tracking-tight">{s.value}</p>
                  <p className="text-xs text-secondary/50 mt-2 tracking-widest uppercase font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...f(0)} viewport={{ once: true }} className="mb-3">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">The Problem</span>
          </motion.div>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
            Cold outreach to board-level executives doesn't work.{' '}
            <span className="font-serif font-normal italic text-accent">Until it does.</span>
          </motion.h2>
          <motion.div {...f(0.1)} viewport={{ once: true }} className="space-y-4 text-secondary leading-relaxed">
            <p>
              The average response rate for cold LinkedIn DMs is <strong>3–5%</strong>. Most messages are generic, badly timed, and written for a persona, not a person.
            </p>
            <p>
              Board Directors, Audit Committee Chairs, CEOs, and CFOs ignore 95%+ of cold outreach because it reads like a vendor pitch. IpServices needed a way to reach senior board directors at mid-market companies ($50M–$500M revenue) and open real conversations about board-level cybersecurity fiduciary exposure, without an SDR team or paid ads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#EEE7DF]/20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...f(0)} viewport={{ once: true }} className="mb-3">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">The Solution</span>
          </motion.div>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
            AI Research-to-Message Pipeline
          </motion.h2>
          <motion.p {...f(0.1)} viewport={{ once: true }} className="text-secondary mb-10 leading-relaxed">
            A fully automated outreach pipeline that eliminates manual research, writes messages that read like they came from a trusted advisor, and runs QA on every claim before anything gets sent.
          </motion.p>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Deep Research',
                body: 'Each prospect gets a dedicated web research report: current title verification, company news, regulatory pressure signals, peer breach events, governance gap indicators, and communication style profile. All sourced and cited.',
              },
              {
                step: '02',
                title: 'Message Generation',
                body: 'A personalized LinkedIn DM is written for each prospect based on the research. Opens with a specific trigger, never pitches a product, ends with a low-friction CTA.',
              },
              {
                step: '03',
                title: 'Humanize Check',
                body: 'Every message is scanned for AI writing patterns (hedging phrases, corporate jargon, over-structured language) and rewritten in-place where flagged.',
              },
              {
                step: '04',
                title: 'QA Verification',
                body: 'Every personalization claim is verified: source URL liveness, date freshness, role still active, and claim specificity. Nothing gets sent with a stale or unverifiable hook.',
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                {...f(0.05)}
                viewport={{ once: true }}
                className="flex gap-5 bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{item.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">{item.title}</p>
                  <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...f(0)} viewport={{ once: true }} className="mb-3">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">The Results</span>
          </motion.div>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-2">
            6 days. 58 messages.{' '}
            <span className="font-serif font-normal italic text-accent">Zero SDRs.</span>
          </motion.h2>
          <motion.p {...f(0.1)} viewport={{ once: true }} className="text-secondary mb-10 leading-relaxed">
            All messages sent from the CEO's LinkedIn to Board Directors at mid-market companies across 11+ industries.
          </motion.p>

          {/* Results table */}
          <motion.div {...f(0.15)} viewport={{ once: true }} className="border border-border rounded-2xl overflow-hidden shadow-sm mb-8">
            {results.map((row, i) => (
              <div
                key={row.metric}
                className={`flex justify-between items-center px-6 py-4 ${i !== results.length - 1 ? 'border-b border-border' : ''} ${row.highlight ? 'bg-accent/5' : 'bg-white'}`}
              >
                <span className="text-sm text-secondary">{row.metric}</span>
                <span className={`text-sm font-bold ${row.highlight ? 'text-accent' : 'text-primary'}`}>{row.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Response breakdown */}
          <motion.h3 {...f(0.2)} viewport={{ once: true }} className="text-lg font-semibold text-primary mb-4">
            Response Breakdown
          </motion.h3>
          <motion.div {...f(0.25)} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
            {responseBreakdown.map((r) => (
              <div key={r.category} className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
                <p className="text-xl font-bold text-primary">{r.count}</p>
                <p className="text-xs text-secondary/60 mt-1 leading-snug">{r.category}</p>
              </div>
            ))}
          </motion.div>

          {/* Notable responses */}
          <motion.h3 {...f(0.3)} viewport={{ once: true }} className="text-lg font-semibold text-primary mb-4">
            Notable Responses
          </motion.h3>
          <div className="space-y-3">
            {notableResponses.map((r) => (
              <motion.div
                key={r.name}
                {...f(0.05)}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{r.name}</p>
                    <p className="text-xs text-secondary/60 mb-2">{r.role} · {r.industry}</p>
                    <p className="text-sm text-secondary leading-relaxed">{r.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it worked */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#EEE7DF]/20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...f(0)} viewport={{ once: true }} className="mb-3">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">The Breakdown</span>
          </motion.div>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-10">
            Why it worked
          </motion.h2>
          <div className="space-y-5">
            {whyItWorked.map((item) => (
              <motion.div
                key={item.number}
                {...f(0.05)}
                viewport={{ once: true }}
                className="flex gap-6 bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-accent/20">{item.number}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">{item.title}</p>
                  <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...f(0)} viewport={{ once: true }} className="mb-3">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">The Economics</span>
          </motion.div>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-10">
            vs. a traditional SDR
          </motion.h2>

          <motion.div {...f(0.1)} viewport={{ once: true }} className="border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#EEE7DF]/40 border-b border-border">
              <div className="px-5 py-3 text-xs font-semibold text-secondary/60 uppercase tracking-widest"></div>
              <div className="px-5 py-3 text-xs font-semibold text-secondary/60 uppercase tracking-widest border-l border-border">Traditional SDR</div>
              <div className="px-5 py-3 text-xs font-semibold text-accent uppercase tracking-widest border-l border-border">CrescenFlow</div>
            </div>
            {economics.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 ${i !== economics.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="px-5 py-4 text-sm font-medium text-secondary">{row.metric}</div>
                <div className="px-5 py-4 text-sm text-secondary/60 border-l border-border">{row.traditional}</div>
                <div className="px-5 py-4 text-sm font-semibold text-accent border-l border-border">{row.crescenflow}</div>
              </div>
            ))}
          </motion.div>

          <motion.p {...f(0.2)} viewport={{ once: true }} className="mt-6 text-sm text-secondary/60 leading-relaxed">
            Two confirmed calls from 58 cold DMs means a potential $30K–$50K in near-term pipeline from less than a week of outreach, before any follow-up sequences are in place.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span {...f(0)} viewport={{ once: true }} className="inline-flex border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/60 tracking-widest uppercase font-medium mb-6">
            Want results like this?
          </motion.span>
          <motion.h2 {...f(0.05)} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Your first 50 messages,{' '}
            <span className="font-serif font-normal italic text-[#EEE7DF]">written and sent free.</span>
          </motion.h2>
          <motion.p {...f(0.1)} viewport={{ once: true }} className="text-white/60 text-base mb-8 leading-relaxed">
            No commitment. No retainer. We research your buyers, write every message, and send it. You just show up to calls.
          </motion.p>
          <motion.div {...f(0.15)} viewport={{ once: true }}>
            <a
              href="/#booking"
              className="inline-block bg-white text-primary text-sm px-8 py-4 rounded-full font-semibold hover:bg-[#EEE7DF] transition-colors duration-200 shadow-lg"
            >
              Send My First 50 Messages Free →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
