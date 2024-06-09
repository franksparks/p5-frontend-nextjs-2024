"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <div className="p-4 bg-red-500 text-white">
        Error: {error.message}
      </div>
      <Button className="ml-10 mt-10">
        <Link href="/books" className="text-white ">
          &#8617; Volver al listado
        </Link>
      </Button>
    </div>
  );
}
