import { ArrowRight, Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <Frown className="h-16 w-16 text-gray-500 dark:text-gray-400" />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link
        className="flex items-center justify-center gap-x-3 font-semibold rounded-md bg-gray-900 px-4 py-3 text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/"
      >
        Go to Homepage <ArrowRight size={20} />
      </Link>
    </div>
  );
}
