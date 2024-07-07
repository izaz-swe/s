import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const reviews = [
    {
      Name: "Farmer John",
      Date: "2023-05-12",
      "review text":
        "Selling my crops through this platform was a seamless experience! The interface was user-friendly, and I managed to find buyers quickly. The transactions were smooth, and I got a fair price for my produce.",
      rating: 5,
      image: "https://res.cloudinary.com/dtnehb5zd/image/upload/v1720351812/farmer_d3d1uu.jpg"
    },
    {
      Name: "Buyer Emily",
      Date: "2023-05-10",
      "review text":
        "This website helped me connect with a factory looking for organic produce. The process was efficient, and I received payment promptly. Highly recommend this platform to fellow farmers.",
      rating: 4,
      image: "https://res.cloudinary.com/dtnehb5zd/image/upload/v1720351812/farmer_2_mwepdm.jpg"
    },
    {
      Name: "Mr. James",
      Date: "2023-05-07",
      "review text":
        "Initially, I faced some issues understanding how to list my crops, but the customer support team was very helpful. After that, selling my crops was easy and hassle-free.",
      rating: 3,
      image: "https://res.cloudinary.com/dtnehb5zd/image/upload/v1720351813/farmer_3_ky059v.jpg"
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="my-8  overflow-x-hidden bg-gray-200">
      <div className="py-10 px-8 max-w-screen-md mx-auto">
        <h1 className="text-4xl  text-center font-medium mb-6">
          See what our happy customers are saying
        </h1>
        <p className="text-base font-inter dark:text-snow-white-toned text-center">
          Meet their best experience and happy moments provided by us
        </p>
      </div>

      <Slider {...settings}>
        {reviews?.map((review, i) => (
          <div key={i}>
            <div className="flex flex-col justify-center items-center p-4 mx-auto space-y-2 md:p-4 bg-white   rounded-lg transition-shadow duration-500 shadow-xxl dark:bg-opacity-10 max-w-4xl py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 text-cyan-500 mx-auto"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z">
                  4
                </path>
              </svg>
              <p className="px-6 py-2 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-3xl lg:max-w-2xl xl:max-w-4xl dark:text-snow-white ">
                " {review?.["review text"]} "
              </p>
              <div className="flex justify-center space-x-3">
                <img
                  src={
                    review.image
                  }
                  alt=""
                  className="w-1/4 h-1/6 bg-center rounded-md dark:bg-gray-500"
                />
                <div className="flex flex-col my-auto items-center">
                  <p className="leading-tight dark:text-snow-white-toned">
                    {review?.Name}
                  </p>
                  <p className="text-sm leading-tight dark:text-snow-white-toned">
                    {review.rating} ❤
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 text-sm text-cyan-400"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
