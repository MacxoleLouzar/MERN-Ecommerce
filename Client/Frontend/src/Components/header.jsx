import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const header = () => {
  const { cart, removeFromCart } = useContext(AppContext);
  const [total, setTotal] = useState();
  const navigate = useNavigate();

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
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
                      Link
                      to={`/Checkout`}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
