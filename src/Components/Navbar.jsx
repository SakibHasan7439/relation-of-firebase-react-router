import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () =>{
    logOutUser()
    .then(()=>{
      alert("Sign out successfully")
    })
    .catch((err)=>{
      console.log("error", err.message);
    })
  }

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"logIn"}>LogIn</NavLink>
            <NavLink to={"register"}>Register</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex gap-6 menu-horizontal px-1">
            <NavLink className={({isActive})=> `${isActive ? "bg-fuchsia-600 text-white px-4 py-2 rounded-lg": "hover:text-fuchsia-600 px-4 py-2"}`} to={"/"}>Home</NavLink>
            <NavLink className={({isActive})=> `${isActive ? "bg-fuchsia-600 text-white px-4 py-2 rounded-lg": "hover:text-fuchsia-600 px-4 py-2"}`} to={"logIn"}>LogIn</NavLink>

            <NavLink className={({isActive})=> `${isActive ? "bg-fuchsia-600 text-white px-4 py-2 rounded-lg": "hover:text-fuchsia-600 px-4 py-2"}`} to={"register"}>Register</NavLink>

        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="flex gap-4 items-center">
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className="btn bg-fuchsia-600 rounded-lg text-white">LogOut</a>
                </div> 
          : <Link className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white" to={'/logIn'}>LogIn</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
