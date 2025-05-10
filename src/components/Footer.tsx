import Image from "next/image";
import React from "react";
import { SiTiktok, SiGmail, SiInstagram } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import logo from "@/assets/logo amerta.png";
import Link from "next/link";

const Footer = () => {

  const socmed = [
    {
      title: "",
      href: "/",
      icons: <SiGmail />,
    },
    {
      title: "",
      href: "/",
      icons: <SiTiktok />,
    },
    {
      title: "",
      href: "/",
      icons: <SiInstagram />,
    },
    {
      title: "",
      href: "/",
      icons: <SlGlobe />,
    },
  ];

  return (
    <div className="w-full bg-white" id="contact">
      <div className="container mx-auto bg-white pb-24 pt-12 text-[#201F1F] px-12 md:px-10">
        <div className="flex flex-wrap justify-between gap-12">
          {/* Bagian Kiri */}
          <div className="w-full md:w-1/3">
            <Image
              src={logo}
              alt="logo"
              className="md:w-48 w-1/3"
            />
            <div className="mt-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Alamat</h2>
              <p className="md:text-base text-md font-regular">
              Jl.Raya Gempol Kavling II No.19, RT.006/002, Gempol Kel, Ceger, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820
              </p>
              <h2 className="text-xl font-semibold">Nomor Whatsapp</h2>
              <p className="md:text-base text-md font-regular">+62-822-1134-6515</p>
              <h2 className="text-xl font-semibold">Nomor Telepon</h2>
              <p className="md:text-base text-md font-regular">021 38853070</p>
            </div>
          </div>

          {/* Bagian Tengah (Social Media) */}
          <div className="w-full md:w-1/4">
            <h1 className="text-xl font-bold">Social Media</h1>
            <div className="mt-5 flex space-x-4">
              {socmed.map((item, index) => (
                <Link
                  href={item.href}
                  target={index === socmed.length - 1 ? "_self" : "_blank"}
                  key={index}
                  className="md:text-base text-md flex items-center gap-3"
                >
                  {item.icons}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Bagian Kanan (General Links) */}
          <div className="w-full md:w-1/4">
            <h1 className="text-xl font-bold">Umum</h1>
            <div className="mt-5 space-y-4">
              <Link href="/about-us" className="md:text-base text-md flex items-center gap-3">
                Tentang Kami
              </Link>
              <Link href="/our-product" className="md:text-base text-md flex items-center gap-3">
                Produk Kami
              </Link>
              <Link href="/our-partner" className="md:text-base text-md flex items-center gap-3">
                Partner Kami
              </Link>
              <Link
                href="/contact-us"
                className="md:text-base text-md flex items-center gap-3"
              >
                Kontak Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2B313B] p-5 w-full text-white text-center">
        <p className="text-xs sm:text-sm md:text-base">
            © {new Date().getFullYear()} All Right Reserved | PT. Amerta Semesta Nusantara
        </p>
      </div>
    </div>
  );
};

export default Footer;
