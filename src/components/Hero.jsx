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
    <section className="relative min-h-screen flex items-center pt-32 pb-14 md:pt-36 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Cream gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEE7DF]/40 via-white to-white pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(71,124,94,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(71,124,94,0.055) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Animated cream blob — top left */}
      <div className="blob-a absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#EEE7DF]/60 blur-[90px] pointer-events-none" />

      {/* Animated green blob — bottom right */}
      <div className="blob-b absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full bg-accent/8 blur-[80px] pointer-events-none" />

      {/* Fade-out bottom edge so it blends into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">

        <motion.div {...f(0)}>
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium bg-white/70 backdrop-blur-sm">
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
            <a href="#booking" className="w-full sm:w-auto bg-primary text-white text-sm px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors duration-200 text-center shadow-lg shadow-primary/20">
              Send My First 50 Messages Free →
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto border border-border text-primary text-sm px-7 py-3.5 rounded-full font-semibold hover:bg-white/80 transition-colors duration-200 text-center bg-white/50 backdrop-blur-sm">
              See How It Works
            </a>
          </div>
          <p className="text-xs text-secondary/40 mt-4 max-w-sm mx-auto">
            No commitment. Your first 50 outreach messages, written and sent free, before you decide anything.
          </p>
        </motion.div>

        {/* Stat bento */}
        <motion.div {...f(0.35)} className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white/70 backdrop-blur-md border border-border rounded-2xl shadow-sm overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((s) => (
              <motion.div
                key={s.value}
                whileHover={{ backgroundColor: 'rgba(238,231,223,0.35)' }}
                transition={{ duration: 0.2 }}
                className="px-8 py-8 flex flex-col items-center text-center cursor-default"
              >
                <div className="w-5 h-0.5 bg-accent rounded-full mb-4" />
                <p className="text-xl font-bold text-primary tracking-tight">{s.value}</p>
                <p className="text-xs text-secondary/50 mt-2 tracking-widest uppercase font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
