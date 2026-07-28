import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * AnimatedNumber – counts up from 0 to `value` when the element enters the viewport.
 * Used in the hero trust row and statistics section.
 */
export function AnimatedNumber({
  value,
  suffix = ''
}: {
  value: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const stepTime = 16
    const steps = duration / stepTime
    const increment = value / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
