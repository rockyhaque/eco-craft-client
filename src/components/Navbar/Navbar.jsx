import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { Slide  } from "react-awesome-reveal";
// import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  // const [currentUser, setCurrentUser] = useState(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User Logged Out");
        toast.success(`User Logged Out Successfully!`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   setCurrentUser(user);
  // }, [user]) 


  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/allCraft">All Craft</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/myCraft">My Craft</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/updateProfile">Update Profile</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/addCraft">Add Craft</NavLink>
        </li>
      )}
      
    </>
  );

  if(loading){
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="navbar bg-base-100 fixed z-10">
      <Tooltip id="my-tooltip" />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Slide>
            <Link to="/" className="text-md md:text-xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-teal-800 bg-clip-text text-transparent ">
              <span className="">Eco</span> Craft
            </Link>
          </Slide>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown dropdown-end "
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="photo" src={user?.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <Link to="/updateProfile">Settings</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
