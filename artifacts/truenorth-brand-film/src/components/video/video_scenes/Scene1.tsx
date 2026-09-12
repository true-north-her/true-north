import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene1() {
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(132deg, #202b3a 0%, #253847 58%, #31433e 100%)' }}
      initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
      animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
      exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/truenorth-paper-ripples.png`}
        alt=""
        className="tn-drift"
        style={{
          height: '70vmin',
          objectFit: 'cover',
          opacity: 0.3,
          position: 'absolute',
          right: '-12vmin',
          top: '20vmin',
          width: '70vmin',
        }}
        initial={{ opacity: 0, scale: 1.18, rotate: -8 }}
        animate={{ opacity: 0.3, scale: 1, rotate: -3 }}
        transition={{ delay: 0.25, duration: 1.3, ease }}
      />
      <motion.div
        style={{
          border: '1px solid rgba(163,182,166,.5)',
          borderRadius: '50%',
          height: '26vmin',
          position: 'absolute',
          right: '18vmin',
          top: '29vmin',
          width: '26vmin',
        }}
        initial={{ scale: 0.35, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ delay: 0.55, duration: 1.1, ease }}
      />
      <motion.div
        style={{
          background: '#c9765c',
          height: '2.8vmin',
          position: 'absolute',
          right: '29.5vmin',
          top: '40.5vmin',
          width: '2.8vmin',
        }}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 300, damping: 22 }}
      />
      <div style={{ bottom: '12vmin', left: '7vmin', position: 'absolute', width: '77vmin' }}>
        <motion.p
          className="tn-mono"
          style={{ color: '#a3b6a6', marginBottom: '4vmin' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease }}
        >
          A short field note from TrueNorth
        </motion.p>
        <motion.h1
          className="tn-display"
          style={{ color: '#f5f0e6', fontSize: 'clamp(3rem, 12.7vmin, 9rem)', lineHeight: 0.94, margin: 0, maxWidth: '82vmin' }}
          initial={{ opacity: 0, y: 34, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.7, duration: 1.05, ease }}
        >
          The internet got louder.
          <br />
          <em style={{ color: '#d48b71' }}>We got quieter.</em>
        </motion.h1>
        <motion.p
          style={{ color: '#c7d0ca', fontSize: 'clamp(.8rem, 2vmin, 1.35rem)', lineHeight: 1.55, margin: '5vmin 0 0', maxWidth: '49vmin' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.75, ease }}
        >
          A smaller, more genuine corner for becoming yourself in public.
        </motion.p>
      </div>
    </motion.div>
  );
}
