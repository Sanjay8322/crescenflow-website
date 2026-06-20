import { motion } from 'framer-motion';

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: '20-35%', label: 'Connection acceptance rate' },
  { value: '15-30%', label: 'Reply rate on first touch' },
  { value: 'No retainer', label: 'Pay only per call booked' },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-24 pb-14 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto w-full text-center">

        <motion.div {...f(0)}>
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            Done-For-You LinkedIn Outbound
          </span>
        </motion.div>

        <motion.h1
          {...f(0.1)}
          className="mt-7 font-bold text-primary leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-[56px]"
        >
          We Book You 5-10 Qualified Sales Calls Per Month.{' '}
          <span className="font-serif font-normal italic text-accent">
            Pay Only When a Call Is Booked.
          </span>
        </motion.h1>

        <motion.div {...f(0.22)} className="mt-8">
          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Done-for-you outbound. We research your buyers, write every message, and send it. You just show up to calls.
          </p>
          <p className="text-secondary/60 text-sm mt-2">
            For B2B founders and sales leaders with a proven offer who are tired of chasing referrals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a href="#booking" className="w-full sm:w-auto bg-primary text-white text-sm px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 text-center">
              Send My First 50 Messages Free →
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto border border-border text-primary text-sm px-7 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 text-center">
              See How It Works
            </a>
          </div>
          <p className="text-xs text-secondary/40 mt-4 max-w-sm mx-auto">
            No commitment. Your first 50 outreach messages, written and sent free, before you decide anything.
          </p>
        </motion.div>

        {/* Stat bento */}
        <motion.div
          {...f(0.35)}
          className="mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white border border-border rounded-2xl shadow-sm overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((s) => (
              <div key={s.value} className="px-8 py-8 flex flex-col items-center text-center">
                <div className="w-5 h-0.5 bg-accent rounded-full mb-4" />
                <p className="text-xl font-bold text-primary tracking-tight">{s.value}</p>
                <p className="text-xs text-secondary/50 mt-2 tracking-widest uppercase font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
