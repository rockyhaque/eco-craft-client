
import './Pricing.css'

const Pricing = () => {
  const togglePricing = () => {
    const annualPrices = document.querySelectorAll(".annual");
    const monthlyPrices = document.querySelectorAll(".month");
    const toggle = document.getElementById("toggle");

    annualPrices.forEach((price) => {
      if (toggle.checked) {
        price.classList.add("hidden");
      } else {
        price.classList.remove("hidden");
      }
    });

    monthlyPrices.forEach((price) => {
      if (toggle.checked) {
        price.classList.remove("hidden");
      } else {
        price.classList.add("hidden");
      }
    });
  };

  return (
    <div className="text-gray-900  bg-no-repeat bg-left-bottom sm:bg-svg-bottom ">
      <svg
        className="absolute top-0 right-0 h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#D0D5F6">
          <path d="M172.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.318 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126" />
          <path d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141" />
          <path d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108" />
        </g>
      </svg>

      <h1 className="text-center font-extrabold text-lg md:text-xl lg:text-3xl mt-8 tracking-wide relative font-customPlaywrite">
        Our Pricing
      </h1>

      <div className="flex flex-row justify-center mt-8 text-sm tracking-tight font-medium text-gray-700 ">
        <p className="mx-3">Annually</p>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onClick={togglePricing}
            />
            <div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner" />
            <div className="toggle_dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
          </div>
        </label>
        <p className="mx-3">Monthly</p>
      </div>

      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
        <div className="border rounded-lg md:rounded-r-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-0 shadow-lg">
          <div className="">Basic</div>
          <div className="font-bold text-6xl month hidden">
            $19.99
          </div>
          <div className="font-bold text-6xl annual">
            $199.99
          </div>
          <hr />
          <div className="text-sm my-3">5% Discount on All Products</div>
          <hr />
          <div className="text-sm my-3">Minimum Purchase Quantity: 10 Items</div>
          <hr />
          <div className="text-sm my-3">Access to Basic Support</div>
          <hr />
          <a href="#" target="_blank">
            <div className="bg-gradient-base border border-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
        <div className="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-0 shadow-lg">
          <div className="py-4">
            Professional
            <div className="font-bold text-6xl month hidden">
              $24.99
            </div>
            <div className="font-bold text-6xl annual">
              $249.99
            </div>
            <hr />
            <div className="text-sm my-3">10% Discount on All Products</div>
            <hr />
            <div className="text-sm my-3">Minimum Purchase Quantity: 5 Items</div>
            <hr />
            <div className="text-sm my-3">Priority Customer Support</div>
            <hr />
            <a href="#" target="_blank">
              <div className="bg-white border border-white hover:bg-transparent text-teal-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">
                Learn More
              </div>
            </a>
          </div>
        </div>
        <div className="border rounded-lg  md:rounded-l-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-0 shadow-lg">
          <div className="">Master</div>
          <div className="font-bold text-6xl month hidden">
            $39.99
          </div>
          <div className="font-bold text-6xl annual">
            $399.99
          </div>
          <hr />
          <div className="text-sm my-3">$39.99/month or $399.99/year</div>
          <hr />
          <div className="text-sm my-3">20% Discount on All Products</div>
          <hr />
          <div className="text-sm my-3">Free Shipping on All Orders</div>
          <hr />
          <a href="#" target="_blank">
            <div className="bg-gradient-base border border-teal-600 hover:bg-transparent text-white hover:text-teal-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
