import { CiCircleChevUp, CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  const cards = [
    {
      id: 1,
      icon: "https://thebigsmoke.com.au/wp-content/uploads/Expert-opinion-How-to-nail-a-Shark-Tank-Australia-style-pitch-770x403.jpg",
      work: "Owner",
      name: "Seth Feakes",
    },
    {
      id: 2,
      icon: "https://netstorage-tuko.akamaized.net/images/95a60bfae044ed94.jpg?imwidth=900",
      work: "Co-Owner",
      name: "Harly Rayan",
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/dtnehb5zd/image/upload/v1720351350/antor_1_t4ad0o.jpg",
      work: "Developer",
      name: "Anto Ahmmed",
    },
  ];
  return (
    <div className="py-10 font-['Poppins'] bg-gray-200" id="team">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-4xl font-bold flex justify-center  font-['Poppins']">
            Our Team
          </h1>
        </div>
        <div className=" grid grid-cols-1 bg-gray-200 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 px-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center pt-5 relative rounded-xl border shadow-lg"
            >
              <div className="relative">
                <img src={card.icon} alt="" className="w-60 rounded-md h-60 " />
              </div>
              <p className="text-2xl  font-semibold text-black py-2">
                {card.name}
              </p>
              <p>{card.work}</p>
              <div className="flex flex-row gap-5 p-3 text-xl">
                <FaFacebook />
                <CiTwitter />
                <CiCircleChevUp />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
