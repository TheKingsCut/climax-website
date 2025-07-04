import { cn } from '@/lib/utils';

interface AnimatedBadgeProps {
  progress: number;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ 
  progress, 
  children, 
  className = '' 
}: AnimatedBadgeProps) => {
  const scale = 0.5 + (progress * 0.5); // Scales from 0.5 to 1
  const opacity = Math.min(1, progress * 2); // Fades in faster than scale

  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-out transform",
        className
      )}
      style={{
        transform: `scale(${scale}) rotate(${(1 - progress) * 10}deg)`,
        opacity: opacity,
      }}
    >
      <div className="relative">
        {/* Badge border animation */}
        <div 
          className="absolute inset-0 border-2 border-primary rounded-lg transition-all duration-300"
          style={{
            borderWidth: `${2 + progress * 2}px`,
            borderColor: `hsl(var(--primary) / ${0.3 + progress * 0.7})`,
          }}
        />
        <div className="relative bg-primary/10 rounded-lg p-2 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  );
};