'use client'

import { BlueprintSkeletonContainer, BlueprintSkeletonLine } from '~/components/ui/blueprint-skeleton'

const Loading = () => {
  return (
    <div className="!mt-8 relative pb-12 animate-pulse space-y-8">
      {/* Schematic loading header */}
      <div className="relative border border-[hsl(var(--border))] bg-card/40 p-4">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)]" />

        <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
          <p className="font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line)/0.5)]">[LOADING_SYSTEM_SCHEMA...]</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="h-6 w-48 bg-[hsl(var(--blueprint-line)/0.12)] border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
          <div className="w-32 h-8 border border-[hsl(var(--border))]" />
        </div>
      </div>

      {/* Grid of contents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <BlueprintSkeletonContainer className="h-64 p-4 space-y-4">
            <BlueprintSkeletonLine className="w-3/4" />
            <BlueprintSkeletonLine className="w-full" />
            <BlueprintSkeletonLine className="w-[90%]" />
            <BlueprintSkeletonLine className="w-1/2" />
          </BlueprintSkeletonContainer>
        </div>
        <div className="space-y-6">
          <BlueprintSkeletonContainer className="h-64 p-4 space-y-4">
            <BlueprintSkeletonLine className="w-1/2" />
            <BlueprintSkeletonLine className="w-full" />
            <BlueprintSkeletonLine className="w-3/4" />
          </BlueprintSkeletonContainer>
        </div>
      </div>
    </div>
  )
}

export default Loading

