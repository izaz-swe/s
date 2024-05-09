import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = (offers) => {
    const {homeOffers} = offers;
    const [startIndex, setStartIndex] = useState(0);
 
  const nextSlide = () => {
    const newStartIndex =
      startIndex + 1 >= homeOffers.length - 3 ? 0 : startIndex + 1;
    setStartIndex(newStartIndex);
  };

  const prevSlide = () => {
    const newStartIndex =
      startIndex - 1 < 0 ? homeOffers.length - 4 : startIndex - 1;
    setStartIndex(newStartIndex);
  };
    return (
        <div className="relative px-5">
        <div className="absolute inset-y-0 -left-5 flex items-center">
          <button onClick={prevSlide} className="text-3xl">
            &#10094;
          </button>
        </div>
        <div className="absolute inset-y-0 -right-5 flex items-center">
          <button onClick={nextSlide} className="text-3xl">
            &#10095;
          </button>
        </div>
        <div className="flex overflow-hidden w-full px-5">
          {homeOffers?.slice(startIndex, startIndex + 4).map((card, index) => (
            <div
              key={card.index}
              className={`flex justify-center items-center mx-auto transform transition-transform duration-300 p-5 rounded-xl ${
                index === 0 ? "ml-auto" : ""
              }`}
            >
              <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center bg-white shadow-md pb-5">
                <img
                  src={card?.image}
                  alt={card.name}
                  className="object-cover w-64 h-48"
                />

                <div className="p-2 text-center">
                  <h3 className="text-lg text-center font-semibold mb-2">
                    {card.offerName}
                  </h3>
                  <h3 className="text-lg">
                    Total : {card?.weight} {card?.unit}{" "}
                  </h3>
                  <h3 className="text-lg">
                    Price : {card?.price}{" "}
                    <span className="text-sm">TK/unit</span>{" "}
                  </h3>
                  <button  className="btn bg-green-700 text-lg py-2 px-5 mt-2 rounded-lg text-white text-center hover:bg-blue-600  hover:text-black">
                   <Link to={`/app/buyer/details/${card.offerId}`}>
                   Details
                   </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Slider;