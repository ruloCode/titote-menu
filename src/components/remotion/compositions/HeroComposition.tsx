import { AbsoluteFill } from 'remotion';
import { FloatingDecorations } from './FloatingDecorations';
import { AnimatedPlates } from './AnimatedPlates';

interface HeroCompositionProps {
  width?: number;
  height?: number;
}

export function HeroComposition({ width = 800, height = 800 }: HeroCompositionProps) {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Floating decorations layer */}
      <FloatingDecorations width={width} height={height} />

      {/* Animated plates layer */}
      <AnimatedPlates width={width} height={height} />
    </AbsoluteFill>
  );
}
