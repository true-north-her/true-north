import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene2() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(145deg, #e7dfd1 0%, #f5f0e6 52%, #d5dfd5 100%)', color: '#202b3a' }}
      initial={{ clipPath: 'circle(0% at 92% 12%)', opacity: 1 }}
      animate={{ clipPath: 'circle(150% at 92% 12%)', opacity: 1 }}
      exit={{ clipPath: 'circle(0% at 92% 12%)', opacity: 1 }}
      transition={{ duration: 0.95, ease }}
    >
      <motion.div
        className="tn-breathe"
        style={{ border: '1px solid rgba(82,113,100,.32)', borderRadius: '50%', height: '65vmin', position: 'absolute', right: '-26vmin', top: '-18vmin', width: '65vmin' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{ color: '#527164', left: '7vmin', position: 'absolute', top: '15vmin' }}
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease }}
      >
        <p className="tn-mono" style={{ margin: 0 }}>01 / A different reflex</p>
      </motion.div>
      <div style={{ position: 'absolute', right: '7vmin', top: '16vmin', width: '55vmin' }}>
        <motion.div
          className="tn-note"
          style={{ background: '#202b3a', color: '#f5f0e6', marginLeft: '13vmin', transform: 'rotate(3deg)', width: '34vmin' }}
          initial={{ opacity: 0, x: 35, rotate: 9 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ delay: 0.65, duration: 0.8, ease }}
        >
          <p className="tn-mono" style={{ color: '#a3b6a6', margin: 0 }}>Before the answer</p>
          <p className="tn-display" style={{ fontSize: 'clamp(1.2rem, 3.8vmin, 2.8rem)', lineHeight: 1.08, margin: '2.8vmin 0 0' }}>What happened?</p>
        </motion.div>
        <motion.div
          className="tn-note"
          style={{ marginTop: '-3vmin', transform: 'rotate(-4deg)', width: '40vmin' }}
          initial={{ opacity: 0, x: -28, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ delay: 1.05, duration: 0.9, ease }}
        >
          <p className="tn-mono" style={{ color: '#c9765c', margin: 0 }}>Make room</p>
          <p className="tn-display" style={{ fontSize: 'clamp(1.25rem, 4.1vmin, 3rem)', lineHeight: 1.08, margin: '2.8vmin 0 0' }}>What did it bring up?</p>
        </motion.div>
      </div>
      <motion.div
        style={{ bottom: '10vmin', left: '7vmin', position: 'absolute', width: '75vmin' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.75, ease }}
      >
        <h2 className="tn-display" style={{ fontSize: 'clamp(2.3rem, 8.8vmin, 6.5rem)', lineHeight: 0.98, margin: 0 }}>
          Reflection
          <br />
          <em style={{ color: '#c9765c' }}>before reaction.</em>
        </h2>
        <p style={{ color: '#53606a', fontSize: 'clamp(.78rem, 1.8vmin, 1.15rem)', lineHeight: 1.6, margin: '3vmin 0 0', maxWidth: '46vmin' }}>
          A little more room between what happens and what we make of it.
        </p>
      </motion.div>
    </motion.div>
  );
}
