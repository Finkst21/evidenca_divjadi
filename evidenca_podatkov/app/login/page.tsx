"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "lovec" && password === "1234") {
      router.push("/");
    } else {
      setError("Napačno uporabniško ime ali geslo.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-[80vh] pt-12">
      <div className="w-full max-w-sm bg-[#C6DCD2] p-6 rounded">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-semibold text-sm mb-1">
              uporabniško ime:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-400 rounded-sm p-1 text-sm focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">
              geslo:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-400 rounded-sm p-1 text-sm focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#155E2C] text-white font-semibold text-sm px-3 py-1 rounded-sm hover:bg-green-800"
          >
            prijava
          </button>
        </form>

        {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

        <div className="mt-4 text-sm">
          <a
            href="#"
            className="text-blue-700 hover:underline block mb-2"
          >
            Ste pozabili geslo?
          </a>
          <p>
            Kontakt:{" "}
            <a
              href="mailto:info.lisjak@lovskazveza.si"
              className="text-blue-700 hover:underline"
            >
              info.lisjak@lovskazveza.si
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
