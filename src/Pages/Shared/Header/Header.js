import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Logo/logo.png";
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    }
    const menuItems = (
      <>
        <li className="font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold">
          <Link to="/platters">Platters</Link>
        </li>
        {user ? (
          <>
            <li className="font-semibold">
              <Link to="/my-reviews">My Reviews</Link>
            </li>
            <li className="font-semibold">
              <Link to="/add-menu">Add New Menu</Link>
            </li>
          </>
        ) : (
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
        )}
      </>
    );

    return (
      <div className="lg:px-28">
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/">
              <img src={logo} className="w-1/3" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>

          <div className="navbar-end">
            <div className="mr-12 lg:mr-0">
              {user?.displayName ? (
                <>
                  <div className="mr-3 flex items-center ">
                    <p className="mr-3">{user.displayName}</p>
                    {user?.photoURL && (
                      <img
                        className="mr-3"
                        src={user.photoURL}
                        style={{ height: "45px" }}
                        alt=""
                      />
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            {user && (
              <div className="ms-10">
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-warning"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;