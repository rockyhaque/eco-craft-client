import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UpdateMyCraft = () => {
  const { user } = useAuth() || {};
  const craft = useLoaderData();

  console.log(craft);

  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    category: '',
    price: 0,
    customization: '',
    stockStatus: '',
    processing_time: '',
    description: '',
    craftPhotoURL: ''
  });

  useEffect(() => {
    if (craft) {
      setFormData({
        name: craft.name || '',
        rating: craft.rating || 0,
        category: craft.category || '',
        price: craft.price || 0,
        customization: craft.customization || '',
        stockStatus: craft.stockStatus || '',
        processing_time: craft.processing_time || '',
        description: craft.description || '',
        craftPhotoURL: craft.craftPhotoURL || ''
      });
    }
  }, [craft]);

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;

    const info = {
      ...formData,
      email: user.email,
      userName: user.displayName,
      photoURL: user.photoURL,
      accountCreation: user.metadata?.creationTime,
      accountLastSignIn: user.metadata?.lastSignInTime,
    };

    console.log(info);

    // sending data to the server
    fetch(`http://localhost:5000/craft/${_id}`, { 
        method: 'PUT',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(info)
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`${name} has been updated Successfully 🤩`);
        }
      });

    form.reset();

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="bg-gradient-to-r from-orange-50 to-teal-50">
      <div className="max-w-screen-xl mx-auto">
        <Helmet>
          <title>Eco Craft | Update A Craft</title>
        </Helmet>
        <div className="text-center space-y-3 py-16">
          <h2 className="font-semibold text-2xl font-customPlaywrite">
            Update your Craft 😍
          </h2>
          <div className="flex gap-1 justify-center items-center pt-4">
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          </div>
        </div>

        <section>
          <div className=" px-24 py-6">
            <form onSubmit={handleUpdateCraft}>
              {/* Form name and category Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={formData.name}
                      onChange={handleChange}
                      placeholder="Handcrafted Wooden Chair"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="category"
                    defaultValue={formData.category}
                    onChange={handleChange}
                  >
                    <option disabled>Select One</option>
                    <option>Wooden Furniture</option>
                    <option>Wooden Sculptures</option>
                    <option>Wooden Home Decor</option>
                    <option>Wooden Utensils</option>
                    <option>Wooden Kitchenware</option>
                    <option>Wooden Jewelry</option>
                    <option>Jute</option>
                    <option>Jute Home Decor</option>
                    <option>Jute Kitchenware</option>
                    <option>Jute Utensils</option>
                  </select>
                </div>
              </div>

              {/* Processing Time and price Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Processing Time
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="processing_time"
                      defaultValue={formData.processing_time}
                      onChange={handleChange}
                      placeholder="Ex :  5-7 days"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="999"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Form customization and rating Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Customization
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="customization"
                    value={formData.customization}
                    onChange={handleChange}
                  >
                    <option disabled>Select One</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      placeholder="5"
                      className="input input-bordered w-full"
                      max="5"
                      min="0"
                    />
                  </label>
                </div>
              </div>

              {/* Form Stock Status and craft photo Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Stock Status
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="stockStatus"
                    value={formData.stockStatus}
                    onChange={handleChange}
                  >
                    <option disabled>Select One</option>
                    <option>In Stock</option>
                    <option>Made to Order</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Craft Photo URL
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="craftPhotoURL"
                      value={formData.craftPhotoURL}
                      onChange={handleChange}
                      placeholder="photo url"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Form Description */}
              <div className="flex flex-col mb-7">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Description
                    </span>
                  </label>
                  <label className="input-group">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="This handcrafted chair is made from the finest quality of wood and features a sleek, modern design. It's perfect for any home or office."
                      className="textarea textarea-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn bg-gradient-to-r from-teal-300 to-orange-200 border-0 font-bold"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UpdateMyCraft;
