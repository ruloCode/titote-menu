import { useCurrentFrame, spring, useVideoConfig, Img } from 'remotion';
import { SPRING_CONFIGS, TIMELINE } from '../utils/springs';

interface CircularPlateProps {
  imageSrc: string;
  size: number;
  borderColor: string;
  borderWidth: number;
  x: number;
  y: number;
  delay: number;
  zIndex: number;
  rotationAmount?: number;
}

export function CircularPlate({
  imageSrc,
  size,
  borderColor,
  borderWidth,
  x,
  y,
  delay,
  zIndex,
  rotationAmount = 2,
}: CircularPlateProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animation with spring (starts after TIMELINE.platesStart + delay)
  const entranceFrame = frame - TIMELINE.platesStart - delay;
  const entranceProgress = spring({
    frame: entranceFrame,
    fps,
    config: SPRING_CONFIGS.plateEntrance,
    durationInFrames: 45,
  });

  // Subtle rotation during entrance only
  const rotation = (1 - entranceProgress) * rotationAmount * 2;

  // Scale starts from 0.3 and springs to 1
  const scale = 0.3 + entranceProgress * 0.7;

  // Opacity fades in with entrance
  const opacity = entranceProgress;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${borderWidth}px solid ${borderColor}`,
        overflow: 'hidden',
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        zIndex,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Img
        src={imageSrc}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
