
const Footer = () => {
  return (
    <footer className="py-12 !mt-auto flex items-center flex-col justify-center">
      <div className="flex items-center justify-center sm:justify-between gap-2 w-full flex-wrap text-center">
        <span className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Design & Developed by Yosef Lakew</span>
      </div>
    </footer>
  )
}

export default Footer
