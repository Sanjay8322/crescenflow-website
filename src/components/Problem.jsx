import { motion } from 'framer-motion';

const fv = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Problem() {
  return (
    <section className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.span {...fv(0)} className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
          The Problem
        </motion.span>

        <motion.h2 {...fv(0.08)} className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.08] tracking-tight max-w-3xl">
          Referrals are great.{' '}
          <span className="font-serif font-normal italic text-accent">Until they stop.</span>
        </motion.h2>

        <motion.div
          {...fv(0.16)}
          className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-5"
        >
          <p className="text-base text-secondary leading-relaxed">
            You&apos;ve got a real offer. Clients get results. Word of mouth has kept you going.
          </p>
          <p className="text-base text-secondary leading-relaxed">
            But your next 3 months of revenue are completely unpredictable. You don&apos;t control the pipeline. The pipeline controls you.
          </p>
          <p className="text-base text-secondary leading-relaxed">
            You&apos;ve thought about LinkedIn outreach. Maybe you&apos;ve even tried it.
          </p>
          <p className="text-base text-secondary leading-relaxed">
            Sent a few connection requests. Copy-pasted a template. Got ignored or hit with an immediate &quot;not interested.&quot;
          </p>
          <p className="text-base italic text-secondary/60">
            And you concluded: LinkedIn doesn&apos;t work for my market.
          </p>
          <p className="text-base font-semibold text-primary">
            It doesn&apos;t work the way most people do it. Here&apos;s the difference.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
