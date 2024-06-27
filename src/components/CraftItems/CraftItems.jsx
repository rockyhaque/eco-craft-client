import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";

const CraftItems = () => {
  const loadedCraft = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCraft);

  console.log(crafts);

  return (
    <div>
      <div className="max-w-xl mx-auto text-center mt-20">
        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
          <p className="text-lg md:text-xl lg:text-3xl font-extrabold tracking-widest uppercase font-customPlaywrite">
            Our All Items
          </p>
        </div>
        <p className="mt-6 text-base leading-relaxed text-gray-600 group-hover:text-white">
          By choosing Eco Craft, you are supporting a business that values the
          environment and works tirelessly to reduce its carbon footprint
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {crafts.map((craft) => (
          <CraftItemCard
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></CraftItemCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
