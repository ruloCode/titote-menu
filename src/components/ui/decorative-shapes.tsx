export function WaveTop({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveBottom({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0L48 10C96 20 192 40 288 50C384 60 480 60 576 55C672 50 768 40 864 35C960 30 1056 30 1152 35C1248 40 1344 50 1392 55L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="currentColor" />
    </svg>
  );
}

export function BlobShape({
  className = '',
  variant = 1,
}: {
  className?: string;
  variant?: 1 | 2 | 3;
}) {
  const paths = {
    1: 'M47.5,-61.8C59.3,-52.8,65.3,-35.7,68.6,-18.4C71.9,-1.1,72.5,16.3,66.1,30.9C59.7,45.5,46.3,57.3,31,64.1C15.7,70.9,-1.5,72.7,-18.7,69.1C-35.9,65.5,-53.1,56.5,-63.7,42.4C-74.3,28.3,-78.3,9.1,-75.3,-8.8C-72.3,-26.7,-62.3,-43.3,-48.3,-52C-34.3,-60.7,-16.2,-61.5,1.2,-63.1C18.6,-64.7,35.7,-70.8,47.5,-61.8Z',
    2: 'M42.8,-51.2C55.9,-41.5,67,-27.3,71.3,-10.8C75.6,5.7,73.1,24.5,63.5,38.8C53.9,53.1,37.2,62.9,19.3,68.1C1.4,73.3,-17.7,73.9,-34.5,67.5C-51.3,61.1,-65.8,47.7,-72.6,31.3C-79.4,14.9,-78.5,-4.5,-71.5,-20.8C-64.5,-37.1,-51.4,-50.3,-36.9,-59.5C-22.4,-68.7,-6.5,-73.9,7.2,-82.4C20.9,-90.9,29.7,-60.9,42.8,-51.2Z',
    3: 'M38.5,-48.7C50.1,-40.3,60,-27.4,65.2,-12.1C70.4,3.2,70.9,20.9,63.4,34.4C55.9,47.9,40.4,57.2,24,62.2C7.6,67.2,-9.7,67.9,-25.4,62.4C-41.1,56.9,-55.2,45.2,-62.8,30.2C-70.4,15.2,-71.5,-3.1,-66.4,-19.1C-61.3,-35.1,-50,-48.8,-36.8,-56.8C-23.6,-64.8,-8.5,-67.1,4.3,-72.3C17.1,-77.5,26.9,-57.1,38.5,-48.7Z',
  };

  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d={paths[variant]} transform="translate(100 100)" />
    </svg>
  );
}

export function CircleDecoration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function LeafDecoration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 0C30 0 60 30 60 50C60 70 45 80 30 80C15 80 0 70 0 50C0 30 30 0 30 0Z"
        fill="currentColor"
      />
      <path d="M30 20V70" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M30 35L20 50M30 50L40 60" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}
