export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-[hsl(240,20%,70%)]">
        <p>&copy; {new Date().getFullYear()} Mufti Faris</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}
