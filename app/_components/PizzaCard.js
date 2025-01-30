import Image from "next/image";

// PizzaCard Component
const PizzaCard = ({ title, imgSrc, description }) => (
  <div className="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
    <div className="img">
      <Image
        className="w-full h-full object-cover"
        src={imgSrc}
        alt={`${title} Pizza`}
      />
    </div>
    <div className="text p-5 pt-2 text-center">
      <div className="title font-semibold my-2 text-xl text-primary-700">
        {title}
      </div>
      <div className="desc">{description}</div>
    </div>
  </div>
);

export default PizzaCard;
