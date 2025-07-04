import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  progress: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 1000, 
  progress, 
  prefix = '', 
  suffix = '',
  className = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetValue = Math.floor(end * progress);
    setCount(targetValue);
  }, [end, progress]);

  return (
    <div className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};