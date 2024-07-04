import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to the Home Page</h1>
      <div className="space-x-4">
        <Link href="/login" legacyBehavior>
          <a className="bg-blue-500 text-white py-4 px-8 rounded-lg text-xl hover:bg-blue-600">
            Go to Login
          </a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="bg-green-500 text-white py-4 px-8 rounded-lg text-xl hover:bg-green-600">
            Go to Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
}
