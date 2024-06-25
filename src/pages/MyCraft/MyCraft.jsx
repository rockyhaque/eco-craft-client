import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyCraftCard from "../../components/MyCraftCard/MyCraftCard";

const MyCraft = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  console.log(items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-6 max-w-screen-xl mx-auto">
      {items.length > 0 ? (
        items?.map((craft) => (
          <MyCraftCard craft={craft} key={craft._id}></MyCraftCard>
        ))
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-383px)] w-full">
          <p className="text-6xl font-bold">Opps! No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default MyCraft;
