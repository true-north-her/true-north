import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene5() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(145deg, #202b3a 0%, #1f3740 58%, #527164 100%)', color: '#f5f0e6' }}
      initial={{ clipPath: 'circle(0% at 6% 90%)', opacity: 1 }}
      animate={{ clipPath: 'circle(150% at 6% 90%)', opacity: 1 }}
      exit={{ clipPath: 'circle(0% at 6% 90%)', opacity: 1 }}
      transition={{ duration: 1.05, ease }}
    >
      <motion.div
        style={{ border: '1px solid rgba(163,182,166,.35)', height: '55vmin', left: '7vmin', position: 'absolute', top: '18vmin', width: '72vmin' }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 1.1, ease }}
      />
      <motion.div
        style={{ background: '#a3b6a6', height: '1px', left: '7vmin', position: 'absolute', top: '45vmin', width: '72vmin' }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 1.2, ease }}
      />
      <motion.div
        style={{ background: '#c9765c', height: '2.7vmin', left: '68vmin', position: 'absolute', top: '30vmin', width: '2.7vmin' }}
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.95, type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.div
        style={{ left: '7vmin', position: 'absolute', top: '14vmin' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease }}
      >
        <p className="tn-mono" style={{ color: '#a3b6a6', margin: 0 }}>A small corner of the internet</p>
      </motion.div>
      <motion.div
        style={{ bottom: '10vmin', left: '7vmin', position: 'absolute', width: '79vmin' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.12, duration: 0.8, ease }}
      >
        <h2 className="tn-display" style={{ fontSize: 'clamp(2.2rem, 8.4vmin, 6.1rem)', lineHeight: 0.98, margin: 0, maxWidth: '72vmin' }}>
          A room,
          <br />
          <em style={{ color: '#d48b71' }}>not a crowd.</em>
        </h2>
        <div style={{ alignItems: 'center', display: 'flex', gap: '2vmin', marginTop: '3vmin' }}>
          <span style={{ border: '1px solid #a3b6a6', borderRadius: '50%', height: '3.4vmin', position: 'relative', width: '3.4vmin' }}>
            <span style={{ background: '#c9765c', borderRadius: '50%', height: '0.8vmin', left: '50%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', width: '0.8vmin' }} />
          </span>
          <p className="tn-smallcaps" style={{ color: '#c7d0ca', margin: 0 }}>Discord / the community home</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
