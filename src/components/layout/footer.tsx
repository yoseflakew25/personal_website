import Socials from '~/components/socials'

const Footer = () => {
  return (
    <footer className="py-10 !mt-auto relative">
      <div className="border-t border-white/5 mb-8 w-full max-w-4xl mx-auto" aria-hidden="true" />

      <div className="flex flex-col items-center gap-5">
        <Socials />

        <div className="flex items-center gap-3 text-center">
          <span className="h-px w-6 bg-white/10" />
          <span className="text-muted-foreground/60 text-xs font-sans tracking-wider">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-primary/70">Yosef Lakew</span>
          </span>
          <span className="h-px w-6 bg-white/10" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
