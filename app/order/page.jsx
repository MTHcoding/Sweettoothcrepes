"use client";

import Image from 'next/image';
import Link from "next/link";




const OrderPage = () => {
  return (
    <section className="order-page flex flex-col items-center justify-center py-16 bg-gradient-to-r from-orange-400  to-amber-100">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl text-red-900 font-bold mb-8">Join Us at the Sweet Spot!</h2>
        <p className="text-lg mb-8 text-gray-600">
          At Sweet Tooth Crepes, we believe that life is too short to resist the allure of delectable desserts. Our passion lies in crafting irresistible homemade treats that tantalize your taste buds and transport you to a world of sweetness. We dance on the edge of sweet and savory. Imagine a crepe filled with juicy strawberries, drizzled with warm chocolate, and sprinkled with crushed almonds. Or perhaps a savory crepe with prosciutto and tomatoes. The possibilities are as endless as your cravings.
        </p>
        <h3 className="text-3xl text-red-900 font-bold mb-8">To Order:</h3>

        <p className="text-lg mb-8 text-gray-600">&bull; Call us: <a href="tel:7134160755" className="underline text-black">713-416-0755</a></p>
        <p className="text-lg mb-2 text-gray-600 flex items-center justify-center">
          &bull; Connect with us: 
        </p>
        <div className="flex items-center justify-center">
          <Link legacyBehavior href="https://www.instagram.com/sweettoothcrepes/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-white-icon.png" alt="Instagram Icon" width={40} height={40} />
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-1">
        <Image
          src="/images/back_cover.png"
          alt="Crepes"
          width={1000}
          height={1000}
          quality={100}  
          loading='lazy'          
          className="rounded-md shadow-lg"
        />
      </div>

      <h4 className="text-5xl text-red-900 font-bold mt-8">Thank You!</h4>
    </section>
  );
};

export default OrderPage;
