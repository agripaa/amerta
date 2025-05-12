import React from 'react';
import Image from 'next/image';
import { productsData } from '@/data/products';
import { RiCheckboxCircleFill } from "react-icons/ri";


const ProductsPage = () => {
  return (
    <div className="bg-white text-black">
      <section className="pt-6 md:pt-40 py-18 max-w-[1440px] px-6 lg:mx-auto">
        {/* Header */}
        <div className="flex flex-col w-full items-start gap-4 px-4 md:px-0">
          <h2 className="text-3xl font-semibold text-black text-left w-full md:w-8/12 lg:w-[44%]">
            Solusi Digital Terbaik untuk Komunikasi di Pondok Pesantren
          </h2>
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-12 md:mt-5 lg:mt-10">
          {productsData.map((product, key) => (
            <div key={key}>
                <div key={product.id} className="flex flex-col md:flex-row items-start bg-white p-6 py-12 rounded-lg gap-6">
                  {/* Product Image */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <Image src={product.image} alt={product.title} className="rounded-2xl object-cover w-full border border-gray-300" />
                  </div>
    
                  {/* Product Content */}
                  <div className="w-full md:w-2/3 text-left">
                    <h3 className="text-3xl mb-4 font-semibold text-black">{product.title}</h3>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                    <ul className="mt-4 text-gray-700 list-none space-y-2">
                        {product.features.length !== 0 && (
                            <h3 className="text-2xl font-semibold text-black">Keunggulan</h3>
                        )}
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                        <div className='flex justify-center bg-[#DDFBE8] p-[6px] rounded-full mr-2'>
                            <RiCheckboxCircleFill className="text-green-500 shrink-0" size={18} /> 
                        </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 text-black bg-[#89ECB1] px-5 py-4 rounded-xl font-medium">Kontak Admin</button>
                  </div>
                </div>
                  <hr />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
