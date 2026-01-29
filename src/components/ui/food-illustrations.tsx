// Premium SVG illustrations for Caribbean food
// Each illustration is designed to be used in menu cards

// Deterministic pseudo-random based on seed (for stable render)
function seededRandom(seed: number): number {
  return Math.abs(Math.sin(seed * 9999) * 10000) % 1;
}

interface IllustrationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40',
};

// Ceviche de Camarón
export function CevicheIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bowl */}
      <ellipse cx="60" cy="75" rx="45" ry="20" fill="#E8DCC8" />
      <ellipse cx="60" cy="70" rx="42" ry="18" fill="#F5F1E6" />
      <path
        d="M18 70C18 85 35 95 60 95C85 95 102 85 102 70"
        stroke="#D4C4A8"
        strokeWidth="2"
        fill="none"
      />

      {/* Shrimp */}
      <g transform="translate(35, 45)">
        <path
          d="M5 15C5 15 8 8 15 8C22 8 25 12 28 12C31 12 35 8 35 8"
          stroke="#E8A07A"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M7 18C7 18 10 22 20 22C30 22 33 18 33 18"
          stroke="#F4B896"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="8" cy="12" r="2" fill="#C47B5B" />
      </g>

      {/* Second shrimp */}
      <g transform="translate(50, 50) rotate(15)">
        <path
          d="M5 15C5 15 8 8 15 8C22 8 25 12 28 12"
          stroke="#E8A07A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="7" cy="12" r="1.5" fill="#C47B5B" />
      </g>

      {/* Lime wedge */}
      <g transform="translate(70, 55)">
        <path d="M0 15C0 15 8 0 20 5C18 15 10 20 0 15Z" fill="#8FBF4D" />
        <path d="M2 14C2 14 8 3 18 7" stroke="#A8D65C" strokeWidth="1" fill="none" />
        <path d="M5 12L10 8" stroke="#F5F1E6" strokeWidth="0.5" />
        <path d="M8 13L12 9" stroke="#F5F1E6" strokeWidth="0.5" />
      </g>

      {/* Onion rings */}
      <circle cx="45" cy="58" r="4" stroke="#E8D4E8" strokeWidth="1.5" fill="none" />
      <circle cx="55" cy="62" r="3" stroke="#E8D4E8" strokeWidth="1" fill="none" />

      {/* Cilantro leaves */}
      <g transform="translate(25, 52)">
        <ellipse cx="3" cy="0" rx="3" ry="5" fill="#4A7C59" transform="rotate(-30)" />
        <ellipse cx="8" cy="2" rx="2.5" ry="4" fill="#5C8A6A" transform="rotate(15)" />
        <ellipse cx="0" cy="4" rx="2" ry="3.5" fill="#3D6B4A" transform="rotate(-45)" />
      </g>

      {/* Decorative dots (corn/onion bits) */}
      <circle cx="50" cy="55" r="1.5" fill="#F4E04D" />
      <circle cx="65" cy="60" r="1" fill="#F4E04D" />
      <circle cx="42" cy="62" r="1" fill="#E8D4E8" />
    </svg>
  );
}

// Arroz con Coco
export function ArrozCocoIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse cx="60" cy="80" rx="50" ry="18" fill="#E8DCC8" />
      <ellipse cx="60" cy="76" rx="46" ry="16" fill="#F5F1E6" />

      {/* Rice mound */}
      <ellipse cx="60" cy="60" rx="35" ry="25" fill="#FFF8E7" />
      <ellipse cx="60" cy="55" rx="32" ry="22" fill="#FFFDF5" />

      {/* Rice grains texture */}
      {[...Array(20)].map((_, i) => (
        <ellipse
          key={i}
          cx={35 + (i % 5) * 12 + seededRandom(i) * 5}
          cy={45 + Math.floor(i / 5) * 8 + seededRandom(i + 100) * 5}
          rx="3"
          ry="1.5"
          fill="#F5EED8"
          transform={`rotate(${seededRandom(i + 200) * 60 - 30} ${35 + (i % 5) * 12} ${45 + Math.floor(i / 5) * 8})`}
        />
      ))}

      {/* Coconut shavings on top */}
      <path d="M45 48C47 46 50 47 48 50" stroke="#D4C4A8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M55 45C58 44 60 46 57 48" stroke="#D4C4A8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 50C68 48 70 50 67 52" stroke="#D4C4A8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 52C52 50 55 51 52 54" stroke="#D4C4A8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Steam lines */}
      <path
        d="M50 30C50 25 55 28 55 23"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M60 28C60 23 65 26 65 21"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M70 32C70 27 75 30 75 25"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Raisin accents */}
      <ellipse cx="48" cy="58" rx="2.5" ry="2" fill="#4A3728" />
      <ellipse cx="62" cy="54" rx="2" ry="1.5" fill="#4A3728" />
      <ellipse cx="72" cy="60" rx="2" ry="1.5" fill="#4A3728" />
    </svg>
  );
}

