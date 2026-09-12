import {
  VideoCanvas,
  type VideoAspectRatio,
  VideoPausedContext,
  useVideoPlayer,
} from '@/lib/video';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';

export const SCENE_DURATIONS = {
  opening: 5200,
  reflection: 5000,
  privacy: 5000,
  depth: 5000,
  room: 4800,
  making: 5000,
  circle: 6200,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '1:1';

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({
    durations,
    loop,
    paused,
  });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneKeys = Object.keys(SCENE_DURATIONS);
  const sceneIndex = sceneKeys.indexOf(baseSceneKey);
  const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];
  const Scene = scenes[sceneIndex >= 0 ? sceneIndex : currentScene] ?? Scene1;

  return (
    <VideoPausedContext.Provider value={paused}>
      <VideoCanvas
        aspectRatio={VIDEO_ASPECT_RATIO}
        className="tn-film"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="tn-grain" />
        <motion.div
          className="tn-orbit tn-orbit-a"
          animate={{
            opacity: [0.9, 0.42, 0.72, 0.52, 0.82, 0.44, 0.9][sceneIndex >= 0 ? sceneIndex : 0],
            rotate: (sceneIndex >= 0 ? sceneIndex : 0) * 17,
            scale: [1, 1.08, 0.9, 1.03, 0.96, 1.12, 1][sceneIndex >= 0 ? sceneIndex : 0],
          }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
        <motion.div
          className="tn-orbit tn-orbit-b"
          animate={{
            opacity: [0.7, 0.3, 0.8, 0.4, 0.62, 0.52, 0.7][sceneIndex >= 0 ? sceneIndex : 0],
            rotate: -(sceneIndex >= 0 ? sceneIndex : 0) * 24,
            scale: [1, 0.82, 1.14, 0.95, 1.08, 0.9, 1][sceneIndex >= 0 ? sceneIndex : 0],
          }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
        <motion.div
          className="tn-persistent-mark"
          animate={{ color: [1, 3, 5].includes(sceneIndex) ? '#202b3a' : '#f5f0e6', y: sceneIndex === 6 ? 1 : 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        >
          <span className="tn-mark-box"><span className="tn-mark-dot" /></span>
          <span className="tn-mono" style={{ fontSize: 'clamp(.46rem, 1.25vmin, .78rem)' }}>TRUE NORTH</span>
        </motion.div>
        <motion.div
          className="tn-progress"
          aria-hidden="true"
          animate={{ color: [1, 3, 5].includes(sceneIndex) ? '#202b3a' : '#f5f0e6' }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
          {sceneKeys.map((key, index) => (
            <i className={index === sceneIndex ? 'active' : ''} key={key} />
          ))}
        </motion.div>
        <AnimatePresence mode="sync">
          <Scene key={currentSceneKey} />
        </AnimatePresence>
      </VideoCanvas>
    </VideoPausedContext.Provider>
  );
}
