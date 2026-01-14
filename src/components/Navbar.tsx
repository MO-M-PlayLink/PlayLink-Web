import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-8">
        {/* Left - Logo/Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 transition-colors hover:text-primary-600"
        >
          PLAYLINK
        </Link>

        {/* Right - Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/terms"
            className="text-base font-medium text-gray-900 transition-colors hover:text-primary-600"
          >
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
}
