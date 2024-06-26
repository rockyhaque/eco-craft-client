const CraftTable = ({ craft, crafts, setCrafts }) => {
  const {
 
    name,
    price,
    category,
    craftPhotoURL,
    processing_time,
    rating,
    stockStatus,
    customization,
  } = crafts;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default CraftTable;