// Langostinos
export function LangostinosIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse cx="60" cy="85" rx="48" ry="16" fill="#1A4D3E" />
      <ellipse cx="60" cy="82" rx="44" ry="14" fill="#2D6A4F" />

      {/* Main langostino */}
      <g transform="translate(25, 35)">
        {/* Body */}
        <path
          d="M10 35C5 30 5 20 15 15C25 10 40 12 50 20C55 25 55 35 45 40C35 45 15 40 10 35Z"
          fill="#E8805C"
        />
        <path
          d="M12 33C8 28 10 22 18 18C28 13 42 16 48 22C52 27 50 34 42 38C32 42 16 38 12 33Z"
          fill="#F4A07A"
        />

        {/* Segments */}
        <path d="M15 25C20 23 25 24 28 26" stroke="#E8805C" strokeWidth="1" />
        <path d="M20 28C25 26 30 27 33 29" stroke="#E8805C" strokeWidth="1" />
        <path d="M25 31C30 29 35 30 38 32" stroke="#E8805C" strokeWidth="1" />

        {/* Tail fan */}
        <path d="M8 38C3 35 2 30 5 28C8 32 10 36 8 38Z" fill="#E8805C" />
        <path d="M6 40C1 38 -1 33 2 30C6 34 8 38 6 40Z" fill="#D47050" />

        {/* Head and eyes */}
        <ellipse cx="52" cy="25" rx="6" ry="8" fill="#E8805C" />
        <circle cx="54" cy="22" r="2" fill="#1A1A1A" />

        {/* Antenna */}
        <path
          d="M55 18C60 12 68 10 72 8"
          stroke="#E8805C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M56 20C62 16 70 16 75 15"
          stroke="#E8805C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Second langostino (smaller, behind) */}
      <g transform="translate(50, 50) scale(0.7)">
        <path
          d="M10 30C5 25 8 18 18 15C28 12 38 16 42 22C45 27 42 32 35 35C25 38 15 35 10 30Z"
          fill="#E8805C"
        />
        <path
          d="M12 28C8 24 12 20 20 18C30 15 38 18 40 22C42 26 38 30 32 32C24 35 16 32 12 28Z"
          fill="#F4A07A"
        />
      </g>

      {/* Lemon wedge */}
      <g transform="translate(80, 55)">
        <path d="M0 20C-5 10 5 0 15 5C12 18 5 22 0 20Z" fill="#F4E04D" />
        <path d="M2 18C0 12 6 4 12 7" stroke="#FFF8B8" strokeWidth="0.8" fill="none" />
      </g>

      {/* Parsley garnish */}
      <g transform="translate(18, 65)">
        <ellipse cx="5" cy="0" rx="4" ry="6" fill="#4A7C59" transform="rotate(-20)" />
        <ellipse cx="12" cy="2" rx="3" ry="5" fill="#5C8A6A" transform="rotate(25)" />
      </g>
    </svg>
  );
}

