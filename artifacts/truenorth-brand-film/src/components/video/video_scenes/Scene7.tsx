import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene7() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(132deg, #202b3a 0%, #273c47 55%, #527164 100%)', color: '#f5f0e6' }}
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 1 }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
      exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 0 }}
      transition={{ duration: 1.05, ease }}
    >
      <motion.div
        style={{ border: '1px solid rgba(163,182,166,.36)', borderRadius: '50%', height: '68vmin', position: 'absolute', right: '-25vmin', top: '-18vmin', width: '68vmin' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 1.2, ease }}
      />
      <motion.div
        style={{ background: '#c9765c', height: '3vmin', position: 'absolute', right: '18vmin', top: '33vmin', width: '3vmin' }}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.div
        style={{ left: '7vmin', position: 'absolute', top: '18vmin' }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease }}
      >
        <p className="tn-mono" style={{ color: '#a3b6a6', margin: 0 }}>Starting small / early days</p>
        <h2 className="tn-display" style={{ fontSize: 'clamp(2.7rem, 11vmin, 8rem)', lineHeight: 0.95, margin: '4vmin 0 0', maxWidth: '75vmin' }}>
          The Founding
          <br />
          <em style={{ color: '#d48b71' }}>Circle.</em>
        </h2>
      </motion.div>
      <motion.div
        style={{ bottom: '10vmin', left: '7vmin', position: 'absolute', width: '74vmin' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.75, ease }}
      >
        <p style={{ color: '#c7d0ca', fontSize: 'clamp(.8rem, 2vmin, 1.25rem)', lineHeight: 1.55, margin: 0, maxWidth: '47vmin' }}>
          No urgency to manufacture. Just a first group helping set the tone for a place they’d want to return to.
        </p>
        <span className="tn-line" style={{ color: '#a3b6a6', margin: '4vmin 0 3vmin', width: '31vmin' }} />
        <p className="tn-display" style={{ fontSize: 'clamp(1.6rem, 4.6vmin, 3.4rem)', lineHeight: 1.1, margin: 0 }}>You don’t have to keep up.</p>
      </motion.div>
    </motion.div>
  );
}
