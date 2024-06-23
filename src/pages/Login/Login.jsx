import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className=" flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-950 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/4Rs47jj/pexels-armandvalendez-5725638.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-70 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
            Welcome to Eco Craft!
            </h1>
            <p className="text-3xl my-4">
            Log in now and connect with nature through art.
            </p>
          </div>
          
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/4Rs47jj/pexels-armandvalendez-5725638.jpg)",
            }}
          >
            <div className="absolute bg-black opacity-70 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 lg:text-3xl md:text-xl text-md font-semibold">
            Login
            </h1>
            <div className="py-6 space-x-2">
              <span className="w-28 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white hover:bg-teal-950">
                Github
              </span>
              <span className="w-28 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white hover:bg-orange-950">
                Google
              </span>
              
            </div>
            <p className="text-gray-100">or use email your account</p>
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="flex gap-1">
                <p>If you new here then Please</p>
                <Link to="/register" className="underline text-orange-600">Register</Link>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 font-semibold text-lg rounded-full bg-orange-600 hover:bg-teal-600 focus:outline-none">
                  Log in
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
