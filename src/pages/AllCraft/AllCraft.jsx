// import { useEffect, useState } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
// import CraftTable from "../../components/CraftTable/CraftTable";

const AllCraft = () => {
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/craft`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setItems(data);
  //       });
  //   }, []);

  //   console.log(items);

  const loadedCraft = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCraft);

  console.log(crafts);

  return (
    <div>
      <Helmet>
        <title>Eco Craft | All Crafts</title>
      </Helmet>
      <div className="text-center space-y-3 py-16">
        <h2 className="font-semibold text-2xl font-customPlaywrite">
          All Crafts 😍
        </h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
        </div>
      </div>

      {/* Table */}
      {/* <div>
        {
            crafts.map(craft => <CraftTable key={craft._id} craft={craft} crafts={crafts} setCrafts={setCrafts}></CraftTable>)
        }
      </div> */}

      

    </div>
  );
};

export default AllCraft;
