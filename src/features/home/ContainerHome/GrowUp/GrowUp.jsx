const GrowUp = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className=" px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2 gap-y-10 md:gap-x-20">
          <div className=" sm:pr-0 ">
            <div className="relative max-w-xs mb-12 mx-auto">
              <img
                className="object-left-top  rounded-md"
                src="https://images.pexels.com/photos/2519332/pexels-photo-2519332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <img
                className="absolute hidden md:flex origin-bottom-right scale-100  rounded-md -bottom-10 -right-[3rem]  md:-right-[10rem]"
                src="https://images.pexels.com/photos/247512/pexels-photo-247512.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start md:px-20">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-snow-white">
              Grow business with us.
            </h2>
            <p className="mt-4 text-justify text-base leading-relaxed text-dark-toned dark:text-snow-white-toned font-inter ">
              At soil-to-factory, we're passionate about connecting farmers
              directly to consumers, fostering sustainable agriculture
              practices, and supporting local communities. Our platform serves
              as a bridge between farmers and consumers, ensuring that you
              receive the freshest, highest quality produce while empowering
              local farmers to thrive.
            </p>

            <div className="grid gap-10 row-gap-8 lg:grid-cols-3 py-10">
              <div>
                <div className="flex">
                  <h6
                    className="mr-2 text-4xl font-bold md:text-5xl text-slate-800
                                    dark:text-snow-white"
                  >
                    20,000+
                  </h6>
                  <div className="flex items-center justify-center rounded-full bg-teal-400 w-7 h-7 ">
                    <svg
                      className="text-blue-900 w-7 h-7"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 text-center font-bold md:text-lg text-dark-toned dark:text-snow-white-toned">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowUp;
