import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyCraftCard from "../../components/MyCraftCard/MyCraftCard";


const MyCraft = () => {
    const {user} = useAuth() || {};
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/craft/${user?.email}`) 
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    }, [user])

    console.log(items);

    return (
        <div className="">
            {
                items?.map(craft => <MyCraftCard craft={craft} key={craft._id}></MyCraftCard>)
            }
        </div>
    );
};

export default MyCraft;