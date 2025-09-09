// Performance optimization utilities for Johnny Ive's premium standards

// Critical CSS extraction and inlining
export const extractCriticalCSS = (
  css: string,
  criticalSelectors: string[]
): string => {
  const criticalRules: string[] = [];

  // Split CSS into rules
  const rules = css.split("}").filter((rule) => rule.trim());

  rules.forEach((rule) => {
    const [selectors] = rule.split("{");
    if (!selectors) return;

    const selectorList = selectors.split(",").map((s) => s.trim());

    // Check if any selector is critical
    const isCritical = selectorList.some((selector) => {
      return criticalSelectors.some((critical) => {
        // Simple substring match - in production, use more sophisticated matching
        return (
          selector.includes(critical) ||
          critical.includes(selector.replace(/[.:]/g, ""))
        );
      });
    });

    if (isCritical) {
      criticalRules.push(rule + "}");
    }
  });

  return criticalRules.join("\n");
};

// Resource hints for optimal loading
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement("link");
  fontLink.rel = "preload";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap";
  fontLink.as = "style";
  fontLink.onload = () => {
    fontLink.rel = "stylesheet";
  };
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = [
    "/brand logo/prohibition_bbq_logo.png",
    "/src/assets/hero-bottles-stock.jpg",
  ];

  criticalImages.forEach((src) => {
    const imgLink = document.createElement("link");
    imgLink.rel = "preload";
    imgLink.href = src;
    imgLink.as = "image";
    document.head.appendChild(imgLink);
  });
};

// Web Vitals tracking
export const trackWebVitals = () => {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log("[Web Vitals] LCP:", lastEntry.startTime, "ms");
  }).observe({ entryTypes: ["largest-contentful-paint"] });

  // First Input Delay (FID)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      console.log(
        "[Web Vitals] FID:",
        entry.processingStart - entry.startTime,
        "ms"
      );
    });
  }).observe({ entryTypes: ["first-input"] });

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log("[Web Vitals] CLS:", clsValue);
  }).observe({ entryTypes: ["layout-shift"] });
};

// Bundle analysis and code splitting hints
export const analyzeBundleSize = () => {
  // This would typically integrate with webpack-bundle-analyzer
  if ("performance" in window && "memory" in window.performance) {
    const memInfo = (window.performance as any).memory;
    if (memInfo) {
      console.log(
        "[Bundle Analysis] Used JS Heap:",
        Math.round(memInfo.usedJSHeapSize / 1048576),
        "MB"
      );
      console.log(
        "[Bundle Analysis] Total JS Heap:",
        Math.round(memInfo.totalJSHeapSize / 1048576),
        "MB"
      );
    }
  }
};

// Optimize images with modern formats
export const optimizeImage = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "avif" | "jpg";
  }
): string => {
  // In production, this would integrate with a CDN like Cloudinary or Vercel
  // For now, return the original src
  return src;
};

// Debounced scroll handler for performance
export const createDebouncedScrollHandler = (
  callback: () => void,
  delay: number = 16
) => {
  let timeoutId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

// Intersection Observer wrapper for better performance
export const createOptimizedIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: "50px 0px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ("memory" in performance) {
    const memInfo = (performance as any).memory;
    return {
      used: Math.round(memInfo.usedJSHeapSize / 1048576),
      total: Math.round(memInfo.totalJSHeapSize / 1048576),
      limit: Math.round(memInfo.jsHeapSizeLimit / 1048576),
    };
  }
  return null;
};

// Battery-aware optimizations
export const createBatteryAwareOptimization = () => {
  if ("getBattery" in navigator) {
    (navigator as any).getBattery().then((battery: any) => {
      const updateBatteryOptimization = () => {
        if (battery.level < 0.2 && !battery.charging) {
          // Enable battery-saving mode
          document.documentElement.style.setProperty(
            "--animation-duration",
            "0.01ms"
          );
          console.log(
            "[Battery] Low battery detected - enabling power saving mode"
          );
        } else {
          // Restore normal performance
          document.documentElement.style.removeProperty("--animation-duration");
        }
      };

      battery.addEventListener("levelchange", updateBatteryOptimization);
      battery.addEventListener("chargingchange", updateBatteryOptimization);

      updateBatteryOptimization();
    });
  }
};

// Network-aware loading
export const createNetworkAwareLoading = () => {
  if ("connection" in navigator) {
    const connection = (navigator as any).connection;
    const updateNetworkOptimization = () => {
      const effectiveType = connection.effectiveType;

      if (effectiveType === "slow-2g" || effectiveType === "2g") {
        // Reduce image quality and disable non-essential animations
        document.documentElement.classList.add("network-slow");
        console.log(
          "[Network] Slow connection detected - optimizing for performance"
        );
      } else {
        document.documentElement.classList.remove("network-slow");
      }
    };

    connection.addEventListener("change", updateNetworkOptimization);
    updateNetworkOptimization();
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  preloadCriticalResources();

  // Track web vitals
  trackWebVitals();

  // Analyze bundle size
  analyzeBundleSize();

  // Battery-aware optimizations
  createBatteryAwareOptimization();

  // Network-aware loading
  createNetworkAwareLoading();

  console.log("[Performance] All optimizations initialized");
};
