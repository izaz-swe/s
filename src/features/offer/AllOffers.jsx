import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOffers } from "../../state/reducers/offer/offerSlice";


const AllOffers = () => {
   
    const dispatch = useDispatch();
  const {homeOffers} = useSelector((state)=>state.offer)
 
    useEffect(()=>{
 dispatch(getOffers())
    },[dispatch])
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-10">
            {
                homeOffers.map((card,i)=>
                    <div
                    key={i} className="rounded-lg overflow-hidden flex flex-col justify-center items-center bg-white shadow-md pb-5">
                <img
                  src={card?.image}
                  alt={card.name}
                  className="object-cover w-full h-48"
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
                )
            }
        </div>
    );
};

export default AllOffers;