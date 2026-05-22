import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <p className="text-xl font-semibold mt-4">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}