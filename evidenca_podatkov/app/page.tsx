import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="bg-white/60 p-10 rounded-xl shadow-md max-w-xl">
        <h2 className="text-3xl font-bold text-[#155E2C] mb-4">
          Evidenca Divjadi
        </h2>
        <p className="text-gray-700 mb-8">
          Dobrodošli v sodobnem lovskem informacijskem sistemu Lisjak.  
          Za dostop do evidence se prijavite s svojim uporabniškim računom.
        </p>
        <Link
          href="/login"
          className="bg-[#155E2C] text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition"
        >
          Nadaljuj na prijavo
        </Link>
      </div>
    </main>
  );
}
