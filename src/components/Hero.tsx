import Image from 'next/image';
import React from 'react';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';

const Hero = () => {
    return (
      <section className="pt-18 md:pt-24 lg:pt-36 py-24 flex-col-reverse flex md:flex-row items-center justify-between min-h-screen px-6 lg:max-w-[1440px] lg:mx-auto">
        <div className="mt-24 md:w-[38%] flex flex-col gap-6">
          <div className='w-full'>
            <p className="text-green-600 max-w-max px-4 md:px-2 md:text-base bg-[#DDFBE8] text-center font-medium rounded-full py-1">
              PT. Amerta Semesta Nusantara
            </p>
          </div>
          <h2 className="text-4xl md:text-2xl lg:text-5xl font-semibold text-[#2B313B]">Komunikasi Aman Hati Nyaman</h2>
          <p className=" text-[#2B313B] text-sm lg:text-base font-light">
            Perusahaan yang bergerak di bidang jasa IT dan Telekomunikasi sejak 2016 dengan produk utamanya adalah <span className='font-bold'>Smartel Santri</span> yang hadir sebagai solusi para santri untuk berkomunikasi dengan dunia luar pesantren dengan aman, nyaman, dan terjangkau, meski tetap dalam pengawasan pengasuh pondok pesantren.
          </p>
          <div>
            <button className="mt-0 md:mt-6 bg-[#89ECB1] text-base text-black px-6 py-4 rounded-xl font-medium">Selengkapnya</button>
          </div>
        </div>

        {/* Container Gambar dengan Absolute Positioning */}
        <div className="md:w-7/12 relative w-full flex items-center justify-center">
          {/* Gambar Tengah (Utama) */}
          <div className="relative w-[75%] z-10">
            <Image src={hero2} alt="Gambar Tengah" className="rounded-lg shadow-lg w-full" />
          </div>

          {/* Gambar Atas Kiri */}
          <div className="absolute top-[-30%] left-0 w-[35%] z-20">
            <Image src={hero1} alt="Gambar Kiri Atas" className="rounded-lg shadow-md w-full" />
          </div>

          {/* Gambar Bawah Kanan */}
          <div className="absolute bottom-[-20%] right-0 w-[35%] z-20">
            <Image src={hero3} alt="Gambar Kanan Bawah" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>
    );
};

export default Hero;