// Sushi Roll
export function SushiRollIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate/Board */}
      <rect x="15" y="75" width="90" height="8" rx="2" fill="#5C4033" />
      <rect x="18" y="73" width="84" height="6" rx="1" fill="#7A5940" />

      {/* Sushi pieces */}
      {/* Piece 1 */}
      <g transform="translate(25, 40)">
        <ellipse cx="15" cy="25" rx="14" ry="10" fill="#1A1A1A" />
        <ellipse cx="15" cy="22" rx="12" ry="8" fill="#FFFDF5" />
        <circle cx="15" cy="22" r="6" fill="#F4A07A" />
        <circle cx="13" cy="20" r="2" fill="#4A7C59" />
        <circle cx="17" cy="24" r="1.5" fill="#F4E04D" />
      </g>

      {/* Piece 2 */}
      <g transform="translate(50, 38)">
        <ellipse cx="15" cy="27" rx="14" ry="10" fill="#1A1A1A" />
        <ellipse cx="15" cy="24" rx="12" ry="8" fill="#FFFDF5" />
        <circle cx="15" cy="24" r="6" fill="#E8805C" />
        <circle cx="12" cy="22" r="2" fill="#4A7C59" />
        <circle cx="18" cy="25" r="1.5" fill="#FFFDF5" />
      </g>

      {/* Piece 3 */}
      <g transform="translate(75, 42)">
        <ellipse cx="12" cy="23" rx="12" ry="9" fill="#1A1A1A" />
        <ellipse cx="12" cy="20" rx="10" ry="7" fill="#FFFDF5" />
        <circle cx="12" cy="20" r="5" fill="#C47B5B" />
        <circle cx="10" cy="18" r="1.5" fill="#4A7C59" />
      </g>

      {/* Chopsticks */}
      <line
        x1="95"
        y1="30"
        x2="110"
        y2="90"
        stroke="#5C4033"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="100"
        y1="32"
        x2="115"
        y2="92"
        stroke="#7A5940"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Ginger */}
      <g transform="translate(20, 60)">
        <path d="M0 8C2 2 8 0 12 2C10 8 4 12 0 8Z" fill="#FFB8C6" opacity="0.8" />
        <path d="M5 10C7 4 13 3 16 6C13 11 8 14 5 10Z" fill="#FFB8C6" opacity="0.6" />
      </g>

      {/* Wasabi */}
      <ellipse cx="45" cy="68" rx="5" ry="3" fill="#8FBF4D" />
      <ellipse cx="45" cy="66" rx="4" ry="2" fill="#A8D65C" />

      {/* Soy sauce dish */}
      <ellipse cx="85" cy="68" rx="10" ry="4" fill="#3D3D3D" />
      <ellipse cx="85" cy="67" rx="8" ry="3" fill="#2D2D2D" />
    </svg>
  );
}

// Patacón / Plátano
export function PataconIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse cx="60" cy="82" rx="48" ry="16" fill="#E8DCC8" />
      <ellipse cx="60" cy="78" rx="44" ry="14" fill="#F5F1E6" />

      {/* Main patacón (fried plantain) */}
      <ellipse cx="60" cy="55" rx="32" ry="8" fill="#C9A227" />
      <ellipse cx="60" cy="52" rx="30" ry="7" fill="#D4AF37" />
      <ellipse cx="60" cy="50" rx="28" ry="6" fill="#E8C547" />

      {/* Texture/ridges */}
      <path
        d="M35 50C40 48 50 47 60 48C70 49 80 51 85 50"
        stroke="#C9A227"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M38 52C45 50 55 49 60 50C70 51 78 53 82 52"
        stroke="#C9A227"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Second patacón (stacked) */}
      <ellipse cx="55" cy="62" rx="28" ry="7" fill="#B8942A" />
      <ellipse cx="55" cy="60" rx="26" ry="6" fill="#C9A227" />
      <ellipse cx="55" cy="58" rx="24" ry="5" fill="#D4AF37" />

      {/* Hogao topping */}
      <ellipse cx="58" cy="48" rx="15" ry="6" fill="#C75050" />
      <ellipse cx="58" cy="46" rx="13" ry="5" fill="#D46060" />

      {/* Onion bits in hogao */}
      <circle cx="52" cy="46" r="2" fill="#F5F1E6" opacity="0.7" />
      <circle cx="60" cy="45" r="1.5" fill="#F5F1E6" opacity="0.7" />
      <circle cx="64" cy="47" r="1.5" fill="#F5F1E6" opacity="0.7" />

      {/* Cilantro garnish */}
      <g transform="translate(75, 45)">
        <ellipse cx="3" cy="0" rx="3" ry="5" fill="#4A7C59" transform="rotate(-15)" />
        <ellipse cx="8" cy="2" rx="2.5" ry="4" fill="#5C8A6A" transform="rotate(20)" />
      </g>

      {/* Lime wedge */}
      <g transform="translate(25, 62)">
        <path d="M0 12C-3 5 3 0 10 3C8 12 3 15 0 12Z" fill="#8FBF4D" />
        <path d="M1 10C0 6 4 2 8 4" stroke="#A8D65C" strokeWidth="0.8" fill="none" />
      </g>
    </svg>
  );
}

