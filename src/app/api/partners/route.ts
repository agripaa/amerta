import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

interface PondokPesantren {
  "Nama Pondok Pesantren": string;
  "Alamat": string;
}

export async function GET() {
  try {
    // Path ke file Excel
    const filePath = path.join(process.cwd(), "public", "2023 - 05_04_DATA PONPES.xlsx");

    // Periksa apakah file ada
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false, message: "File tidak ditemukan" }, { status: 404 });
    }

    // Baca file Excel
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    // Ambil sheet pertama
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Konversi sheet ke JSON
    let data = XLSX.utils.sheet_to_json(worksheet);

    // Gantilah nama properti agar sesuai dengan TypeScript frontend
    data = data.map((item) => {
      const ponpes = item as PondokPesantren;
      return {
        NamaPondokPesantren: ponpes["Nama Pondok Pesantren"],
        Alamat: ponpes["Alamat"],
      };
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error membaca file Excel:", error);
    return NextResponse.json(
      { success: false, message: "Gagal membaca file Excel", error },
      { status: 500 }
    );
  }
}
