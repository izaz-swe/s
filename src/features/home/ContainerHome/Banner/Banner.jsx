import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mx-auto relative bg-[url('https://plus.unsplash.com/premium_photo-1661900547591-80ee79e20d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJlfGVufDB8fDB8fHww')] bg-no-repeat bg-cover  pb-10">
      <div className=" z-10   ">
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
              "Welcome to Soil To Factory - Your One-Stop Destination for Fresh
              Produce! Explore a Variety of Locally Grown Fruits, Vegetables,
              and More Directly from Farmers Near You. Shop Now!"
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
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Banner;
