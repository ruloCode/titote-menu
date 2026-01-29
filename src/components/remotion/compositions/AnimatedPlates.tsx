import { CircularPlate } from '../primitives/CircularPlate';
import { TITOTE_COLORS } from '../utils/colors';
import { PLATE_DELAYS } from '../utils/springs';

interface AnimatedPlatesProps {
  width: number;
  height: number;
}

interface PlateConfig {
  id: string;
  imageSrc: string;
  size: number;
  borderColor: string;
  borderWidth: number;
  x: number;
  y: number;
  delay: number;
  zIndex: number;
}

export function AnimatedPlates({ width, height }: AnimatedPlatesProps) {
  const centerX = width / 2;
  const centerY = height / 2;

  // Define plate configurations
  const plates: PlateConfig[] = [
    {
      id: 'main',
      imageSrc: '/images/dishes/seafood-fusion.png',
      size: 320,
      borderColor: TITOTE_COLORS.gold,
      borderWidth: 5,
      x: centerX - 160, // Centered
      y: centerY - 160,
      delay: PLATE_DELAYS.main,
      zIndex: 30,
    },
    {
      id: 'top-left',
      imageSrc: '/images/dishes/ceviche-nikkei.png',
      size: 200,
      borderColor: TITOTE_COLORS.terracotta,
      borderWidth: 4,
      x: centerX - 280, // Left of center
      y: centerY - 260, // Above center
      delay: PLATE_DELAYS.topLeft,
      zIndex: 20,
    },
    {
      id: 'top-right',
      imageSrc: '/images/dishes/arroz-thai.png',
      size: 180,
      borderColor: TITOTE_COLORS.red,
      borderWidth: 4,
      x: centerX + 140, // Right of center
      y: centerY - 240, // Above center
      delay: PLATE_DELAYS.topRight,
      zIndex: 20,
    },
    {
      id: 'bottom-right',
      imageSrc: '/images/dishes/rolls-patacon.png',
      size: 160,
      borderColor: TITOTE_COLORS.gold,
      borderWidth: 3,
      x: centerX + 160, // Right of center
      y: centerY + 100, // Below center
      delay: PLATE_DELAYS.bottomRight,
      zIndex: 20,
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
      }}
    >
      {plates.map(plate => (
        <CircularPlate
          key={plate.id}
          imageSrc={plate.imageSrc}
          size={plate.size}
          borderColor={plate.borderColor}
          borderWidth={plate.borderWidth}
          x={plate.x}
          y={plate.y}
          delay={plate.delay}
          zIndex={plate.zIndex}
        />
      ))}
    </div>
  );
}
