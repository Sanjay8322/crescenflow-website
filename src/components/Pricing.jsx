import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            Pricing
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight max-w-3xl">
            Simple pricing.{' '}
            <span className="font-serif font-normal italic text-accent">You pay for tools. We earn on calls booked.</span>
          </h2>
        </motion.div>

        {/* Bento: 2 cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-12 grid md:grid-cols-2 gap-4"
        >
          {/* Card 1 — White */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[340px] shadow-sm">
            <div>
              <span className="text-xs font-semibold text-accent tracking-widest uppercase border border-border rounded-full px-3 py-1.5 bg-gray-50">
                Monthly
              </span>
              <h3 className="mt-6 text-xl font-bold text-primary tracking-tight">Tech & Management Fee</h3>
              <p className="mt-4 text-sm text-secondary leading-relaxed">
                Covers the outreach tools and platform costs that run your system: list building, research, message sending, and follow-up automation. You pay for the infrastructure. We handle everything on top of it.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-secondary/60 font-medium">Flat monthly fee. Covers all tooling and system management.</p>
            </div>
          </div>

          {/* Card 2 — Green accent (featured) */}
          <div className="bg-primary rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
            <div>
              <span className="text-xs font-semibold text-white/60 tracking-widest uppercase border border-white/20 rounded-full px-3 py-1.5">
                Performance
              </span>
              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">Per Qualified Call Booked</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                You only pay when we book a qualified call that meets your ICP criteria, not just anyone who shows up. You define what &quot;qualified&quot; means. We only charge when we deliver it.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/40 font-medium">Zero calls booked = zero call charges. Aligned incentives.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="mt-8"
        >
          <a
            href="#booking"
            className="block sm:inline-block w-full sm:w-auto text-center bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Send My First 50 Messages Free →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
