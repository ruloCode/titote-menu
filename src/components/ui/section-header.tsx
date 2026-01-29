import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  highlight,
  centered = true,
  light = false,
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  const eyebrowColor = light ? 'text-titote-gold-light' : 'text-titote-gold';
  const titleColor = light ? 'text-white' : 'text-titote-red-dark';
  const subtitleColor = light ? 'text-white/70' : 'text-titote-brown/70';

  const renderTitle = () => {
    if (typeof title === 'string' && highlight) {
      const parts = title.split(highlight);
      return (
        <>
          {parts[0]}
          <span className="text-gradient-gold">{highlight}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={`${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className={`${eyebrowColor} text-sm font-medium tracking-widest uppercase`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl font-bold sm:text-5xl ${titleColor} mt-2 mb-4`}>{renderTitle()}</h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  highlight?: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({
  children,
  highlight,
  className = '',
  light = false,
}: SectionTitleProps) {
  const titleColor = light ? 'text-white' : 'text-titote-red-dark';

  if (typeof children === 'string' && highlight) {
    const parts = children.split(highlight);
    return (
      <h2 className={`text-4xl font-bold sm:text-5xl ${titleColor} ${className}`}>
        {parts[0]}
        <span className="text-gradient-gold">{highlight}</span>
        {parts[1]}
      </h2>
    );
  }

  return (
    <h2 className={`text-4xl font-bold sm:text-5xl ${titleColor} ${className}`}>{children}</h2>
  );
}
