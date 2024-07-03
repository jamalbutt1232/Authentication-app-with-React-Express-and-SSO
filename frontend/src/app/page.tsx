import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <div className="space-x-4">
        <Link href="/login" legacyBehavior>
          <a className="bg-blue-500 text-white p-2 rounded">Go to Login</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="bg-green-500 text-white p-2 rounded">Go to Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
