'use client';

interface ProductDetailHeaderProps {
  onClose: () => void;
  onShare?: () => void;
  showSwipeHandle?: boolean;
}

export function ProductDetailHeader({
  onClose,
  onShare,
  showSwipeHandle = true,
}: ProductDetailHeaderProps) {
  const handleShare = async () => {
    if (onShare) {
      onShare();
      return;
    }

    // Default share behavior using Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Could show a toast here
      } catch {
        // Clipboard failed
      }
    }
  };

  return (
    <div className="product-modal-header">
      {showSwipeHandle && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <div className="product-modal-swipe-handle" />
        </div>
      )}

      <button onClick={onClose} className="product-modal-close" aria-label="Cerrar" autoFocus>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <button onClick={handleShare} className="product-modal-share">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
          <polyline points="16,6 12,2 8,6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        Compartir
      </button>
    </div>
  );
}
