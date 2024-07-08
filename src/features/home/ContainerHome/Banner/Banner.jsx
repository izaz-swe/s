import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mx-auto relative bg-[url('https://plus.unsplash.com/premium_photo-1661900547591-80ee79e20d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJlfGVufDB8fDB8fHww')] bg-no-repeat bg-cover  pb-10">
      <div className="z-50 h-[80vh] flex items-center">
        <div className="px-4 py-10 mx-auto md:flex-row sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div>
            <h1 className="text-4xl pb-5 lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize dark:text-snow-white">
              Your <span className="text-[#00F3FF]">One-Stop-Shop</span> for
              Healthy Life.
            </h1>
          </div>
          <div className="">
            <i className="font-bold block text-xl text-white ">
              {" "}
              Find Everything You Need Here{" "}
            </i>
            <p className="font-inter font-bold  text-white text-xl py-5">
              "Welcome to Soil To Factory - Your One-Stop Destination for Fresh
              Produce! Explore a Variety of Locally Grown Fruits, Vegetables,
              and More Directly from Farmers Near You. Shop Now!"
            </p>
            <Link to="/login">
              <button className="btn hover:bg-green-900 bg-green-700 text-white w-1/4 mx-auto py-4 rounded-xl mt-5">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
