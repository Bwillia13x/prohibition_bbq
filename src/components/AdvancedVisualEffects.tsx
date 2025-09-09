import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./Accessibility";

// Advanced 3D Card Effect with mouse tracking
export const PremiumCard3D: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}> = ({ children, className = "", intensity = 15 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [transform, setTransform] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / rect.height) * intensity;
      const rotateY = (mouseX / rect.width) * -intensity;

      const scale = 1.02;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
    };

    const handleMouseLeave = () => {
      setTransform(
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
      );
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [intensity, prefersReducedMotion]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

// Advanced Parallax Background Effect
export const ParallaxBackground: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = "" }) => {
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, prefersReducedMotion]);

  return (
    <div
      className={className}
      style={{
        transform: prefersReducedMotion ? "none" : `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

// Premium Glass Morphism with Depth
export const DepthGlassCard: React.FC<{
  children: React.ReactNode;
  depth?: number;
  className?: string;
}> = ({ children, depth = 20, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const card = cardRef.current;
    if (!card) return;

    // Create subtle depth effect with box-shadow
    const updateDepth = () => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center for depth effect
      const distance = Math.sqrt(
        Math.pow(window.innerWidth / 2 - centerX, 2) +
          Math.pow(window.innerHeight / 2 - centerY, 2)
      );

      const maxDistance = Math.sqrt(
        Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2)
      );

      const depthFactor = 1 - distance / maxDistance;
      const shadowBlur = depth * depthFactor;
      const shadowOpacity = 0.1 + depthFactor * 0.2;

      card.style.boxShadow = `
        0 ${depth}px ${shadowBlur}px hsl(var(--background) / ${shadowOpacity}),
        0 0 0 1px hsl(var(--border) / 0.1)
      `;
    };

    const handleScroll = () => updateDepth();
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateDepth();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [depth, prefersReducedMotion]);

  return (
    <div
      ref={cardRef}
      className={`glass-card-premium transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

// Advanced Hover Ripple Effect
export const RippleEffect: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ children, className = "", color = "hsl(var(--primary) / 0.1)" }) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            backgroundColor: color,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

// Magnetic Hover Effect
export const MagneticHover: React.FC<{
  children: React.ReactNode;
  strength?: number;
  className?: string;
}> = ({ children, strength = 0.3, className = "" }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const moveX = mouseX * strength;
      const moveY = mouseY * strength;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, prefersReducedMotion]);

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

// Advanced Scroll-Triggered Animation
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [delay, threshold, prefersReducedMotion]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      case "fade":
        return "scale(0.9)";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: isVisible ? "none" : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Premium Particle Effect Background
export const ParticleBackground: React.FC<{
  particleCount?: number;
  className?: string;
}> = ({ particleCount = 50, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(var(--primary) / ${particle.opacity})`;
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsl(var(--primary) / ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

// Advanced Gradient Animation
export const AnimatedGradient: React.FC<{
  colors: string[];
  className?: string;
  duration?: number;
}> = ({ colors, className = "", duration = 8 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        background: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
        animation: prefersReducedMotion
          ? "none"
          : `gradientShift ${duration}s ease infinite`,
      }}
    />
  );
};

// Add gradient animation keyframes to CSS
const gradientAnimation = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

// Inject keyframes into document head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = gradientAnimation;
  document.head.appendChild(style);
}

export {
  PremiumCard3D,
  ParallaxBackground,
  DepthGlassCard,
  RippleEffect,
  MagneticHover,
  ScrollReveal,
  ParticleBackground,
  AnimatedGradient,
};
