import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary rounded-2xl p-7 md:p-14 lg:p-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.08] tracking-tight">
              Your first 50 messages,{' '}
              <span className="font-serif font-normal italic text-white/70">
                written and sent for free.
              </span>
            </h2>

            <div className="mt-8 space-y-2">
              <p className="text-sm text-white/60 leading-relaxed">We research your ICP, write every message, and send them on your behalf. Free.</p>
              <p className="text-sm text-white/60 leading-relaxed">No commitment. Just real outreach in the market so you can see the quality firsthand.</p>
              <p className="text-sm text-white/60 leading-relaxed">If you like what you see, we talk about making it ongoing.</p>
            </div>

            <div className="mt-10">
              <a
                href="#booking"
                className="block sm:inline-block w-full sm:w-auto text-center bg-white text-primary px-9 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Book Your Intro Call →
              </a>
              <p className="mt-4 text-white/30 text-sm">
                30 minutes. We&apos;ll show you exactly how we&apos;d run outbound for your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
