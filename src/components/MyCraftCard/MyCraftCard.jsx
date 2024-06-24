import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const MyCraftCard = ({ craft }) => {
  console.log(craft);
  const {
    _id,
    name,
    price,
    category,
    craftPhotoURL,
    processing_time,
    rating,
    stockStatus,
    customization,
  } = craft;
  return (
    <div>
      {/* component */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
        <div className="flex font-sans">
          <div className="flex-none w-48 relative">
            <img
              src={craftPhotoURL}
              alt="Craft Photo"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold text-gray-900">
                {name}
              </h1>
              <div className="flex justify-center items-center gap-2 text-lg font-semibold text-black-500">
                <span>
                  <FaBangladeshiTakaSign />
                </span>{" "}
                {price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
                {stockStatus}
              </div>
            </div>
            <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <BiCategoryAlt />
                <span className="bg-teal-300 rounded-full px-4 ">
                  {category}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <IoTimeOutline />
                <span className="bg-gray-300 rounded-md px-4 ">
                  {processing_time}
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-teal-900 bg-teal-300"
                  type="button"
                >
                  Update
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-red-900 bg-red-300"
                  type="button"
                >
                  Delete
                </button>
              </div>
              <button
                className="flex items-center justify-center gap-2 w-14 h-9 rounded-md text-gray-800 border border-slate-500 shadow-2xl"
                type="button"
                aria-label="Favorites"
              >
                <span className="text-lg font-semibold">{rating}</span>
                <IoIosStar />
              </button>
            </div>
            <div className="flex  items-center gap-2">
              <MdOutlineDesignServices />
              <p className="text-sm  text-slate-700 ">
                Customization: <span className="font-bold">{customization}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
