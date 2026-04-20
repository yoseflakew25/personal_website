import Socials from '~/components/socials'

const Footer = () => {
  return (
    <footer className="py-10 !mt-auto relative">
      {/* Top neon gradient line */}
      <div className="neon-divider mb-8" aria-hidden="true" />

      <div className="flex flex-col items-center gap-5">
        {/* Mini social row */}
        <Socials />

        <div className="flex items-center gap-3 text-center">
          <span className="h-px w-6 bg-cyber-cyan/20" />
          <span className="text-muted-foreground/60 text-xs font-jetbrains tracking-wider">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-cyber-cyan/50">Yosef Lakew</span>
          </span>
          <span className="h-px w-6 bg-cyber-cyan/20" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
