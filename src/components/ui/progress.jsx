import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import Aos from "aos";
import "aos/dist/aos.css"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    (<ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/10 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        data-aos="fade-right"
        className="bg-cyan-400 h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </ProgressPrimitive.Root>)
  );
}

export { Progress }
