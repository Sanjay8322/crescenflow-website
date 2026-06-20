import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "I've tried LinkedIn outreach before and got no responses.",
    a: "Most LinkedIn outreach fails because it's templated and obvious. Ours isn't. Every message is researched and written around something real and recent about that specific person. The difference in reply rates isn't incremental. It's categorical.",
  },
  {
    q: "How do I know the quality will match my ICP?",
    a: "That's exactly why we send the first 50 messages free. Before you pay, real messages go out to real prospects in your ICP. You see the quality, the personalization, and the replies. Then you decide.",
  },
  {
    q: "Do I have to do anything after I sign on?",
    a: "Initial onboarding is about 30 minutes: we capture your ICP, your offer, and your tone. After that, we run it. You review calls, not tasks.",
  },
  {
    q: "What if I don't get any calls in a month?",
    a: "You only pay per qualified call booked. If we book zero, you pay the tech & management fee only. We're motivated to book calls. That's where we make money.",
  },
  {
    q: "Who is this for?",
    a: "B2B service businesses with a proven offer and deal sizes above $2K. Consultants, agencies, SaaS companies, professional services. If you rely on referrals and want a predictable second channel, this is built for you.",
  },
  {
    q: "How fast does it start working?",
    a: "First list goes out within 5 to 7 days of onboarding. Calls typically start appearing in week 2 to 3. Full cadence (with follow-ups) hits by week 4.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight">
            Common questions.
          </h2>
        </motion.div>

        <div className="mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`${i < faqs.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-5 md:px-8 md:py-6 text-left cursor-pointer group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-semibold text-primary text-sm md:text-base pr-6 leading-snug group-hover:text-accent transition-colors duration-150">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 border border-border text-secondary/60">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="ans"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="px-5 pb-5 md:px-8 md:pb-7 text-sm text-secondary/80 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
