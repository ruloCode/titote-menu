'use client';

import { Player } from '@remotion/player';
import { HeroComposition } from '../remotion/compositions/HeroComposition';
import { TIMELINE } from '../remotion/utils/springs';

interface HeroRemotionPlayerProps {
  className?: string;
}

export function HeroRemotionPlayer({ className }: HeroRemotionPlayerProps) {
  return (
    <div className={className}>
      <Player
        component={HeroComposition}
        inputProps={{
          width: 800,
          height: 800,
        }}
        durationInFrames={TIMELINE.duration}
        fps={TIMELINE.fps}
        compositionWidth={800}
        compositionHeight={800}
        autoPlay
        controls={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
