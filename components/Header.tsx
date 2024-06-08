import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 px-4 flex flex-row bg-amber-700 items-center justify-between">
      <Link href="/">
        <div id="logo" className="font-extrabold text-xl text-white mr-4">
          Book Reviews
        </div>
      </Link>

      <Link href="/login" className="text-white mr-4">
        Login
      </Link>
    </header>
  );
}
