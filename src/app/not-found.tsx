import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-orange-500 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-orange-500 hover:to-orange-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
