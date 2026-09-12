import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene4() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(135deg, #f5f0e6 0%, #e7dfd1 54%, #cddbcf 100%)', color: '#202b3a' }}
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: 1 }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
      exit={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 1 }}
      transition={{ duration: 1, ease }}
    >
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/truenorth-window-study.png`}
        alt=""
        style={{ height: '62vmin', objectFit: 'cover', opacity: 0.46, position: 'absolute', right: '-4vmin', top: '8vmin', width: '62vmin' }}
        initial={{ opacity: 0, scale: 1.14, rotate: 4 }}
        animate={{ opacity: 0.46, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 1.2, ease }}
      />
      <motion.div
        style={{ left: '7vmin', position: 'absolute', top: '14vmin', width: '80vmin' }}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease }}
      >
        <p className="tn-mono" style={{ color: '#c9765c', margin: 0 }}>03 / A slower signal</p>
        <h2 className="tn-display" style={{ fontSize: 'clamp(2.25rem, 9.8vmin, 7.2rem)', lineHeight: 0.95, margin: '3vmin 0 0', maxWidth: '68vmin' }}>
          Depth
          <br />
          <em style={{ color: '#527164' }}>over frequency.</em>
        </h2>
      </motion.div>
      <motion.div
        style={{ bottom: '10vmin', left: '7vmin', position: 'absolute', width: '70vmin' }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.75, ease }}
      >
        <span className="tn-line" style={{ color: '#c9765c', marginBottom: '2.5vmin', width: '28vmin' }} />
        <p style={{ color: '#53606a', fontSize: 'clamp(.82rem, 2vmin, 1.25rem)', lineHeight: 1.55, margin: 0, maxWidth: '48vmin' }}>
          Fewer things. Better conversations. Enough time for something real to take shape.
        </p>
      </motion.div>
      <motion.div
        style={{ bottom: '11vmin', position: 'absolute', right: '8vmin' }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ display: 'flex', gap: '1.2vmin' }}>
          {[0, 1, 2].map((dot) => <span key={dot} style={{ background: dot === 2 ? '#c9765c' : '#527164', borderRadius: '50%', display: 'block', height: '1.2vmin', width: '1.2vmin' }} />)}
        </div>
      </motion.div>
    </motion.div>
  );
}
