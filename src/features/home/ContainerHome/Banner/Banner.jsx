import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mx-auto relative   pb-10">
      
        <video
          src={`https://www.shutterstock.com/shutterstock/videos/1085503217/preview/stock-footage-agriculture-farmer-girl-walks-through-field-of-vegetables-at-sunset-an-agronomist-works-in-open.webm`}
          autoPlay
          className="absolute inset-0  w-full  h-full object-cover"
          loop
        ></video>
     
        <div className="relative z-10 h-[80vh]">
          <div className="flex flex-col justify-evenly items-center px-4 py-36 mx-auto md:flex-row sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
           <div>
           <h1 className="text-4xl  lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize dark:text-snow-white">
              Your <span className="text-[#60E4F2]">One-Stop-Shop</span> for
              Healthy Life.
            </h1>
           </div>
            <div className="">
              <i className="font-medium block text-xl text-white dark:text-snow-white">
                {" "}
                Find Everything You Need Here{" "}
              </i>
              <p className=" font-inter text-dark-toned text-white text-lg dark:text-snow-white-toned">
                we aims to simplify the entire event planning process for
                customers and event planners by providing a platform that helps
                them with everything they need for an event, including event
                space or venue catering, event dress decoration, and budget
                planning.
              </p>

              <Link
                to="service"
                className="btn bg-gray-800 text-white flex flex-col w-1/4 mx-auto py-4 rounded-xl mt-5"
              >
                <span className="mx-auto">Get started</span>
              </Link>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Banner;
