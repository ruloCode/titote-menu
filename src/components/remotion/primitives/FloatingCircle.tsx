import { useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { SPRING_CONFIGS } from '../utils/springs';

interface FloatingCircleProps {
  size: number;
  color: string;
  x: number;
  y: number;
  delay?: number;
}

export function FloatingCircle({ size, color, x, y, delay = 0 }: FloatingCircleProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animation with spring
  const entranceProgress = spring({
    frame: frame - delay,
    fps,
    config: SPRING_CONFIGS.decorBounce,
    durationInFrames: 30,
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        transform: `scale(${entranceProgress})`,
        opacity: entranceProgress,
      }}
    />
  );
}
