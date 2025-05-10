import React from 'react';
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri';
import { RiBuildingFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="bg-white text-black">
      <section className="pt-6 md:pt-40 py-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 min-h-[400px]">
        
        {/* Bagian Kiri - Informasi Kontak */}
        <div className="flex flex-col gap-4 h-full flex-1">
          <div className="flex w-auto">
            <p className="text-green-600 max-w-max px-4 bg-[#DDFBE8] text-center font-medium rounded-full py-1">
              Contact Us
            </p>
          </div>
          <h2 className="text-3xl font-semibold text-black text-left">
            Hubungi Kami
          </h2>
          <div className='flex'> 
            <RiBuildingFill className="text-green-500 text-xl shrink-0 mr-4" />
            <p className="text-gray-700 text-md">GRAHA PASOPATI NUSANTARA</p>
          </div>
          <div className='flex w-4/5'> 
            <RiMapPin2Fill className="text-green-500 text-xl shrink-0 mr-4" />
            <span className="flex flex-col tracking-[0.0025em]">
              <p className="text-gray-700 text-base">Jl.Raya Gempol Kavling II</p>
              <p className="text-gray-700 text-base">Gempol Kel, Ceger, Kec. Cipayung,</p>
              <p className="text-gray-700 text-base">Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820</p>
            </span>
          </div>
          <div className='flex'> 
            <RiPhoneFill className="text-green-500 text-xl shrink-0 mr-4" />
            <p className="text-gray-700 text-md">021 38853070</p>
          </div>

          {/* Card Kontak - Dibuat Sejajar */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 h-full">
            {/* Nomor Telepon */}
            <div className="flex flex-col items-start bg-white rounded-2xl p-4 w-full md:w-1/2 border border-[#DAE5EB] flex-1 gap-4">
              <div className="flex items-center gap-2">
                <div className='flex justify-center bg-[#EBF1F4] p-2 rounded-full mr-2'>
                    <RiPhoneFill className="text-black text-xl" />
                </div>
                <div className='flex flex-col'>
                    <h3 className="text-md font-semibold text-black">Nomor Whatsapp</h3>
                    <p className="text-gray-700 text-sm mt-1">+62-822-1134-6515</p>
                </div>
              </div>
              <button className="mt-auto text-black bg-[#89ECB1] font-medium px-4 py-2 rounded-md w-full">
                Chat Via WhatsApp
              </button>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start bg-white rounded-2xl p-4 w-full md:w-1/2 border border-[#DAE5EB] flex-1 gap-4">
              <div className="flex items-center gap-2">
                <div className='flex justify-center bg-[#EBF1F4] p-2 rounded-full mr-2'>
                    <RiMailFill className="text-black text-xl" />
                </div>
                <div className='flex flex-col'>
                    <h3 className="text-md font-semibold text-black">Email</h3>
                    <p className="text-gray-700 text-sm mt-1">amertasemesta@gmail.com</p>
                </div>
              </div>
              <button className="mt-auto text-black bg-[#89ECB1] font-medium px-4 py-2 rounded-md w-full">
                Contact Via Email
              </button>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Google Maps (Menyesuaikan Tinggi Konten Kiri) */}
        <div className="w-full rounded-lg overflow-hidden shadow-md flex-1 h-full">
          <iframe
            title="Google Maps"
            className="w-full h-full min-h-[390px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3965.638100516818!2d106.8910775759072!3d-6.311182993678129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Raya%20Gempol%20Kavling%20I%20No.19%2C%20RT.006%2F002%2C%20Gempol%20Kel%2C%20Ceger%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013820!5e0!3m2!1sid!2sid!4v1740899916986!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
    </div>
  );
};

export default ContactPage;
