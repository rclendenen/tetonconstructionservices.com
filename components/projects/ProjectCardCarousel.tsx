'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export type ProjectImage = { src: string; label?: string }

/**
 * Fixed height at each breakpoint so every card’s media area matches in shape and size.
 * Images use object-contain so nothing is cropped; letterboxing matches the neutral background.
 */
const mediaFrameClass =
  'relative w-full h-[clamp(220px,38vw,360px)] overflow-hidden bg-neutral-100'

type ProjectCardCarouselProps = {
  title: string
  category: string
  images: ProjectImage[]
  /** First slide shown (0-based). Use for before/after galleries so the “after” photo is visible without swiping. */
  initialSlideIndex?: number
}

export default function ProjectCardCarousel({
  title,
  category,
  images,
  initialSlideIndex = 0,
}: ProjectCardCarouselProps) {
  const count = images.length
  const startAt = Math.min(Math.max(0, initialSlideIndex), Math.max(0, count - 1))
  const [index, setIndex] = useState(startAt)
  const touchStartX = useRef(0)

  const current = images[index]!

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta
        if (next < 0) return count - 1
        if (next >= count) return 0
        return next
      })
    },
    [count]
  )

  if (count === 0) return null

  if (count === 1) {
    return (
      <div className={mediaFrameClass}>
        <Image
          src={current.src}
          alt={current.label ? `${title} — ${current.label}` : title}
          fill
          className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="badge bg-primary-600 text-white">{category}</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={mediaFrameClass}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} photo gallery`}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? 0
      }}
      onTouchEnd={(e) => {
        const x = e.changedTouches[0]?.clientX ?? 0
        const dx = x - touchStartX.current
        if (dx > 48) go(-1)
        if (dx < -48) go(1)
      }}
    >
      <Image
        key={current.src}
        src={current.src}
        alt={
          current.label ? `${title} — ${current.label}` : `${title} — photo ${index + 1} of ${count}`
        }
        fill
        className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={index === startAt}
      />

      <div className="absolute top-4 left-4 z-10">
        <span className="badge bg-primary-600 text-white">{category}</span>
      </div>

      {current.label ? (
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {current.label}
          </span>
        </div>
      ) : null}

      <div className="absolute inset-y-0 left-0 z-10 flex items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            go(-1)
          }}
          className="m-1 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Previous photo"
        >
          <FaChevronLeft className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            go(1)
          }}
          className="m-1 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Next photo"
        >
          <FaChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div
        className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
        role="tablist"
        aria-label="Slide indicators"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1} of ${count}`}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/45 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