// Postre Tropical (Tres Leches / Coconut dessert)
export function PostreTropicalIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse cx="60" cy="90" rx="45" ry="12" fill="#E8DCC8" />
      <ellipse cx="60" cy="87" rx="42" ry="10" fill="#F5F1E6" />

      {/* Cake base */}
      <rect x="30" y="50" width="60" height="35" rx="4" fill="#F5E6D3" />
      <rect x="32" y="52" width="56" height="31" rx="3" fill="#FFF8E7" />

      {/* Milk drip effect */}
      <path
        d="M32 55C32 55 35 52 40 52C45 52 50 55 55 55C60 55 65 52 70 52C75 52 80 55 85 55C88 55 88 55 88 55V60H32V55Z"
        fill="#FFFDF5"
      />

      {/* Whipped cream on top */}
      <ellipse cx="45" cy="48" rx="8" ry="5" fill="#FFFDF5" />
      <ellipse cx="60" cy="45" rx="10" ry="6" fill="#FFFDF5" />
      <ellipse cx="75" cy="48" rx="8" ry="5" fill="#FFFDF5" />
      <ellipse cx="52" cy="43" rx="6" ry="4" fill="#FFFFFF" />
      <ellipse cx="68" cy="43" rx="6" ry="4" fill="#FFFFFF" />

      {/* Cherry on top */}
      <circle cx="60" cy="38" r="6" fill="#C75050" />
      <circle cx="58" cy="36" r="2" fill="#E07070" opacity="0.6" />
      <path d="M60 32C60 28 63 25 65 25" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cinnamon sprinkle */}
      <circle cx="48" cy="50" r="0.8" fill="#8B5A2B" />
      <circle cx="55" cy="48" r="0.6" fill="#8B5A2B" />
      <circle cx="65" cy="49" r="0.7" fill="#8B5A2B" />
      <circle cx="72" cy="50" r="0.6" fill="#8B5A2B" />

      {/* Sauce drizzle on plate */}
      <path
        d="M25 85C30 88 40 90 50 88C60 86 70 88 80 85C90 82 95 85 95 85"
        stroke="#C9A227"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Mint leaf */}
      <g transform="translate(78, 75)">
        <ellipse cx="4" cy="0" rx="4" ry="6" fill="#4A7C59" transform="rotate(15)" />
        <path d="M4 -3L4 6" stroke="#3D6B4A" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

// Bebida Tropical (Coconut drink / Limonada de coco)
export function BebidaTropicalIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glass */}
      <path
        d="M35 30L30 95C30 100 40 105 60 105C80 105 90 100 90 95L85 30H35Z"
        fill="rgba(255,255,255,0.3)"
        stroke="#D4C4A8"
        strokeWidth="2"
      />

      {/* Liquid */}
      <path d="M37 35L33 90C33 94 43 98 60 98C77 98 87 94 87 90L83 35H37Z" fill="#FFFDF5" />

      {/* Coconut cream layer */}
      <path
        d="M37 35L35 55C35 58 45 60 60 60C75 60 85 58 85 55L83 35H37Z"
        fill="#F5F1E6"
        opacity="0.8"
      />

      {/* Ice cubes */}
      <rect x="45" y="50" width="10" height="12" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="58" y="55" width="10" height="10" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="50" y="65" width="12" height="10" rx="2" fill="rgba(255,255,255,0.4)" />

      {/* Straw */}
      <rect x="68" y="15" width="4" height="75" rx="1" fill="#C75050" />
      <rect x="68" y="15" width="4" height="75" rx="1" fill="url(#stripePattern)" />
      <defs>
        <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="4" height="8">
          <rect width="4" height="4" fill="#C75050" />
          <rect y="4" width="4" height="4" fill="#FFFFFF" />
        </pattern>
      </defs>

      {/* Lime wheel garnish */}
      <g transform="translate(75, 25)">
        <circle cx="12" cy="12" r="12" fill="#8FBF4D" />
        <circle cx="12" cy="12" r="10" fill="#A8D65C" />
        <circle cx="12" cy="12" r="6" fill="#C8E68C" />
        {/* Segments */}
        <line x1="12" y1="2" x2="12" y2="22" stroke="#8FBF4D" strokeWidth="1" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#8FBF4D" strokeWidth="1" />
        <line x1="5" y1="5" x2="19" y2="19" stroke="#8FBF4D" strokeWidth="1" />
        <line x1="19" y1="5" x2="5" y2="19" stroke="#8FBF4D" strokeWidth="1" />
      </g>

      {/* Coconut shaving on rim */}
      <path d="M40 28C42 25 45 26 43 29" stroke="#D4C4A8" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 26C50 23 53 24 51 27" stroke="#D4C4A8" strokeWidth="2" strokeLinecap="round" />

      {/* Bubbles */}
      <circle cx="50" cy="80" r="2" fill="rgba(255,255,255,0.5)" />
      <circle cx="62" cy="75" r="1.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="55" cy="85" r="1" fill="rgba(255,255,255,0.3)" />

      {/* Glass reflection */}
      <path
        d="M38 40C38 40 40 80 38 90"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Entrada genérica (appetizer bowl)
