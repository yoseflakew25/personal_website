import { BACKEND_STACKS, FRONTEND_STACKS } from '~/constants/stack'
import { CornerBrackets } from '~/components/ui/corner-brackets'

const stackItems = [
  ...Object.entries(FRONTEND_STACKS),
  ...Object.entries(BACKEND_STACKS),
]

const StackMarquee = () => {
  const row = (keyPrefix: string, ariaHidden: boolean) => (
    <ul
      role="list"
      aria-hidden={ariaHidden}
      className="flex items-center gap-2 pr-2"
    >
      {stackItems.map(([name, { Icon, className }]) => (
        <li
          key={`${keyPrefix}-${name}`}
          className="flex items-center gap-1.5 border border-[hsl(var(--border))] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase text-foreground/75 whitespace-nowrap"
        >
          <Icon className={className} aria-hidden="true" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="relative border border-[hsl(var(--border))] bg-card transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]">
      <CornerBrackets />

      {/* Spec bar */}
      <div className="px-4 py-1.5 flex items-center justify-between border-b border-[hsl(var(--border))]">
        <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">
          TECHNICAL STACK
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase">
          MARQUEE · AUTO
        </span>
      </div>

      {/* Ticker */}
      <div className="overflow-hidden py-3" aria-label="Technology stack ticker">
        <div className="marquee-track">
          {row('a', false)}
          {row('b', true)}
        </div>
      </div>

      {/* Footer bar */}
      <div className="px-4 py-1.5 flex items-center justify-between border-t border-[hsl(var(--border))]">
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
          NOT TO SCALE
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
          LOOP · INF
        </span>
      </div>
    </div>
  )
}

export default StackMarquee
