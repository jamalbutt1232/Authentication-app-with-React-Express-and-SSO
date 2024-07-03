import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
