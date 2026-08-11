import { useState, useRef, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  objectFit?: 'cover' | 'contain' | 'fill'
  /** Tiny blurred placeholder URL or base64 */
  placeholder?: string
}

/**
 * LazyImage — loads images only when they enter the viewport.
 * Shows a shimmer skeleton while loading, then fades in the real image.
 */
export function LazyImage({
  src,
  alt,
  className = '',
  style,
  objectFit = 'cover',
  placeholder
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }   // start loading 200px before it enters view
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`lazy-img-wrapper ${className}`}
      style={style}
    >
      {/* Shimmer skeleton shown until image loads */}
      {!loaded && <div className="lazy-skeleton" />}

      {/* Tiny blurred placeholder (optional) */}
      {placeholder && !loaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden
          className="lazy-placeholder"
          style={{ width: '100%', height: '100%', display: 'block', objectFit }}
        />
      )}

      {/* Real image — only created in the DOM after inView */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`lazy-real ${loaded ? 'lazy-visible' : ''}`}
          style={{ width: '100%', height: '100%', display: 'block', objectFit }}
        />
      )}
    </div>
  )
}
