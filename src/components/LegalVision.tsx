import React from 'react';
import { RiFocus3Fill, RiFocus2Line, RiFileListLine, RiCheckboxCircleFill } from "react-icons/ri";

const LegalVision = () => {
  return (
    <section className="bg-[#EBF1F4] rounded-md py-12">
      <div className="max-w-[1440px] mx-auto text-center px-4 md:px-8">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl md:text-[2.5rem] font-semibold mt-4 text-black">
            Visi Misi & Legalitas 
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
            {/* Visi Kami */}
            <div className="flex flex-col items-center md:items-start bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9CA24] text-black rounded-full">
                <RiFocus3Fill size={28} />
              </div>
              <div className="mt-4 text-center md:text-left flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-black">Visi</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Menjadi Penyedia Teknologi Informasi dan Telekomunikasi nomor satu dan terbaik di lingkungan Pondok Pesantren di seluruh Indonesia.
                </p>
              </div>
            </div>

            {/* Misi Kami */}
            <div className="flex flex-col items-center md:items-start bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F53B57] text-white rounded-full">
                <RiFocus2Line size={28} />
              </div>
              <div className="mt-4 text-center md:text-left flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-black">Misi</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Sebagai solusi terbaik bagi para santri untuk berkomunikasi dengan dunia luar pesantren dengan aman, nyaman dan terjangkau meski tetap dalam pengawasan pengasuh pondok pesantren.
                </p>
              </div>
            </div>
          </div>

          {/* Legalitas */}
          <div className="flex flex-col bg-white rounded-lg p-6 shadow-md mt-6 w-full max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-start text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2E79D5] text-white rounded-full">
                <RiFileListLine size={28} />
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-black">Legal</h3>
                <ul className="text-gray-700 mt-4 flex flex-col gap-4 font-medium">
                  <li className="flex justify-between w-full text-sm md:text-base pb-2">
                    <span className="flex items-center gap-2">
                      <div className='justify-center hidden md:flex  bg-[#DDFBE8] p-[6px] rounded-full'>
                        <RiCheckboxCircleFill className="text-green-500 shrink-0" size={18} /> 
                      </div>
                      Akte Pendirian
                    </span>
                    <span className="text-gray-900">No. 131 Tgl 17 Mei 2016</span>
                  </li>
                  <li className="flex justify-between w-full text-sm md:text-base pb-2">
                    <span className="flex items-center gap-2">
                      <div className='justify-center hidden md:flex  bg-[#DDFBE8] p-[6px] rounded-full'>
                        <RiCheckboxCircleFill className="text-green-500 shrink-0" size={18} /> 
                      </div>
                      Notaris
                    </span>
                    <span className="text-gray-900">SYANTI HARDIANTI, SH</span>
                  </li>
                  <li className="flex justify-between w-full text-sm md:text-base pb-2">
                    <span className="flex items-center gap-2">
                      <div className='justify-center hidden md:flex  bg-[#DDFBE8] p-[6px] rounded-full'>
                        <RiCheckboxCircleFill className="text-green-500 shrink-0" size={18} /> 
                      </div>
                      Pengesahan dari Kementerian Hukum dan HAM
                    </span>
                    <span className="text-gray-900 text-right md:text-left">No.AHU - AH0025615.AH.01.01.TAHUN.2016</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalVision;
