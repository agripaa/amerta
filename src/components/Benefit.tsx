import { benefitData } from '@/data/benefit';
import React from 'react';
import Image from 'next/image';
import dum1 from "@/assets/amerta assets/used1.jpg";
import dum2 from "@/assets/amerta assets/used3.jpg";
import dum3 from "@/assets/amerta assets/used4.jpg";

const Benefit = () => {
  return (
    <div className='bg-white pb-8'>
      <section className='pt-36 md:pt-24 py-18 flex flex-col md:flex-row items-center max-w-[1440px] px-6 lg:mx-auto'>
        <div className='flex flex-col w-full'>
          <div>
              <h2 className="text-[2rem] font-semibold text-black">
              Mengapa Memilih Kami?
              </h2>
          </div>

          {/* Gunakan h-full dan items-stretch agar tinggi kanan mengikuti tinggi kiri */}
          <div className='flex gap-8 my-8 h-full items-stretch'>
            {/* Bagian Kiri - Benefit List */}
            <div className='flex flex-col w-full lg:w-8/12 h-full'>
                <div className='w-full flex flex-col gap-4 h-full'>
                  {benefitData.map((data, index) => (
                    <div key={index} className='flex border border-[#C3D4DE] rounded-2xl p-4 gap-4'>
                      <div style={{ backgroundColor: data.colorIcon }} className="flex justify-center w-[50px] h-[50px] text-white rounded-full items-center text-2xl shrink-0">
                        {React.createElement(data.icon)}
                      </div>
                      <div>
                        <h4 className='text-[#2B313B] font-semibold text-lg'>{data.title}</h4>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            {/* Bagian Kanan - Foto (Tinggi dipaksa mengikuti konten kiri) */}
            <div className='hidden w-4/12 lg:flex flex-col gap-4 min-h-[100%]'>
              <div className="grid grid-cols-2 gap-4">
                {/* Gambar pertama (besar, 2 kolom) */}
                <div>
                  <Image src={dum1} alt="Image 1" className="rounded-xl object-cover w-full h-full" />
                </div>
                {/* Gambar kedua (kiri) */}
                <div>
                  <Image src={dum2} alt="Image 2" className="rounded-xl object-cover w-full h-full" />
                </div>
              </div>
              {/* Gambar mobil (Tinggi dipaksa mengikuti konten kiri) */}
              <div className="flex-grow">
                <Image src={dum3} alt="Image 3" className="rounded-xl object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefit;
