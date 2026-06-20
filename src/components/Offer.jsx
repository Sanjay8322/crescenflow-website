import { motion } from 'framer-motion';

export default function Offer() {
  return (
    <section className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-border rounded-2xl p-6 md:p-12 lg:p-16 shadow-sm"
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            Zero Risk
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight max-w-3xl">
            We send your first 50 messages free.{' '}
            <span className="font-serif font-normal italic text-accent">See results before you spend a dollar.</span>
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-5">
            <p className="text-base text-secondary leading-relaxed">
              Before you pay anything, we write and send your first 50 outreach messages to your exact ICP. Fully researched, personalized, and live in the market.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              No templates. No placeholders. Every message is written around a real, recent signal from that specific person&apos;s public record.
            </p>
            <p className="text-base italic text-secondary/60 leading-relaxed">
              If those 50 messages don&apos;t show you the difference, walk away. No hard sell. No follow-up sequence.
            </p>
            <p className="text-base font-semibold text-primary">
              Most people see the replies come in and immediately understand what they&apos;re getting.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#booking"
              className="block sm:inline-block w-full sm:w-auto text-center bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Send My First 50 Messages Free →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
