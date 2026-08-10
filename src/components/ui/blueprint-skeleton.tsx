import React from 'react'
import { cn } from '~/lib/utils'
import { CornerBrackets } from '~/components/ui/corner-brackets'

// Base container for blueprint-style items
export const BlueprintSkeletonContainer = ({
  className = '',
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative border border-[hsl(var(--border))] bg-card/30 overflow-hidden select-none',
        className
      )}
    >
      {/* Blueprint Corner Accents */}
      <CornerBrackets size="0.5rem" colorClass="border-[hsl(var(--blueprint-line)/0.4)]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="animate-pulse w-full h-full">
        {children}
      </div>
    </div>
  )
}

// Blueprint block line skeleton (e.g. text line or placeholder)
export const BlueprintSkeletonLine = ({
  className = '',
}: {
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-2 bg-[hsl(var(--blueprint-line)/0.12)] border-l-2 border-[hsl(var(--blueprint-line)/0.4)]',
        className
      )}
    />
  )
}

// 1. Skills Skeleton
export const SkillsSkeleton = () => {
  return (
    <div className="space-y-8 bg-transparent">
      {/* Section Header */}
      <div className="flex items-center gap-3 animate-pulse">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.3)] uppercase">
          02
        </span>
        <h2 className="font-mono text-sm tracking-wider text-muted-foreground/50 uppercase font-medium">
          [TECHNICAL_SCHEMATICS.dwg]
        </h2>
        <span className="flex-1 h-px bg-[hsl(var(--border)/0.5)]" />
      </div>

      <BlueprintSkeletonContainer className="divide-y divide-[hsl(var(--border))]">
        {/* Frontend Section */}
        <div className="p-4 space-y-4">
          <div className="text-blueprint-meta opacity-50 font-mono text-[9px]">[SECTOR_A: FRONTEND_UI]</div>
          <div className="flex flex-wrap gap-2.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-24 h-6 border border-[hsl(var(--border)/0.6)] px-2 py-1 flex items-center gap-1.5"
              >
                <div className="w-3.5 h-3.5 bg-[hsl(var(--blueprint-line)/0.15)] rounded-sm" />
                <BlueprintSkeletonLine className="w-12 h-1.5" />
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="p-4 space-y-4">
          <div className="text-blueprint-meta opacity-50 font-mono text-[9px]">[SECTOR_B: BACKEND_INFRA]</div>
          <div className="flex flex-wrap gap-2.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="w-28 h-6 border border-[hsl(var(--border)/0.6)] px-2 py-1 flex items-center gap-1.5"
              >
                <div className="w-3.5 h-3.5 bg-[hsl(var(--blueprint-line)/0.15)] rounded-sm" />
                <BlueprintSkeletonLine className="w-16 h-1.5" />
              </div>
            ))}
          </div>
        </div>
      </BlueprintSkeletonContainer>
    </div>
  )
}

