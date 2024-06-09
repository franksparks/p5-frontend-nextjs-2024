import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col h-max justify-center items-center">
      <h1 className="text-7xl text-stone-500">404</h1>
      <p>Page not found.</p>
      <Button className="mt-5">
        <Link href="/books" className="text-white ">
          &#8617; Volver al listado
        </Link>
      </Button>
    </main>
  );
}
