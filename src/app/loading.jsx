export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>

        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>

      <p className="ml-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
}