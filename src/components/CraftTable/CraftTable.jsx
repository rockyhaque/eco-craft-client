

const CraftTable = ({craft, crafts, setCrafts}) => {
    const {_id, name, category} = craft;
    return (
        <div>
            {name}
        </div>
    );
};

export default CraftTable;