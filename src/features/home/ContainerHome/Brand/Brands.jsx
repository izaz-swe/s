
import Slider from 'react-slick'

export const Brands = () => {
    const imgs = [
        { src: 'https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'zara' },
        { src: 'https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'dior' },
        { src: 'https://images.pexels.com/photos/3066025/pexels-photo-3066025.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'channel' },
        { src: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'bata' },
        { src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'nike' },
        { src: 'https://images.pexels.com/photos/1660898/pexels-photo-1660898.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Calvin Klein' },
        { src: 'https://images.pexels.com/photos/2165642/pexels-photo-2165642.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Burberry' },

    ]
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4, 
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }
    return (

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-8">
            <div className="container relative z-[1] m-auto px-6 md:px-12">



                <Slider {...settings}>
                    {
                        imgs.map((img, i) => <div key={i}
                            className=" group rounded-xl py-2 px-4 "
                        >
                            <img
                                src={img?.src}
                                className=" w-96 md:64 rounded-lg"

                                alt={img?.name}
                            />
                        </div>)
                    }
                </Slider>

            </div>
        </div>
    )
}

