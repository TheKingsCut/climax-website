import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { AnimatedCounter } from './animated-counter';
import { AnimatedProgress } from './animated-progress';
import { AnimatedBadge } from './animated-badge';

export const AnimatedStats = () => {
  const { scrollProgress, elementRef } = useScrollAnimation();

  return (
    <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* Energy Savings */}
      <div className="text-center space-y-4">
        <div className="text-5xl font-bold text-primary mb-2">
          <AnimatedCounter
            end={40}
            progress={scrollProgress}
            suffix="%"
            className="text-5xl font-bold text-primary"
          />
        </div>
        <AnimatedProgress
          progress={scrollProgress * 0.4}
          className="w-full max-w-32 mx-auto mb-2"
        />
        <div className="text-sm text-muted-foreground font-medium">Energy Savings</div>
      </div>

      {/* Proven Sales */}
      <div className="text-center space-y-4">
        <div className="text-5xl font-bold text-primary mb-2">
          <AnimatedCounter
            end={8}
            progress={scrollProgress}
            prefix="R"
            suffix="M"
            className="text-5xl font-bold text-primary"
          />
        </div>
        <div className="space-y-1">
          {[...Array(4)].map((_, i) => (
            <AnimatedProgress
              key={i}
              progress={Math.max(0, (scrollProgress - i * 0.1) * 1.25)}
              className="w-full max-w-32 mx-auto h-1"
            />
          ))}
        </div>
        <div className="text-sm text-muted-foreground font-medium">Proven Sales</div>
      </div>

      {/* CE Certified */}
      <div className="text-center space-y-4">
        <AnimatedBadge
          progress={scrollProgress}
          className="inline-block"
        >
          <div className="text-5xl font-bold text-primary">CE</div>
        </AnimatedBadge>
        <div className="text-sm text-muted-foreground font-medium">Certified</div>
      </div>
    </div>
  );
};