import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'We Build Your List',
    body: 'We identify your exact ICP using Sales Navigator filters you approve. We research and verify each prospect (active, qualified, and reachable) before we write a single word.',
    large: true,
  },
  {
    num: '02',
    title: 'We Write Your Cold Traffic Offer',
    body: 'We craft every outreach message around a real, recent signal from each prospect: something they said, published, or announced. Connection note, DM, follow-up cadence. Not templates. A system designed to convert cold strangers into conversations.',
    large: false,
  },
  {
    num: '03',
    title: 'We Manage Everything',
    body: "We send the messages, track replies, handle objections, and manage the follow-up sequence. Inbox management, reply routing, and re-engagement, all handled. You don't touch the outreach side.",
    large: false,
  },
  {
    num: '04',
    title: 'You Show Up to Calls',
    body: 'When someone is ready to talk, we hand them off to you. You focus on closing, not prospecting.',
    large: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const hoverLight = { y: -5, boxShadow: '0 16px 40px rgba(36,53,42,0.10)', transition: { duration: 0.22 } };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            How It Works
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight">
            Four steps.{' '}
            <span className="font-serif font-normal italic text-accent">You&apos;re barely involved.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* 01 — large */}
          <motion.div variants={cardVariants} whileHover={hoverLight} className="md:col-span-2 bg-white border border-border rounded-2xl p-6 md:p-10 flex flex-col gap-5 min-h-[200px] md:min-h-[260px] shadow-sm cursor-default">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-border text-xs font-semibold text-accent bg-[#EEE7DF]/40">
              01
            </span>
            <div>
              <h3 className="text-xl font-bold text-primary tracking-tight">{steps[0].title}</h3>
              <p className="mt-3 text-sm text-secondary leading-relaxed">{steps[0].body}</p>
            </div>
          </motion.div>

          {/* 02 — small */}
          <motion.div variants={cardVariants} whileHover={hoverLight} className="bg-white border border-border rounded-2xl p-6 md:p-10 flex flex-col gap-5 min-h-[200px] md:min-h-[260px] shadow-sm cursor-default">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-border text-xs font-semibold text-accent bg-[#EEE7DF]/40">
              02
            </span>
            <div>
              <h3 className="text-lg font-bold text-primary tracking-tight mt-6">{steps[1].title}</h3>
              <p className="mt-3 text-sm text-secondary leading-relaxed">{steps[1].body}</p>
            </div>
          </motion.div>

          {/* 03 — small */}
          <motion.div variants={cardVariants} whileHover={hoverLight} className="bg-white border border-border rounded-2xl p-6 md:p-10 flex flex-col gap-5 min-h-[200px] md:min-h-[260px] shadow-sm cursor-default">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-border text-xs font-semibold text-accent bg-[#EEE7DF]/40">
              03
            </span>
            <div>
              <h3 className="text-lg font-bold text-primary tracking-tight mt-6">{steps[2].title}</h3>
              <p className="mt-3 text-sm text-secondary leading-relaxed">{steps[2].body}</p>
            </div>
          </motion.div>

          {/* 04 — large, green accent */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(36,53,42,0.25)', transition: { duration: 0.22 } }}
            className="md:col-span-2 bg-primary rounded-2xl p-10 flex flex-col gap-6 min-h-[260px] cursor-default"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/20 text-xs font-semibold text-white/60">
              04
            </span>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{steps[3].title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{steps[3].body}</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
