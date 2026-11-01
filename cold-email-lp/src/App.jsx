import { motion } from 'framer-motion';
import CursorGlow from './CursorGlow';
import VideoPlayer from './VideoPlayer';

// Calendar link for the CTA button
const CALENDAR_URL = 'https://cal.com/sanjay-e/intro-call';

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <CursorGlow />

      {/* Background: cream gradient, grid, blobs (same as main site hero) */}
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
      <div className="blob-b absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full bg-accent/8 blur-[80px] pointer-events-none" />

      <main className="relative z-10 flex-1 px-6 md:px-12 lg:px-20 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div {...f(0)}>
            <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium bg-white/70 backdrop-blur-sm">
              Done-For-You Cold Email
            </span>
          </motion.div>

          <motion.h1
            {...f(0.1)}
            className="mt-7 font-bold text-primary leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-[56px]"
          >
            Performance-Based Cold Email:{' '}
            <span className="text-accent">
              Pay Only For Qualified Calls That Actually Show Up
            </span>
          </motion.h1>

          <motion.p
            {...f(0.2)}
            className="mt-6 text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We build the list, set up the sending, run the campaign and handle the replies. You only pay per showed call.
          </motion.p>

          {/* VSL */}
          <motion.div
            {...f(0.32)}
            className="mt-10 rounded-2xl overflow-hidden border border-border bg-primary shadow-[0_20px_60px_rgba(36,53,42,0.15)]"
          >
            <VideoPlayer src="/vsl.mov" />
          </motion.div>

          {/* CTA */}
          <motion.div {...f(0.44)} className="mt-10">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-primary text-white text-sm px-9 py-4 rounded-full font-semibold hover:bg-secondary transition-colors duration-200 text-center shadow-lg shadow-primary/20"
            >
              Book a Call With Me
            </a>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border bg-white/70 backdrop-blur-sm py-6 px-6 text-center">
        <p className="text-secondary/50 text-xs">
          Built for B2B companies selling to decision-makers with at least 5,000 reachable contacts.
        </p>
      </footer>
    </div>
  );
}
