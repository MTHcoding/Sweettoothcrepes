import TestimonialCardLeft from "./TestimonialCardLeft";
import TestimonialCardRight from "./TestimonialCardRight";

const Testimonials = () => {
  return (
    <section className="bg-transparent flex items-center mt-8 py-6 border-t-2">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <TestimonialCardLeft
            image="/images/testimonials/crepe_sucre.png"
            alt="Temoignage 1"
            text="From my bias opinion, these are the best crepes I&#39;ve ever had."
            author="Jen"
            location="Best Friend, Tomball"
          />
          <TestimonialCardRight
            image="/images/testimonials/chocolate_crepe.png"
            alt="Temoignage 2"
            text="As a self-proclaimed crepe aficionado, I&#39;ve tried them all. But Sweet Tooth Crepes? They take the crown! The delicate folds, the luscious fillings—I&#39;m in crepe heaven."
            author="Michael"
            location="Crepes Enthusiast, Houston"
          />
          <TestimonialCardLeft
            image="/images/testimonials/chocolate_blue_crepe.png"
            alt="Temoignage 3"
            text="I stumbled upon Sweet Tooth Crepes one lazy Sunday, and it was like finding a hidden treasure. The Ham and cheese crepe? Life-changing. The chocolate/blueberry crepe? Divine. I&#39;m hooked!"
            author="Maria"
            location="Satisfied customer, Tomball"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
