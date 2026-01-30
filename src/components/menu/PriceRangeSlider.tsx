'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { formatPrice } from '@/lib/menu-data';

interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function PriceRangeSlider({
  min = 0,
  max = 300000,
  value,
  onChange,
}: PriceRangeSliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  // Sync with external value
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const getPercentage = useCallback((val: number) => ((val - min) / (max - min)) * 100, [min, max]);

  const getValueFromPosition = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return 0;
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      // Round to nearest 5000
      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / 5000) * 5000;
    },
    [min, max]
  );

  const handleMouseDown = (thumb: 'min' | 'max') => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(thumb);
  };

  const handleTouchStart = (thumb: 'min' | 'max') => (_e: React.TouchEvent) => {
    setIsDragging(thumb);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientX: number) => {
      const newValue = getValueFromPosition(clientX);

      setLocalValue(prev => {
        if (isDragging === 'min') {
          const newMin = Math.min(newValue, prev[1] - 5000);
          return [Math.max(min, newMin), prev[1]];
        } else {
          const newMax = Math.max(newValue, prev[0] + 5000);
          return [prev[0], Math.min(max, newMax)];
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(null);
      onChange(localValue);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, getValueFromPosition, localValue, onChange, min, max]);

  // Commit changes after dragging
  useEffect(() => {
    if (isDragging === null && (localValue[0] !== value[0] || localValue[1] !== value[1])) {
      onChange(localValue);
    }
  }, [isDragging, localValue, value, onChange]);

  const minPercent = getPercentage(localValue[0]);
  const maxPercent = getPercentage(localValue[1]);

  return (
    <div className="price-range-container">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-titote-brown/70 text-xs font-medium">Rango de precio</span>
        <button
          onClick={() => onChange([min, max])}
          className="text-titote-verde hover:text-titote-verde-claro text-xs transition-colors"
        >
          Resetear
        </button>
      </div>

      <div ref={sliderRef} className="price-range-slider">
        {/* Track fill */}
        <div
          className="price-range-track"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min thumb */}
        <div
          className={`price-range-thumb ${isDragging === 'min' ? 'border-titote-gold scale-110' : ''}`}
          style={{ left: `${minPercent}%` }}
          onMouseDown={handleMouseDown('min')}
          onTouchStart={handleTouchStart('min')}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={localValue[1]}
          aria-valuenow={localValue[0]}
          aria-label="Precio mínimo"
          tabIndex={0}
        />

        {/* Max thumb */}
        <div
          className={`price-range-thumb ${isDragging === 'max' ? 'border-titote-gold scale-110' : ''}`}
          style={{ left: `${maxPercent}%` }}
          onMouseDown={handleMouseDown('max')}
          onTouchStart={handleTouchStart('max')}
          role="slider"
          aria-valuemin={localValue[0]}
          aria-valuemax={max}
          aria-valuenow={localValue[1]}
          aria-label="Precio máximo"
          tabIndex={0}
        />
      </div>

      <div className="price-range-values">
        <span className="price-gradient">{formatPrice(localValue[0])}</span>
        <span className="text-titote-brown/50">-</span>
        <span className="price-gradient">{formatPrice(localValue[1])}</span>
      </div>
    </div>
  );
}
