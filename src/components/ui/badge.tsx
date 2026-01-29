import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'red' | 'white' | 'rating';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  floating?: boolean;
  pulse?: boolean;
}

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  floating = false,
  pulse = false,
}: BadgeProps) {
  const variantClasses = {
    gold: 'bg-titote-gold text-white',
    red: 'bg-titote-red text-white',
    white: 'bg-white text-titote-red-dark shadow-lg',
    rating: 'bg-white text-titote-gold shadow-lg',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const baseClasses = 'font-semibold rounded-full inline-flex items-center gap-1.5';
  const floatingClasses = floating ? 'animate-float-soft' : '';
  const pulseClasses = pulse ? 'animate-pulse-soft' : '';

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${floatingClasses} ${pulseClasses} ${className}`}
    >
      {children}
    </span>
  );
}

interface FloatingBadgeProps {
  children: ReactNode;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
  className?: string;
}

export function FloatingBadge({
  children,
  position,
  delay = 0,
  className = '',
}: FloatingBadgeProps) {
  const positionClasses = {
    'top-left': '-top-4 -left-4',
    'top-right': '-top-4 -right-4',
    'bottom-left': '-bottom-4 -left-4',
    'bottom-right': '-bottom-4 -right-4',
  };

  return (
    <div
      className={`floating-badge ${positionClasses[position]} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

interface RatingBadgeProps {
  rating: number;
  reviews?: number;
  className?: string;
}

export function RatingBadge({ rating, reviews, className = '' }: RatingBadgeProps) {
  return (
    <Badge variant="rating" className={`gap-2 ${className}`}>
      <svg className="text-titote-gold h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-titote-red-dark font-bold">{rating}</span>
      {reviews && <span className="text-titote-brown/60 text-xs">({reviews})</span>}
    </Badge>
  );
}

interface PopularBadgeProps {
  text: string;
  className?: string;
}

export function PopularBadge({ text, className = '' }: PopularBadgeProps) {
  return (
    <Badge variant="gold" size="sm" className={className}>
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </Badge>
  );
}
