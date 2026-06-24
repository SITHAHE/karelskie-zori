import { useState } from 'react'

// Изображение с blur-up подгрузкой: сначала крошечное размытое превью,
// затем плавно проявляется полная версия. Резервирует место через aspect-ratio.
export default function SmartImage({ src, blur, alt, className = '', imgClassName = '', ratio }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`relative overflow-hidden bg-forest-100 ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {blur && (
        <img
          src={blur}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-700 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}