export function EntradaIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bowl shadow */}
      <ellipse cx="60" cy="90" rx="40" ry="10" fill="#E8DCC8" opacity="0.5" />

      {/* Bowl */}
      <path d="M20 55C20 75 35 90 60 90C85 90 100 75 100 55" fill="#2D6A4F" />
      <ellipse cx="60" cy="55" rx="40" ry="15" fill="#40916C" />
      <ellipse cx="60" cy="52" rx="36" ry="12" fill="#4A9F7A" />

      {/* Food items inside */}
      <circle cx="50" cy="50" r="8" fill="#E8A07A" />
      <circle cx="68" cy="52" r="7" fill="#C9A227" />
      <circle cx="55" cy="58" r="6" fill="#C47B5B" />

      {/* Garnish */}
      <ellipse cx="75" cy="48" rx="4" ry="6" fill="#4A7C59" transform="rotate(30 75 48)" />
      <ellipse cx="42" cy="50" rx="3" ry="5" fill="#5C8A6A" transform="rotate(-20 42 50)" />

      {/* Steam */}
      <path
        d="M50 35C50 30 55 33 55 28"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M60 32C60 27 65 30 65 25"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M70 35C70 30 75 33 75 28"
        stroke="#E8DCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

// Plato fuerte genérico (main course)
export function PlatoFuerteIllustration({ className = '', size = 'lg' }: IllustrationProps) {
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse cx="60" cy="80" rx="50" ry="18" fill="#E8DCC8" />
      <ellipse cx="60" cy="76" rx="46" ry="15" fill="#F5F1E6" />
      <ellipse cx="60" cy="73" rx="40" ry="12" fill="#FFFDF5" />

      {/* Main protein (fish/meat) */}
      <ellipse cx="55" cy="55" rx="25" ry="15" fill="#C47B5B" />
      <ellipse cx="55" cy="52" rx="22" ry="12" fill="#D4896A" />

      {/* Grill marks */}
      <line
        x1="40"
        y1="48"
        x2="48"
        y2="56"
        stroke="#A66A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="48"
        y1="48"
        x2="56"
        y2="56"
        stroke="#A66A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="56"
        y1="48"
        x2="64"
        y2="56"
        stroke="#A66A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Side - rice/mash */}
      <ellipse cx="82" cy="60" rx="12" ry="8" fill="#FFF8E7" />
      <ellipse cx="82" cy="58" rx="10" ry="6" fill="#FFFDF5" />

      {/* Vegetables */}
      <ellipse cx="35" cy="65" rx="8" ry="5" fill="#4A7C59" />
      <ellipse cx="42" cy="70" rx="6" ry="4" fill="#5C8A6A" />

      {/* Sauce drizzle */}
      <path
        d="M40 60C45 58 55 62 65 58C70 56 75 58 78 60"
        stroke="#C9A227"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Garnish */}
      <circle cx="75" cy="50" r="3" fill="#C75050" />
      <ellipse cx="30" cy="58" rx="3" ry="4" fill="#4A7C59" transform="rotate(-30 30 58)" />
    </svg>
  );
}

// Export a map for easy category-based access
export const FoodIllustrations = {
  ceviche: CevicheIllustration,
  arrozCoco: ArrozCocoIllustration,
  langostinos: LangostinosIllustration,
  sushi: SushiRollIllustration,
  patacon: PataconIllustration,
  postre: PostreTropicalIllustration,
  bebida: BebidaTropicalIllustration,
  entrada: EntradaIllustration,
  platoFuerte: PlatoFuerteIllustration,
};

// Category to illustration mapping
export const categoryIllustrations: Record<string, React.FC<IllustrationProps>> = {
  entradas: EntradaIllustration,
  ceviches: CevicheIllustration,
  'platos-fuertes': PlatoFuerteIllustration,
  arroces: ArrozCocoIllustration,
  sushi: SushiRollIllustration,
  bebidas: BebidaTropicalIllustration,
  postres: PostreTropicalIllustration,
};
