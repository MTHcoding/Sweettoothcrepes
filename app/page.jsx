import Image from "next/image";
import Link from "next/link";
import Testimonials from "@components/Testimonials";

const Home = () => (
  <section className="w-full flex-center flex-col">
    {/* Background Image */}
    <div className="relative flex items-center justify-center flex-col-reverse lg:flex-row">
      <div className="max-w-3xl text-center z-10">
        <h1 className="head_text">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient"> Our Delicious Desserts</span>
        </h1>
        <p className="desc">
          Homemade, Sweet & Savory desserts: crepes, cakes & more.
        </p>
        {/* Order Button */}
        <Link href="/order" className="order_btn">
          Place Your Order
        </Link>
      </div>
      <div className="w-full max-w-md lg:ml-8">
        <Image
          src="/images/cover.png"
          alt="Art n Paper Logo"
          width={800}
          height={800}
          className="rounded-full"
        />
      </div>
    </div>

    <Testimonials />
  </section>
);

export default Home;
