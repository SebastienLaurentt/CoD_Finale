import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export default function NumberTicker({
  scrollProgress,
  className,
}: {
  scrollProgress: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, [0, 1], [0, 100]);

  useEffect(() => {
    motionValue.set(scrollProgress);
  }, [scrollProgress, motionValue]);

  useEffect(() => {
    const updateDisplay = (latest: number) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(Math.round(latest)) + "%";
      }
    };

    updateDisplay(0);

    const unsubscribe = displayValue.onChange(updateDisplay);

    return () => unsubscribe();
  }, [displayValue]);

  return <span className={cn("inline-block", className)} ref={ref} />;
}
