import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Booking() {
  useEffect(() => {
    if (window.Cal) return; // already loaded

    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement('script');
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, [L, namespace, ar[2]]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', { origin: 'https://cal.com' });
    window.Cal('inline', {
      elementOrSelector: '#cal-inline',
      calLink: 'sanjay-e/intro-call',
      layout: 'month_view',
    });
    window.Cal('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <section
      id="booking"
      className="bg-white py-14 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex border border-border rounded-full px-4 py-1.5 text-xs text-accent tracking-widest uppercase font-medium">
            Book a Call
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-[1.08] tracking-tight">
            Let&apos;s talk about your pipeline.{' '}
            <span className="font-serif font-normal italic text-accent">
              30 minutes, no pitch.
            </span>
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl leading-relaxed">
            We&apos;ll walk through your ICP, your current pipeline, and show you exactly how we&apos;d run outbound for your business. Your first 50 messages go out free after the call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="mt-10 rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <div
            id="cal-inline"
            style={{ width: '100%', height: '660px', overflowY: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
