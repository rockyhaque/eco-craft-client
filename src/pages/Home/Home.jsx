import Pricing from "../../components/Pricing/Pricing";
import Slider from "../../components/Slider/Slider";
import Support from "../../components/Support/Support";
import CraftItems from './../../components/CraftItems/CraftItems';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <Support></Support>
            <Pricing></Pricing>

        </div>
    );
};

export default Home;