import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Login page</h1>
      <p>This page has not been implemented yet.</p>
      <Button className="mt-5">
        <Link href="/books" className="text-white ">
          &#8617; Volver al listado
        </Link>
      </Button>
    </div>
  );
}
