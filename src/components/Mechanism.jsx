import { motion } from 'framer-motion';

export default function Mechanism() {
  return (
    <section className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            The Difference
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight max-w-3xl">
            Generic outreach gets ignored.{' '}
            <span className="font-serif font-normal italic text-accent">Ours doesn&apos;t.</span>
          </h2>
        </motion.div>

        {/* Bento: 2 large cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-10 grid md:grid-cols-2 gap-4"
        >
          <div className="bg-white border border-border rounded-2xl p-6 md:p-10 shadow-sm">
            <p className="text-base text-secondary leading-relaxed">Most LinkedIn outreach fails for one reason: it&apos;s obviously templated.</p>
            <p className="mt-5 text-base text-secondary leading-relaxed">Your prospect can tell in 3 seconds that you didn&apos;t read anything about them. So they ignore it.</p>
            <p className="mt-5 text-base font-semibold text-primary">We do something different.</p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 md:p-10 shadow-sm flex flex-col">
            <p className="text-base text-secondary leading-relaxed">Before we write a single message, we research each prospect: their recent podcast interviews, press coverage, LinkedIn content, company announcements. We find the specific thing they said or did in the last 6 months that connects to why they&apos;d need what you sell.</p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-base font-semibold italic text-primary">
                &ldquo;Then we write a message so specific that when they read it, they think: this person actually paid attention.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="mt-5 text-base text-secondary leading-relaxed"
        >
          That&apos;s why our messages get replies. Not tricks. Not a better template. Just genuine relevance at scale.
        </motion.p>

      </div>
    </section>
  );
}
