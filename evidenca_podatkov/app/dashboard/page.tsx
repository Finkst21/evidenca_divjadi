"use client";

import { useState } from "react";

interface Record {
  id: number;
  datum: string;
  vrsta: string;
  lokacija: string;
  opombe: string;
} 

export default function DashboardPage() {
  const [records, setRecords] = useState<Record[]>([
    {
      id: 1,
      datum: "2025-11-11",
      vrsta: "Srna",
      lokacija: "Mozirje – gozdni rob",
      opombe: "Opažena ob sončnem vzhodu",
    },
    {
      id: 2,
      datum: "2025-11-10",
      vrsta: "Divji prašič",
      lokacija: "Golte – lovišče A",
      opombe: "Skupina 3 živali",
    },
  ]);

  return (
    <main className="min-h-screen bg-[#C6DCD2] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-[#155E2C] mb-6">
          Evidenca opažanj divjadi
        </h1>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#155E2C] text-white">
                <th className="border p-2 text-left">Datum</th>
                <th className="border p-2 text-left">Vrsta divjadi</th>
                <th className="border p-2 text-left">Lokacija</th>
                <th className="border p-2 text-left">Opombe</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-green-50">
                  <td className="border p-2">{r.datum}</td>
                  <td className="border p-2">{r.vrsta}</td>
                  <td className="border p-2">{r.lokacija}</td>
                  <td className="border p-2">{r.opombe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dodaj opažanje */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold text-[#155E2C] mb-3">
            Dodaj opažanje
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const datum = (e.currentTarget.elements.namedItem("datum") as HTMLInputElement).value;
              const vrsta = (e.currentTarget.elements.namedItem("vrsta") as HTMLInputElement).value;
              const lokacija = (e.currentTarget.elements.namedItem("lokacija") as HTMLInputElement).value;
              const opombe = (e.currentTarget.elements.namedItem("opombe") as HTMLInputElement).value;

              if (!datum || !vrsta) return;

              setRecords([
                ...records,
                { id: Date.now(), datum, vrsta, lokacija, opombe },
              ]);
              e.currentTarget.reset();
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <input
              type="date"
              name="datum"
              className="border border-gray-400 rounded-sm p-2 text-sm"
              required
            />
            <input
              type="text"
              name="vrsta"
              placeholder="Vrsta divjadi"
              className="border border-gray-400 rounded-sm p-2 text-sm"
              required
            />
            <input
              type="text"
              name="lokacija"
              placeholder="Lokacija"
              className="border border-gray-400 rounded-sm p-2 text-sm"
            />
            <input
              type="text"
              name="opombe"
              placeholder="Opombe"
              className="border border-gray-400 rounded-sm p-2 text-sm"
            />

            <button
              type="submit"
              className="md:col-span-2 lg:col-span-4 bg-[#155E2C] text-white py-2 rounded-sm font-semibold hover:bg-green-800 transition"
            >
              Shrani opažanje
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
