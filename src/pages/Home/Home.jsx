import Pricing from "../../components/Pricing/Pricing";
import Slider from "../../components/Slider/Slider";
import Support from "../../components/Support/Support";
import CraftItems from './../../components/CraftItems/CraftItems';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Support></Support>
            <Pricing></Pricing>
            <CraftItems></CraftItems>

        </div>
    );
};

export default Home;