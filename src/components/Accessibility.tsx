import React, { useEffect, useState } from "react";

// Skip to content link for keyboard users
export const SkipLink: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
  >
    Skip to main content
  </a>
);

// Focus trap utility for modals and dropdowns
export const useFocusTrap = (
  isActive: boolean,
  containerRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // This would typically close the modal/dropdown
        // For now, just blur the active element
        (document.activeElement as HTMLElement)?.blur();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    document.addEventListener("keydown", handleEscapeKey);

    // Focus first element when trap activates
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isActive, containerRef]);
};

// Screen reader announcements
export const ScreenReaderAnnouncement: React.FC<{
  message: string;
  priority?: "polite" | "assertive";
  className?: string;
}> = ({ message, priority = "polite", className = "sr-only" }) => (
  <div aria-live={priority} aria-atomic="true" className={className}>
    {message}
  </div>
);

// High contrast mode detection
export const useHighContrast = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-contrast: high)");
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

// Keyboard navigation hook
export const useKeyboardNavigation = (
  items: any[],
  onSelect: (item: any, index: number) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          onSelect(items[selectedIndex], selectedIndex);
        }
        break;
      case "Home":
        e.preventDefault();
        setSelectedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setSelectedIndex(items.length - 1);
        break;
    }
  };

  return {
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
  };
};

// Accessible button component
export interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled,
  onClick,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || loading}
    onClick={(e) => {
      if (!loading && !disabled && onClick) {
        onClick(e);
      }
    }}
    aria-disabled={disabled || loading}
  >
    {loading ? loadingText : children}
  </button>
);

// Focus management utilities
export const focusFirstFocusableElement = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  firstElement?.focus();
};

export const focusLastFocusableElement = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;
  lastElement?.focus();
};

// ARIA live region for dynamic content updates
export const LiveRegion: React.FC<{
  children: React.ReactNode;
  priority?: "polite" | "assertive";
  atomic?: boolean;
}> = ({ children, priority = "polite", atomic = false }) => (
  <div aria-live={priority} aria-atomic={atomic.toString()} className="sr-only">
    {children}
  </div>
);
