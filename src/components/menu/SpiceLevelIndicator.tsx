'use client';

interface SpiceLevelIndicatorProps {
  level: 0 | 1 | 2 | 3;
  showLabel?: boolean;
}

export function SpiceLevelIndicator({ level, showLabel = true }: SpiceLevelIndicatorProps) {
  const labels: Record<number, { es: string; en: string }> = {
    0: { es: 'Sin picante', en: 'Not spicy' },
    1: { es: 'Suave', en: 'Mild' },
    2: { es: 'Picante', en: 'Spicy' },
    3: { es: 'Muy picante', en: 'Very spicy' },
  };

  return (
    <div className="flex flex-col gap-1">
      {showLabel && <span className="product-modal-info-label">Picante</span>}
      <div className="flex items-center gap-1">
        <div className="spice-indicator">
          {[1, 2, 3].map(pepperLevel => (
            <span
              key={pepperLevel}
              className={`spice-pepper ${pepperLevel <= level ? 'active' : 'inactive'}`}
              aria-hidden="true"
            >
              🌶️
            </span>
          ))}
        </div>
        <span className="text-titote-brown/70 ml-1 text-xs">{labels[level].es}</span>
      </div>
    </div>
  );
}
