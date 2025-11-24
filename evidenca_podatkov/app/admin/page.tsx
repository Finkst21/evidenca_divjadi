import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Dodaj vrsto divjadi</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ime vrste divjadi"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Dodaj
            </button>
          </form>
        </section>

        <section className="space-y-4 pt-6 border-t">
          <h2 className="text-xl font-semibold text-gray-700">Objavi obvestilo</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Naslov obvestila"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Vsebina obvestila"
              className="w-full p-3 border rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Objavi
            </button>
          </form>
        </section>

        <div className="pt-6 border-t">
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-gray-900 underline"
          >
          </Link>
        </div>
      </div>
    </div>
  );
}
