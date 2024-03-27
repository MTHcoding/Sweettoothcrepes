import Image from "next/image";

const TestimonialCard = ({ image, alt, text, author, location }) => {
  return (
    <div className="bg-transparent rounded-lg shadow-md p-6 border border-gray-300 flex flex-col lg:flex-row lg:items-center mt-8">
      <div className="mb-4 lg:w-1/3 lg:order-2">
        <Image src={image} alt={alt} width={1500} height={1500} quality={100} loading="lazy" />
      </div>
      <div className="lg:w-2/3 lg:mr-8 lg:order-1">
        <p className="text-black-800 text-xl">{text}</p>
        <h3 className="text-xl font-semibold text-gray-800">{author}</h3>
        <p className="text-lg text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