// 2. Experience Skeleton
export const ExperienceSkeleton = () => {
  return (
    <div className="space-y-8 bg-transparent">
      {/* Section Header */}
      <div className="flex items-center gap-3 animate-pulse">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.3)] uppercase">
          03
        </span>
        <h2 className="font-mono text-sm tracking-wider text-muted-foreground/50 uppercase font-medium">
          [PROFESSIONAL_TIMELINE.log]
        </h2>
        <span className="flex-1 h-px bg-[hsl(var(--border)/0.5)]" />
      </div>

      <div className="relative pl-6 border-l border-dashed border-[hsl(var(--blueprint-line)/0.2)] ml-2 space-y-8 py-2">
        {Array.from({ length: 3 }).map((_, itemIndex) => (
          <div key={itemIndex} className="relative space-y-3 animate-pulse">
            {/* Timeline node */}
            <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 border border-[hsl(var(--blueprint-line)/0.5)] bg-background rotate-45" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="space-y-1">
                <div className="h-4 w-48 bg-[hsl(var(--blueprint-line)/0.12)] border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
                <div className="h-3 w-32 bg-[hsl(var(--blueprint-line)/0.08)] border-l-2 border-[hsl(var(--blueprint-line)/0.3)]" />
              </div>
              <div className="w-24 h-5 border border-[hsl(var(--blueprint-line)/0.2)] px-2 py-0.5" />
            </div>

            <div className="space-y-2 pt-2 border-t border-[hsl(var(--border)/0.3)]">
              <BlueprintSkeletonLine className="w-[90%]" />
              <BlueprintSkeletonLine className="w-[85%]" />
              <BlueprintSkeletonLine className="w-[70%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 3. Education Skeleton
export const EducationSkeleton = () => {
  return (
    <div className="space-y-8 bg-transparent">
      {/* Section Header */}
      <div className="flex items-center gap-3 animate-pulse">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.3)] uppercase">
          04
        </span>
        <h2 className="font-mono text-sm tracking-wider text-muted-foreground/50 uppercase font-medium">
          [ACADEMIC_CREDENTIALS.log]
        </h2>
        <span className="flex-1 h-px bg-[hsl(var(--border)/0.5)]" />
      </div>

      <div className="relative pl-6 border-l border-dashed border-[hsl(var(--blueprint-line)/0.2)] ml-2 space-y-8 py-2">
        {Array.from({ length: 2 }).map((_, itemIndex) => (
          <div key={itemIndex} className="relative space-y-3 animate-pulse">
            {/* Timeline node */}
            <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 border border-[hsl(var(--blueprint-line)/0.5)] bg-background rotate-45" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="space-y-1">
                <div className="h-4 w-52 bg-[hsl(var(--blueprint-line)/0.12)] border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
                <div className="h-3 w-40 bg-[hsl(var(--blueprint-line)/0.08)] border-l-2 border-[hsl(var(--blueprint-line)/0.3)]" />
              </div>
              <div className="w-20 h-5 border border-[hsl(var(--blueprint-line)/0.2)] px-2 py-0.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 4. Designs Grid Skeleton
export const DesignsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlueprintSkeletonContainer key={i} className="h-72 flex flex-col justify-between p-0">
          {/* Header */}
          <div className="border-b border-[hsl(var(--border))] px-3 py-2 flex items-center justify-between">
            <div className="h-2.5 w-24 bg-[hsl(var(--blueprint-line)/0.12)]" />
            <div className="h-2 w-10 bg-[hsl(var(--blueprint-line)/0.12)]" />
          </div>

          {/* Schematic Image Placeholder with drafting crossed lines */}
          <div className="flex-1 relative bg-[hsl(var(--blueprint-line)/0.03)] border-b border-[hsl(var(--border))] overflow-hidden flex items-center justify-center">
            {/* Diagonal crossed drafting lines */}
            <svg className="absolute inset-0 w-full h-full stroke-[hsl(var(--blueprint-line)/0.08)] stroke-[0.5px]" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="100%" y2="100%" />
              <line x1="100%" y1="0" x2="0" y2="100%" />
            </svg>
            <span className="font-mono text-[9px] tracking-widest text-[hsl(var(--blueprint-line)/0.4)] uppercase">
              [VISUAL_SCHEMATIC_PENDING]
            </span>
          </div>

          {/* Footer Info */}
          <div className="p-3 space-y-2">
            <BlueprintSkeletonLine className="w-[70%]" />
            <BlueprintSkeletonLine className="w-[45%]" />
          </div>
        </BlueprintSkeletonContainer>
      ))}
    </div>
  )
}

// 5. Project Carousel Skeleton (Main Projects page loading)
// 6. Contact Section Skeleton
export const ContactSkeleton = () => {
  return (
    <div className="space-y-8 bg-transparent">
      {/* Section Header */}
      <div className="flex items-center gap-3 animate-pulse">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.3)] uppercase">
          06
        </span>
        <h2 className="font-mono text-sm tracking-wider text-muted-foreground/50 uppercase font-medium">
          [CONTACT_TRANSMITTAL.dwg]
        </h2>
        <span className="flex-1 h-px bg-[hsl(var(--border)/0.5)]" />
      </div>

      <BlueprintSkeletonContainer className="flex flex-col md:flex-row w-full gap-0 min-h-[300px]">
        {/* Left info card skeleton */}
        <div className="md:max-w-sm w-full border-b md:border-b-0 md:border-r border-[hsl(var(--border))] p-5 space-y-5">
          <div className="border-b border-[hsl(var(--border))] pb-2 space-y-1">
            <BlueprintSkeletonLine className="w-32" />
            <BlueprintSkeletonLine className="w-20" />
          </div>
          <div className="space-y-2">
            <BlueprintSkeletonLine className="w-full" />
            <BlueprintSkeletonLine className="w-[85%]" />
          </div>
          <div className="space-y-2">
            <BlueprintSkeletonLine className="w-20" />
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-8 h-8 border border-[hsl(var(--border)/0.5)]" />
              ))}
            </div>
          </div>
        </div>

        {/* Right form skeleton */}
        <div className="flex-1 p-5 space-y-4">
          <div className="border-b border-[hsl(var(--border))] pb-2 space-y-1">
            <BlueprintSkeletonLine className="w-28" />
            <BlueprintSkeletonLine className="w-20" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <BlueprintSkeletonLine className="h-9 w-full" />
            <BlueprintSkeletonLine className="h-9 w-full" />
          </div>
          <BlueprintSkeletonLine className="h-9 w-full" />
          <BlueprintSkeletonLine className="h-[100px] w-full" />
          <BlueprintSkeletonLine className="h-10 w-full" />
        </div>
      </BlueprintSkeletonContainer>
    </div>
  )
}

