import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const header = () => {
  const { cart, removeFromCart, user, updateUserData } = useContext(AppContext);
  const [total, setTotal] = useState();
  const navigate = useNavigate();

  const logout = () => {
    updateUserData(null);
    navigate("/");
  };

  useEffect(() => {
    TotalCount();
  }, [cart]);

  const TotalCount = () => {
    let tot = 0;
    for (let x = 0; x < cart.length; x++) {
      tot += cart[x].price;
    }
    setTotal(tot);
  };

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navigate("/")}
          >
            daisyUI
          </a>
        </div>
        <div className="navbar-end">
          <div className="display-flex">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-[20rem] bg-base-300 shadow"
              >
                <div className="card-body">
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <tr key={index} className="flex gap-4 my-2 items-center">
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            className="cart-image w-28 h-28 object-cover rounded-xl border border-slate-500"
                          />
                        </td>
                        <td className="mt-5">{item.name}</td>
                        <td className="mt-5 font-bold">R{item.price}</td>

                        <td>
                          <button onClick={() => removeFromCart(item)}>
                            <BsTrash className="text-lg mt-5 btn-outline btn-block" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="text-center"></td>
                      <span className="font-bold text-lg">
                        No Item added yet
                      </span>
                    </tr>
                  )}
                  <span className="text-info">Subtotal: R{total}</span>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => navigate("/Checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {user ? (
              <div className="dropdown dropdown-end z-50">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link to="/">{user.name}</Link>
                  </li>
                  <li>
                    <div onClick={logout}>Logout</div>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <div className="dropdown dropdown-end z-50">
                  <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
