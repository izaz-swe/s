import { CiCircleChevUp, CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
    const cards = [
      {
        id: 1,
        icon: "https://media.istockphoto.com/id/1482293875/photo/multiracial-young-woman-harvesting-chard-from-organic-home-garden-portrait.jpg?s=1024x1024&w=is&k=20&c=ZDvHngCJulydi_BesQdP8VMItXt-O7DKbgu3-VA9BzA=",
       work:"Farmer",
        name: "Harly Rayan",
      },
      {
        id: 2,
        icon: "https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.jpg?s=1024x1024&w=is&k=20&c=8OiGJDGnvfIMbKUz4zrs4HWEBuMsguEHU4j7vuohX3c=",
       work:"Developer",
        name: "Harly Rayan",
      },
      {
        id: 3,
        icon: "https://cdn.pixabay.com/photo/2016/11/08/05/35/agriculture-1807549_640.jpg",
       work:"farmer",
        name: "Harly Rayan",
      },
      {
        id: 4,
        icon: "https://cdn.pixabay.com/photo/2020/03/05/16/43/engineer-4904878_640.jpg",
  
       work:"Software Engineer ",
        name: "Harly Rayan",
      },
    ];
    return (
      <div className=" py-10 font-['Poppins']" id="team">
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-4xl font-bold flex justify-center  font-['Poppins']">
              Our Team
            </h1>
           
          </div>
          <div className=" grid grid-cols-1 bg-slate-50 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10 px-5">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col items-center  relative rounded-xl ">
               <div className="relative">
               <img src={card.icon} alt="" className="w-80 h-72" />
                
               </div>
                <p className="text-2xl  font-semibold text-black py-2">
                  {card.name}
                </p>
                <p>{card.work}</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                <FaFacebook/>
                <CiTwitter/>
                <CiCircleChevUp/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  