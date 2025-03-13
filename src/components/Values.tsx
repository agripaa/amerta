"use client";

import React, { useState } from "react";
import { 
  RiShieldCheckFill, RiAwardFill, RiTeamFill, 
  RiHandHeartFill, RiEqualizerLine, RiExchangeFill 
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  { id: 1,
    letter: "I",
    title: "Integritas", 
    icon: RiShieldCheckFill,
    position: "right",
    data: {
      title: "Integritas sebagai Pilar Utama PT Amerta Semesta Nusantara",
      detail: [
        { point: "Komitmen pada Kejujuran & Transparansi", desc: "Kami menjunjung tinggi prinsip keterbukaan dalam setiap aspek bisnis, memastikan kepercayaan pelanggan dan mitra tetap terjaga." },
        { point: "Etika dalam Setiap Keputusan", desc: "Setiap langkah yang kami ambil didasarkan pada nilai moral yang kuat, menciptakan bisnis yang adil dan bertanggung jawab." },
        { point: "Membangun Kepercayaan Jangka Panjang", desc: "Dengan integritas sebagai fondasi, kami berkomitmen membangun hubungan yang kokoh dan saling menguntungkan dengan semua pemangku kepentingan." }
      ]
    }
  },
  { id: 2,
    letter: "K",
    title: "Kompeten", 
    icon: RiAwardFill,
    position: "right",
    data: {
      title: "Kompetensi Unggul untuk Solusi Teknologi Terbaik",
      detail: [
        { point: "Pembelajaran Tanpa Henti", desc: "Kami berkomitmen untuk terus meningkatkan keahlian melalui pendidikan dan pelatihan berkelanjutan." },
        { point: "Inovasi untuk Masa Depan", desc: "Dengan tim yang kompeten, kami menghadirkan solusi teknologi canggih yang efektif dan relevan." },
        { point: "Siap Menghadapi Tantangan Industri", desc: "Kompetensi kami memungkinkan adaptasi cepat terhadap perkembangan teknologi dan kebutuhan klien." }
      ]
    }
  },
  { id: 3,
    letter: "H",
    title: "Harmonis", 
    icon: RiTeamFill,
    position: "right",
    data: {
      title: "Budaya Harmonis untuk Kinerja Maksimal",
      detail: [
        { point: "Komunikasi Terbuka & Saling Menghargai", desc: "Kami membangun lingkungan kerja yang penuh kepercayaan dengan komunikasi yang jujur dan sikap saling menghormati." },
        { point: "Kolaborasi untuk Inovasi", desc: "Harmoni dalam tim mendorong terciptanya ide-ide baru dan solusi terbaik bagi klien serta perusahaan." },
        { point: "Produktivitas & Kinerja yang Optimal", desc: "Dengan kerja sama yang solid, kami memastikan setiap individu dapat berkembang dan memberikan kontribusi maksimal." }
      ]
    }
  },
  { id: 4,
    letter: "L",
    title: "Loyalitas", 
    icon: RiHandHeartFill,
    position: "left",
    data: {
      title: "Loyalitas Sebagai Kunci Keberlanjutan & Kepercayaan",
      detail: [
        { point: "Dedikasi & Tanggung Jawab", desc: "Kami menanamkan rasa memiliki dalam setiap individu untuk mendukung visi dan misi perusahaan." },
        { point: "Komitmen terhadap Kualitas & Integritas", desc: "Loyalitas tercermin dalam kerja keras dan konsistensi dalam memberikan hasil terbaik." },
        { point: "Kemitraan Jangka Panjang", desc: "Kami menghargai kepercayaan pelanggan dan mitra bisnis yang terus tumbuh bersama kami." }
      ]
    }
  },
  { id: 5,
    letter: "A",
    title: "Adaptif", 
    icon: RiEqualizerLine,
    position: "left",
    data: {
      title: "Adaptasi Cepat untuk Inovasi Berkelanjutan",
      detail: [
        { point: "Selalu Siap Menghadapi Perubahan", desc: "Kami menanamkan budaya fleksibel yang memungkinkan tim beradaptasi dengan cepat terhadap perkembangan teknologi." },
        { point: "Inovasi sebagai Kunci Keberlanjutan", desc: "Dengan terus mengeksplorasi teknologi baru, kami memastikan solusi yang relevan dan efektif bagi pasar." },
        { point: "Metode Kerja yang Dinamis & Efisien", desc: "Kami mendorong penggunaan strategi dan pendekatan terbaru untuk menghadapi tantangan industri yang terus berubah." }
      ]
    }
  },
  { id: 6,
    letter: "S",
    title: "Sinergi", 
    icon: RiExchangeFill,
    position: "left",
    data: {
      title: "Sinergi untuk Kesuksesan Bersama",
      detail: [
        { point: "Kerja Sama Tim yang Solid", desc: "Kami percaya bahwa pencapaian besar hanya dapat diraih melalui kolaborasi erat antar individu dan departemen." },
        { point: "Berbagi Ide & Sumber Daya", desc: "Setiap anggota tim didorong untuk berkontribusi dengan berbagi wawasan demi menciptakan solusi yang lebih inovatif dan efisien." },
        { point: "Kolaborasi untuk Hasil Maksimal", desc: "Sinergi yang kuat dengan mitra dan pelanggan memungkinkan kami menghadapi tantangan dan meraih kesuksesan bersama." }
      ]
    }
  },
];