export const ProjectCarouselSkeleton = () => {
  return (
    <BlueprintSkeletonContainer className="h-[600px] flex flex-col bg-card">
      {/* Spec Header */}
      <div className="border-b border-[hsl(var(--border))] px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-[hsl(var(--blueprint-line)/0.5)]">[PROJECT_SPECIFICATION_SHEET]</span>
          <span className="h-3 w-px bg-[hsl(var(--border))]" />
          <span className="font-mono text-[9px] text-muted-foreground/40 uppercase">STATUS: RESOLVING</span>
        </div>
        <span className="font-mono text-[9px] text-[hsl(var(--blueprint-line)/0.5)]">-- / --</span>
      </div>

      {/* Main content columns */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 items-center px-4 sm:px-8 py-6">
        {/* Left Column: Text information */}
        <div className="flex-[0.95] space-y-6 w-full">
          {/* Large outlined style number */}
          <div
            className="font-mono font-bold text-6xl sm:text-7xl leading-none select-none"
            style={{
              WebkitTextStroke: '1px hsl(var(--foreground) / 0.05)',
              color: 'transparent',
            }}
          >
            [00]
          </div>

          <div className="space-y-2">
            <div className="h-8 w-[80%] bg-[hsl(var(--blueprint-line)/0.12)] border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="h-3.5 w-[35%] bg-[hsl(var(--blueprint-line)/0.08)]" />
          </div>

          <div className="space-y-2.5 pt-4 border-t border-[hsl(var(--border)/0.5)]">
            <BlueprintSkeletonLine className="w-full" />
            <BlueprintSkeletonLine className="w-[95%]" />
            <BlueprintSkeletonLine className="w-[90%]" />
            <BlueprintSkeletonLine className="w-[75%]" />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-16 h-5 border border-[hsl(var(--border)/0.5)]" />
            ))}
          </div>

          <div className="pt-4 flex gap-4">
            <div className="w-24 h-8 border border-[hsl(var(--blueprint-line)/0.3)]" />
            <div className="w-24 h-8 border border-[hsl(var(--blueprint-line)/0.3)]" />
          </div>
        </div>

        {/* Right Column: Schematic image layout */}
        <div className="flex-1 w-full aspect-video md:h-[350px] relative bg-[hsl(var(--blueprint-line)/0.02)] border border-[hsl(var(--border))] flex items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full stroke-[hsl(var(--blueprint-line)/0.06)] stroke-[0.5px]" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" />
            <line x1="100%" y1="0" x2="0" y2="100%" />
            <circle cx="50%" cy="50%" r="20%" fill="none" strokeDasharray="3 3" />
          </svg>
          <div className="font-mono text-[9px] tracking-widest text-[hsl(var(--blueprint-line)/0.4)] uppercase text-center space-y-1">
            <p>[DRAFT_IMAGE_LOAD_PENDING]</p>
            <p className="text-[9px] opacity-75">SCALE: 1:1 · DIM: SVG_CANVAS</p>
          </div>
        </div>
      </div>
    </BlueprintSkeletonContainer>
  )
}
