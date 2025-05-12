import React from 'react';
import Image from 'next/image';
import dum1 from "@/assets/amerta assets/used3.jpg";
import dum2 from "@/assets/amerta assets/used5.jpg";
import dum3 from "@/assets/amerta assets/used4.jpg";
import dum4 from "@/assets/amerta assets/used2.jpg";
import dum5 from "@/assets/amerta assets/used6.jpg";

const AboutUs = () => {
  return (
    <div className='bg-white pb-8'>
      <section className='pt-6 md:pt-40 py-18 flex flex-col md:flex-row-reverse items-center max-w-[1440px] px-6 lg:mx-auto'>
        <div className='flex flex-col w-full '>
          <div className='flex flex-col w-full justify-center items-center'>
              <h2 className="text-[2rem] font-semibold text-black text-left md:text-right">
              Cerita Kami
              </h2>
          </div>

          {/* Container utama */}
          <div className='flex gap-8 my-8 h-full items-stretch'>
            
            {/* Bagian Kiri - Foto */}
            <div className='md:w-7/12 lg:w-4/12 hidden md:flex flex-col gap-4 min-h-[100%]'>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <div>
                  <Image src={dum1} alt="Image 1" className="rounded-xl object-cover w-full h-72" />
                </div>
                <div>
                  <Image src={dum2} alt="Image 2" className="rounded-xl object-cover w-full h-72" />
                </div>
              </div>
              <div className='flex-grow'>
                <Image src={dum3} alt="Image 3" className="rounded-xl object-cover w-full h-64" />
              </div>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <div>
                  <Image src={dum4} alt="Image 4" className="rounded-xl object-cover w-full h-72" />
                </div>
                <div>
                  <Image src={dum5} alt="Image 5" className="rounded-xl object-cover w-full h-72" />
                </div>
              </div>
            </div>

            {/* Bagian Kanan - Konten */}
            <div className='flex flex-col w-full md:4/12 lg:w-7/12 h-full gap-8'>
              <div className='flex flex-col md:gap-2 lg:gap-4'>
                <h3 className='border-l-4 border-green-500 pl-4 py-2 lg:text-xl md:text-lg/5 w-9/12 font-semibold text-[#2B313B]'>
                  Mewujudkan Komunikasi Aman & Nyaman untuk Santri
                </h3>
                <p className='text-[#2B313B] md:text-xs lg:text-base'>
                  PT Amerta Semesta Nusantara didirikan secara resmi pada tahun 2016 yang bergerak di bidang Jasa IT dan Telekomunikasi dengan produk utamanya adalah Smartel Santri. Dalam dunia pendidikan pesantren, Smartel Santri hadir sebagai solusi terbaik bagi para santri untuk berkomunikasi dengan dunia luar pesantren dengan aman, nyaman, dan terjangkau, meski tetap dalam pengawasan pengasuh pondok pesantren.
                </p>
              </div>
              <hr />

              <div className='flex flex-col gap-4'>
                <h3 className='border-l-4 border-green-500 pl-4 py-2 lg:text-xl md:text-lg/5 w-9/12 font-semibold text-[#2B313B]'>
                  Bantu Pesantren, Membangun Ekosistem Digital yang Aman & Mandiri
                </h3>
                <p className='text-[#2B313B] md:text-xs lg:text-base'>
                  Dengan pola kerjasama operasi pengelolaan dengan pondok pesantren, hingga saat ini PT Amerta Semesta Nusantara telah bermitra dengan lebih dari 120 pesantren yang tersebar di seluruh Indonesia. Manfaat penyediaan Smartel Santri disamping mendidik santri agar berkomunikasi secara hemat, efisien, positif dan terpantau sehingga santri dapat fokus belajar tanpa adanya gangguan dan godaan dari berbagai layanan fitur dari penggunaan handphone/smartphone. Smartel Santri juga menyokong pertumbuhan ekonomi pesantren yang kuat dan mandiri serta pemberdayaan alumni santri sehingga berkarya di perusahaan dan masyarakat.
                </p>
              </div>
              <hr />

              <div className='flex flex-col gap-4'>
                <h3 className='border-l-4 border-green-500 pl-4 py-2 lg:text-xl md:text-lg/5 w-9/12 font-semibold text-[#2B313B]'>
                  Inovasi Berkelanjutan untuk Pesantren yang Lebih Digital
                </h3>
                <p className='text-[#2B313B] md:text-xs lg:text-base'>
                  Seiring dengan berjalannya waktu, perusahaan juga melakukan pengembangan produk berbasis IT seperti sistem keuangan pesantren, aplikasi pembayaran POS dan lainnya.
                </p>
              </div>
              <hr />

              <div className='flex flex-col gap-4'>
                <h3 className='border-l-4 border-green-500 pl-4 py-2 lg:text-xl md:text-lg/5 w-9/12 font-semibold text-[#2B313B]'>
                  Bersaing dengan Organisasi Islam untuk Kemajuan Pesantren
                </h3>
                <p className='text-[#2B313B] md:text-xs lg:text-base'>
                  Dalam kiprahnya PT Amerta Semesta Nusantara juga membina hubungan baik dengan beberapa organisasi besar Islam di Indonesia seperti NU, Muhammadiyah dan lainnya.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
