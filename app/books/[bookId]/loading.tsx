import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-row items-center min-h-96 p-10">
      <div className="w-1/3 flex flex-col items-center">
        <Skeleton className="rounded w-64 h-96" />
      </div>
      <div className="flex flex-col w-1/4  ">
        <p>Cargando información del libro...</p>
      </div>
    </main>
  );
}
