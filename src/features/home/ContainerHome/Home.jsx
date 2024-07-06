import Banner from "./Banner/Banner";
import { Brands } from "./Brand/Brands";
import { Faq } from "./Faq/Faq";
import GrowUp from "./GrowUp/GrowUp";
import OfferSlider from "./Offer/OfferSlider";
import Team from "./Team/Team";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <GrowUp/>
            <Banner/>
            <OfferSlider/>
            <Brands/>
            <Testimonials/>
            <Faq/>
            <Team/>
        </div>
    );
};

export default Home;