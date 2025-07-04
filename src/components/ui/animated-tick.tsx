import { cn } from '@/lib/utils';

interface AnimatedTickProps {
  progress: number;
  className?: string;
}

export const AnimatedTick = ({ 
  progress,
  className = '' 
}: AnimatedTickProps) => {
  // Scale animation similar to badge
  const scale = 0.5 + (progress * 0.5);
  const opacity = Math.min(1, progress * 2);

  // SVG path for checkmark
  const pathLength = 100; // Approximate path length for animation
  const strokeDasharray = pathLength;
  const strokeDashoffset = pathLength * (1 - progress);

  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-out transform",
        className
      )}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="relative">
        {/* Animated border glow */}
        <div 
          className="absolute inset-0 border-2 border-primary rounded-lg transition-all duration-300"
          style={{
            borderWidth: `${2 + progress * 2}px`,
            borderColor: `hsl(var(--primary) / ${0.3 + progress * 0.7})`,
          }}
        />
        <div className="relative bg-primary/10 rounded-lg p-2 backdrop-blur-sm flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <path
              d="M9 12l2 2 4-4"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: strokeDasharray,
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 0.3s ease-out',
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};