const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex)
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className='w-9/12 mx-auto'>
            <div className='flex justify-center w-full'>
              <p className="text-green-600 max-w-max px-4 bg-[#DDFBE8] text-center font-medium rounded-full py-1">
                Our Corporate Value
              </p>
            </div>
            <h2 className="text-[2.5rem] font-semibold mt-2 text-black">
              Nilai – Nilai Perusahaan
            </h2>
            <p className='text-left mt-2'>
              PT Amerta Semesta Nusantara adalah perusahaan yang berkomitmen untuk menjadi pemimpin dalam bidang teknologi informasi dan telekomunikasi di Pondok Pesantren. Dengan mengedepankan nilai-nilai IKHLAS dalam setiap aspek operasionalnya, perusahaan ini berusaha untuk menciptakan lingkungan kerja yang profesional, inovatif, dan berkelanjutan. Berikut adalah penjabaran nilai IKHLAS yang diterapkan oleh PT Amerta Semesta Nusantara:
            </p>
          </div>

        {/* Grid untuk huruf dan ikon */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-10 w-full mx-auto">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center gap-2 group hover:bg-[#DDFBE8] duration-500 py-6"
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-20 h-20 flex items-center justify-center bg-[#2ED573] text-white rounded-full text-5xl font-bold cursor-pointer">
                  {item.letter}
                </div>
                <p className="text-xl font-semibold mt-2 text-black">{item.title}</p>
                <IconComponent className="text-[#C3D4DE] mt-6" size={90} />

                <AnimatePresence>
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-1/4 left-0 transform -translate-x-0 -translate-y-0 w-full max-w-[500px] bg-white rounded-2xl shadow-lg p-6 px-8 z-50 md:hidden"
                  >
                    <IconComponent className="absolute opacity-10 text-[#2ED573] top-6 right-0" size={280} />
                    <h3 className="text-left mb-3 text-lg font-semibold text-black">{item.data.title}</h3>
                    <hr />
                    <ul className="mt-3 text-left text-gray-700 space-y-4">
                      {item.data.detail.map((detail, i) => (
                        <li key={i} className="list-disc pl-1">
                          <p className="font-semibold">{detail.point}</p>
                          <p className="text-sm list-none">{detail.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Modal untuk Desktop (Kanan/Kiri) */}
              <AnimatePresence>
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: item.position === "right" ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: item.position === "right" ? 50 : -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`hidden md:block absolute md:top-0 ${
                      item.position === "right" ? "md:left-full md:ml-6" : "md:right-full md:mr-6"
                    } w-[500px] bg-white rounded-2xl shadow-lg p-6 px-8 z-50`}
                  >
                    <IconComponent className="absolute opacity-10 text-[#2ED573] top-6 right-0" size={280} />
                    <h3 className="text-left mb-3 text-lg font-semibold text-black">{item.data.title}</h3>
                    <hr />
                    <ul className="mt-3 text-left text-gray-700 space-y-4">
                      {item.data.detail.map((detail, i) => (
                        <li key={i} className="list-disc pl-1">
                          <p className="font-semibold">{detail.point}</p>
                          <p className="text-sm list-none">{detail.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;