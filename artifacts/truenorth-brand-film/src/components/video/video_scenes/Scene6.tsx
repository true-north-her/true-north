import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  ['01', 'Community', 'Start with real people.'],
  ['02', 'Insight', 'Notice what keeps returning.'],
  ['03', 'Product', 'Build only what earns its place.'],
];

export function Scene6() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(135deg, #c9765c 0%, #d48b71 43%, #e7dfd1 100%)', color: '#202b3a' }}
      initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 1 }}
      animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
      exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 1 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.img
        src={`${import.meta.env.BASE_URL}favicon.svg`}
        alt=""
        style={{ height: '24vmin', opacity: 0.16, position: 'absolute', right: '9vmin', top: '10vmin', width: '24vmin' }}
        initial={{ opacity: 0, rotate: -25, scale: 0.6 }}
        animate={{ opacity: 0.16, rotate: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 1.2, ease }}
      />
      <motion.div
        style={{ left: '7vmin', position: 'absolute', top: '12vmin' }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease }}
      >
        <p className="tn-mono" style={{ color: '#704438', margin: 0 }}>The way we make</p>
        <h2 className="tn-display" style={{ fontSize: 'clamp(2rem, 7.2vmin, 5.2rem)', lineHeight: 1, margin: '3vmin 0 0', maxWidth: '72vmin' }}>
          Nothing about you,
          <br />
          <em style={{ color: '#527164' }}>without you.</em>
        </h2>
      </motion.div>
      <motion.div
        style={{ bottom: '10vmin', display: 'grid', gap: '1.3vmin', gridTemplateColumns: 'repeat(3, 1fr)', left: '7vmin', position: 'absolute', width: '86vmin' }}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.85, ease }}
      >
        {stages.map(([number, title, copy], index) => (
          <div key={title} style={{ borderTop: '1px solid rgba(32,43,58,.52)', paddingTop: '2vmin' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <span className="tn-mono" style={{ color: '#704438' }}>{number}</span>
              {index < 2 && <span style={{ color: '#527164', fontSize: '2.5vmin' }}>→</span>}
            </div>
            <p className="tn-display" style={{ fontSize: 'clamp(1rem, 2.9vmin, 2rem)', lineHeight: 1.1, margin: '2.4vmin 0 0' }}>{title}</p>
            <p style={{ color: '#704438', fontSize: 'clamp(.6rem, 1.5vmin, .95rem)', lineHeight: 1.4, margin: '1.2vmin 0 0', maxWidth: '21vmin' }}>{copy}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
