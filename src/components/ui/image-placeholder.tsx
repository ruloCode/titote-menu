import { ReactNode } from 'react';

interface ImagePlaceholderProps {
  icon?: ReactNode;
  variant?: 'red' | 'gold' | 'terracotta' | 'cream';
  shape?: 'rounded' | 'circle' | 'square';
  className?: string;
  showShimmer?: boolean;
  children?: ReactNode;
}

export function ImagePlaceholder({
  icon,
  variant = 'red',
  shape = 'rounded',
  className = '',
  showShimmer = true,
  children,
}: ImagePlaceholderProps) {
  const variantClasses = {
    red: 'from-titote-red to-titote-red-dark',
    gold: 'from-titote-gold to-titote-terracotta',
    terracotta: 'from-titote-terracotta to-titote-brown',
    cream: 'from-titote-cream to-white',
  };

  const shapeClasses = {
    rounded: 'rounded-2xl',
    circle: 'rounded-full',
    square: 'rounded-none',
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${variantClasses[variant]} ${shapeClasses[shape]} flex items-center justify-center ${className} `}
    >
      {icon && <span className="relative z-10 text-4xl">{icon}</span>}
      {children}
      {showShimmer && <div className="animate-shimmer pointer-events-none absolute inset-0" />}
    </div>
  );
}

interface CircularImagePlaceholderProps {
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBorder?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CircularImagePlaceholder({
  icon,
  size = 'lg',
  withBorder = true,
  className = '',
  children,
}: CircularImagePlaceholderProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };

  const iconSizes = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
  };

  return (
    <div
      className={` ${sizeClasses[size]} circular-image image-placeholder ${withBorder ? 'border-titote-gold border-4' : ''} ${className} `}
    >
      {icon && <span className={`${iconSizes[size]} relative z-10 text-white`}>{icon}</span>}
      {children}
    </div>
  );
}

interface HeroImagePlaceholderProps {
  className?: string;
}

export function HeroImagePlaceholder({ className = '' }: HeroImagePlaceholderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft decorative background circle */}
      <div className="from-titote-gold/10 to-titote-red/10 absolute -inset-6 rounded-full bg-gradient-to-br blur-xl" />

      {/* Main circular placeholder - Large and prominent */}
      <div className="border-titote-gold from-titote-red via-titote-red-light to-titote-red-dark relative h-80 w-80 overflow-hidden rounded-full border-4 bg-gradient-to-br shadow-2xl md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px]">
        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Elegant plate icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
          <svg
            className="mb-4 h-24 w-24 md:h-32 md:w-32"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
          >
            {/* Plate base */}
            <ellipse cx="12" cy="14" rx="9" ry="4" strokeLinecap="round" />
            {/* Plate rim */}
            <ellipse cx="12" cy="14" rx="6" ry="2.5" strokeLinecap="round" opacity="0.6" />
            {/* Steam lines */}
            <path d="M8 8C8 8 8.5 6 9 5C9.5 4 10 4 10 4" strokeLinecap="round" opacity="0.5" />
            <path d="M12 7C12 7 12.5 5 13 4C13.5 3 14 3 14 3" strokeLinecap="round" opacity="0.5" />
            <path d="M16 8C16 8 15.5 6 15 5C14.5 4 14 4 14 4" strokeLinecap="round" opacity="0.5" />
          </svg>
          <span className="text-sm font-medium tracking-wide opacity-70 md:text-base">
            Próximamente
          </span>
        </div>

        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}
