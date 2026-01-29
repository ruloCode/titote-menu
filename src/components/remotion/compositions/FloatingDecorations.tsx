import { useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { FloatingCircle } from '../primitives/FloatingCircle';
import { TITOTE_COLORS } from '../utils/colors';
import { SPRING_CONFIGS } from '../utils/springs';

interface FloatingDecorationsProps {
  width: number;
  height: number;
}

export function FloatingDecorations({ width, height }: FloatingDecorationsProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Ring animation
  const ringProgress = spring({
    frame: frame - 20,
    fps,
    config: SPRING_CONFIGS.decorBounce,
    durationInFrames: 40,
  });

  // Calculate positions based on composition size
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Top-left gold circle */}
      <FloatingCircle
        size={96}
        color={TITOTE_COLORS.goldAlpha20}
        x={centerX - 180}
        y={centerY - 200}
        delay={0}
      />

      {/* Bottom-right terracotta circle */}
      <FloatingCircle
        size={64}
        color={TITOTE_COLORS.terracottaAlpha25}
        x={centerX + 200}
        y={centerY + 100}
        delay={10}
      />

      {/* Bottom-left red circle */}
      <FloatingCircle
        size={80}
        color={TITOTE_COLORS.redLightAlpha15}
        x={centerX - 220}
        y={centerY + 150}
        delay={5}
      />

      {/* Small accent circle - top right */}
      <FloatingCircle
        size={48}
        color={TITOTE_COLORS.goldAlpha30}
        x={centerX + 160}
        y={centerY - 180}
        delay={15}
      />

      {/* Decorative ring */}
      <div
        style={{
          position: 'absolute',
          left: centerX + 80,
          top: centerY + 60,
          width: 180,
          height: 180,
          borderRadius: '50%',
          border: `1px solid ${TITOTE_COLORS.goldAlpha30}`,
          transform: `scale(${ringProgress})`,
          opacity: ringProgress * 0.6,
        }}
      />

      {/* Second decorative ring (larger, more subtle) */}
      <div
        style={{
          position: 'absolute',
          left: centerX - 280,
          top: centerY - 80,
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: `1px solid ${TITOTE_COLORS.redLightAlpha15}`,
          transform: `scale(${ringProgress})`,
          opacity: ringProgress * 0.4,
        }}
      />
    </div>
  );
}
