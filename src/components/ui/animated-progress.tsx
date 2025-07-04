import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  progress: number;
  className?: string;
  showValue?: boolean;
}

export const AnimatedProgress = ({ 
  progress, 
  className = '',
  showValue = false 
}: AnimatedProgressProps) => {
  const progressPercentage = Math.max(0, Math.min(100, progress * 100));

  return (
    <div className={cn("relative", className)}>
      <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300 ease-out rounded-full"
          style={{ 
            width: `${progressPercentage}%`,
            transform: `translateX(${progressPercentage < 100 ? 0 : 0}%)`,
          }}
        />
      </div>
      {showValue && (
        <div className="text-xs text-muted-foreground mt-1 text-center">
          {Math.round(progressPercentage)}%
        </div>
      )}
    </div>
  );
};