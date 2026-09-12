import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export function Scene3() {
  const blocks = [
    ['VISIBLE BY CHOICE', 'Not a setting buried in a menu.'],
    ['QUIETER BY DEFAULT', 'The architecture does some of the work.'],
    ['ROOM TO BE HUMAN', 'Privacy is part of the welcome.'],
  ];
  return (
    <motion.div
      className="tn-scene"
      style={{ background: 'linear-gradient(120deg, #527164 0%, #3b5c51 50%, #202b3a 100%)', color: '#f5f0e6' }}
      initial={{ clipPath: 'inset(0 0 0 100%)', opacity: 1 }}
      animate={{ clipPath: 'inset(0 0 0 0%)', opacity: 1 }}
      exit={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.div
        style={{ border: '1px solid rgba(245,240,230,.26)', height: '56vmin', position: 'absolute', right: '7vmin', top: '20vmin', width: '48vmin' }}
        initial={{ opacity: 0, scale: 0.82, x: 15 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 1.05, ease }}
      />
      <motion.div
        style={{ border: '1px solid rgba(245,240,230,.22)', height: '43vmin', position: 'absolute', right: '14vmin', top: '27vmin', width: '34vmin' }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.52, duration: 1.2, ease }}
      />
      {blocks.map(([label, copy], index) => (
        <motion.div
          key={label}
          style={{ borderTop: '1px solid rgba(245,240,230,.45)', left: '7vmin', paddingTop: '2vmin', position: 'absolute', top: `${22 + index * 17}vmin`, width: '40vmin' }}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 + index * 0.22, duration: 0.65, ease }}
        >
          <p className="tn-mono" style={{ color: '#d48b71', margin: 0 }}>{label}</p>
          <p style={{ color: '#dce5dd', fontSize: 'clamp(.78rem, 1.75vmin, 1.1rem)', lineHeight: 1.45, margin: '1.2vmin 0 0', maxWidth: '32vmin' }}>{copy}</p>
        </motion.div>
      ))}
      <motion.div
        style={{ bottom: '10vmin', left: '7vmin', position: 'absolute', width: '83vmin' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.28, duration: 0.8, ease }}
      >
        <p className="tn-mono" style={{ color: '#a3b6a6', margin: '0 0 2.5vmin' }}>02 / Privacy as architecture</p>
        <h2 className="tn-display" style={{ fontSize: 'clamp(2.1rem, 7.8vmin, 5.6rem)', lineHeight: 1, margin: 0, maxWidth: '68vmin' }}>
          The quiet is built
          <br />
          <em style={{ color: '#d48b71' }}>into the bones.</em>
        </h2>
      </motion.div>
    </motion.div>
  );
}
