import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 ">
        <div className="p-1 flex flex-col sm:flex-col md:flex-row gap-8 justify-between items-center">
            <h1 className="text-4xl  lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize dark:text-snow-white">
                Your <span className='gradient-text'>One-Stop-Shop</span> for Healthy Life.

            </h1>
            <div className="">
                <i className='font-medium block text-lg text-black dark:text-snow-white'>  Find Everything You Need Here </i>
                <p className="text-base  font-inter text-dark-toned dark:text-snow-white-toned">

                    we aims to simplify the entire event planning process for customers and event planners by providing a platform that helps them with everything they need for an event, including event space or venue catering, event dress decoration, and budget planning.
                </p>

                <Link to='service' className="btn bg-gray-800 text-white flex flex-col w-1/4 mx-auto py-4 rounded-xl mt-5">
                  

                    <span className="mx-auto">Get started</span>
                </Link>
            </div>
        </div>


        <div className="max-w-full mx-auto my-12 lg:my-16  shadow-lg ">
            <video src={`https://www.shutterstock.com/shutterstock/videos/1085503217/preview/stock-footage-agriculture-farmer-girl-walks-through-field-of-vegetables-at-sunset-an-agronomist-works-in-open.webm`} autoPlay className='w-full' loop></video>
        </div>

    </div>
    );
};

export default Banner;