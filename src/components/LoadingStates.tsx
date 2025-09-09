import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circle' | 'rectangle';
  lines?: number;
}

export const Skeleton = ({ 
  className = '', 
  variant = 'text', 
  lines = 1 
}: SkeletonProps) => {
  const baseClasses = 'skeleton animate-pulse';
  
  const variantClasses = {
    text: 'skeleton-text',
    circle: 'skeleton-circle',
    rectangle: 'skeleton-rectangle'
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
};

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`loading-spinner ${sizeClasses[size]} ${className}`} />
  );
};

interface LoadingDotsProps {
  className?: string;
}

export const LoadingDots = ({ className = '' }: LoadingDotsProps) => {
  return (
    <div className={`loading-dots ${className}`}>
      <span />
      <span />
      <span />
    </div>
  );
};

interface ProductCardSkeletonProps {
  className?: string;
}

export const ProductCardSkeleton = ({ className = '' }: ProductCardSkeletonProps) => {
  return (
    <div className={`glass-card-premium p-8 rounded-2xl ${className}`}>
      <div className="space-y-4">
        {/* Image skeleton */}
        <Skeleton variant="rectangle" className="w-full h-80 rounded-xl" />
        
        {/* Title skeleton */}
        <div className="text-center space-y-2">
          <Skeleton variant="text" className="w-3/4 mx-auto h-8" />
          <Skeleton variant="text" className="w-1/2 mx-auto h-4" />
        </div>
        
        {/* Description skeleton */}
        <Skeleton variant="text" lines={3} className="w-full" />
        
        {/* Features skeleton */}
        <div className="space-y-2">
          <Skeleton variant="text" className="w-1/3 h-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton variant="text" className="w-20 h-6 rounded-full" />
            <Skeleton variant="text" className="w-24 h-6 rounded-full" />
            <Skeleton variant="text" className="w-16 h-6 rounded-full" />
          </div>
        </div>
        
        {/* Price and button skeleton */}
        <div className="space-y-4 pt-2">
          <Skeleton variant="text" className="w-20 h-8 mx-auto" />
          <Skeleton variant="text" className="w-full h-12 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

interface HeroSkeletonProps {
  className?: string;
}

export const HeroSkeleton = ({ className = '' }: HeroSkeletonProps) => {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content skeleton */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <Skeleton variant="text" className="w-3/4 h-16" />
                <Skeleton variant="text" className="w-1/2 h-16" />
                <Skeleton variant="text" className="w-32 h-px" />
              </div>
              <Skeleton variant="text" lines={3} className="w-full" />
            </div>
            <div className="flex gap-6">
              <Skeleton variant="text" className="w-40 h-12 rounded-xl" />
              <Skeleton variant="text" className="w-40 h-12 rounded-xl" />
            </div>
          </div>
          
          {/* Image skeleton */}
          <div className="relative">
            <Skeleton variant="rectangle" className="w-full h-96 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface PageLoaderProps {
  message?: string;
  className?: string;
}

export const PageLoader = ({ 
  message = "Loading...", 
  className = '' 
}: PageLoaderProps) => {
  return (
    <div className={`fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
      <div className="glass-card-premium p-8 rounded-2xl text-center space-y-4">
        <LoadingSpinner size="lg" className="mx-auto" />
        <p className="text-muted-foreground font-medium">{message}</p>
      </div>
    </div>
  );
};

interface ButtonLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
}

export const ButtonLoader = ({ 
  isLoading, 
  children, 
  loadingText = "Loading...",
  className = ''
}: ButtonLoaderProps) => {
  return (
    <button 
      className={`relative ${className}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <LoadingSpinner size="sm" />
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};