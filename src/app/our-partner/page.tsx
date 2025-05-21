"use client";

import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import * as XLSX from "xlsx";

interface Partner {
  NamaPondokPesantren: string;
  Alamat: string;
}

interface ExcelRow {
  "Nama Pondok Pesantren": string;
  "Alamat": string;
}

const ITEMS_PER_PAGE = 10;

const PartnersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersData, setPartnersData] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ambil data dari file Excel di folder public/
  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const res = await fetch("/2023 - 05_04_DATA PONPES.xlsx");
        const blob = await res.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const json = XLSX.utils.sheet_to_json<ExcelRow>(sheet);
        const formatted: Partner[] = json.map((item) => ({
          NamaPondokPesantren: item["Nama Pondok Pesantren"],
          Alamat: item["Alamat"],
        }));
        
        setPartnersData(formatted);
      } catch (err) {
        console.error("Gagal membaca file Excel:", err);
        setError("Gagal membaca file Excel.");
      } finally {
        setLoading(false);
      }
    };

    fetchExcel();
  }, []);

  // Filter pencarian
  const filteredData = partnersData.filter((partner) =>
    partner.NamaPondokPesantren?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPagination = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="bg-white text-black">
      <section className="pt-36 md:pt-40 py-18 max-w-[1440px] mx-auto">
        <div className="flex flex-col w-full items-center gap-4 px-4 md:px-0">
          <h2 className="text-3xl font-semibold text-black text-center lg:w-[44%]">
            Partner Kami
          </h2>
          <div className="relative w-full md:w-6/12">
            <RiSearchLine className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              className="bg-[#F4F7F9] w-full py-3 pl-10 pr-4 rounded-lg focus:outline-none"
              placeholder="Cari Pondok Pesantren, cth: Pondok Pesantren Al Basyariah"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        <div className="overflow-x-auto mt-10 mx-6">
          <table className="w-full rounded-xl border-none shadow-md">
            <thead>
              <tr className="bg-[#89ECB1] text-black text-left">
                <th className="p-4 border border-gray-300">Nama Pondok Pesantren</th>
                <th className="p-4 border border-gray-300">Alamat</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={2} className="text-center p-4 text-gray-500">Loading...</td>
                </tr>
              ) : paginatedData.length > 0 ? (
                paginatedData.map((partner, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="p-3 border border-gray-300">{partner.NamaPondokPesantren}</td>
                    <td className="p-3 border border-gray-300">{partner.Alamat}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center p-4 text-gray-500">Tidak ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            className={`px-3 py-1 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {renderPagination().map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-green-500 text-white" : "text-black"} ${
                page === "..." ? "cursor-default text-gray-500" : ""
              }`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-black"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
