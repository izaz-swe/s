import Banner from "./Banner/Banner";
import { Brands } from "./Brand/Brands";
import GrowUp from "./GrowUp/GrowUp";
import OfferSlider from "./Offer/OfferSlider";


const Home = () => {
    return (
        <div>
           
            <GrowUp/>
            <Banner/>
            <OfferSlider/>
            <Brands/>

        </div>
    );
};

export default Home;