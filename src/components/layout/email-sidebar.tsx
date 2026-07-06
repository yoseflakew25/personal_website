const EmailSidebar = () => {
  return (
    <div
      className="fixed bottom-0 right-4 md:right-8 z-50 hidden lg:flex flex-col items-center gap-0 animate-fade-in-up"
      style={{ animationDelay: '1s' }}
    >
      <div className="flex flex-col items-center gap-0 before:content-[''] before:w-px before:h-24 before:bg-gradient-to-t before:from-foreground/15 before:to-transparent after:content-[''] after:w-px after:h-24 after:bg-gradient-to-b after:from-foreground/15 after:to-transparent">
        <a
          href="mailto:yoseflakewdev@gmail.com"
          className="font-sans text-[12px] tracking-[0.2em] text-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 vertical-text py-8"
          style={{ writingMode: 'vertical-rl' }}
        >
          yoseflakewdev@gmail.com
        </a>
      </div>
    </div>
  )
}

export default EmailSidebar
