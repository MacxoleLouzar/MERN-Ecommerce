import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";

const Checkout = () => {
  const { cart, user, clearCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [accountHolder, setAccountHolder] = useState(user?.name);
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [delievy, setDelievert] = useState(user?.name);
  const [contact, setContact] = useState("");

  useEffect(() => {
    calculateCartCount();
  }, [cart]);

  const ValidateInput = () => {
    if (!accountHolder) {
      toast.error("Name is required");
      return false;
    }
    if (!cardNumber) {
      toast.error("Card number is required");
      return false;
    }
    if (!expireDate) {
      toast.error("Expiry date is required");
      return false;
    }
    if (!cvv) {
      toast.error("CVV is required");
      return false;
    }
    if (!delievy) {
      toast.error("Delievery is required");
      return false;
    }
    if (!contact) {
      toast.error("Contact is required");
      return false;
    }
    return true;
  };

  const calculateCartCount = () => {
    let tot = 0;
    for (let x = 0; x < cart.length; x++) {
      tot += Number(cart[x].price);
    }
    setTotal(tot);
  };

  const Checkout = () => {
    if (!ValidateInput()) {
      return;
    }

    const products = cart.map((x) => x._id);
    const { _id } = user.user;

    fetch(`http://localhost:8001/api/order`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({ products, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data);
        clearCart();
        navigate("/orders");
        console.log(Checkout);
      })
      .catch((error) =>
        toast.error("Something went wrong, please try again later")
      );
  };

  return (
    <div>
      {user ? (
        <div className="relative mx-auto w-full bg-white">
          <div className="grid min-h-screen grid-cols-10">
            <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div className="mx-auto w-full max-w-lg">
                <h1 className="relative text-2xl font-medium text-black sm:text-3xl">
                  Checkout{" "}
                  <Link to="/cart" className="fs-5 text-decoration-none">
                    {cart.length} item(s)
                  </Link>
                  <span className="mt-2 block h-1 w-10 bg-purple-900 sm:w-20" />
                </h1>

                <form className="mt-10 flex flex-col space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Account Holder
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ring-purple-900"
                      placeholder="Name Card"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold text-black">
                      Card Number
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ring-purple-900"
                      placeholder="1234-5678-XXXX-XXXX"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <img
                      src=""
                      alt=""
                      className="absolute bottom-3 right-3 max-h-4"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-black">
                      Expiration date
                    </p>
                    <div className="">
                      <input
                        type="date"
                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ring-purple-900"
                        placeholder="Card Expiring Date"
                        value={expireDate}
                        onChange={(e) => setExpireDate(e.target.value)}
                      />
                    </div>

                    <div className="relative my-1">
                      <label className="sr-only">CVC</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ring-purple-900"
                        placeholder="CVC"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
                {cart.length > 0 && (
                  <button
                    onClick={Checkout}
                    type="submit"
                    className="mt-4 inline-flex w-full items-center justify-center rounded btn-outline py-2.5 px-4 text-base font-semibold tracking-wide text-black text-opacity-80 outline-none ring-offset-2 transition sm:text-lg"
                  >
                    Pay
                  </button>
                )}
              </div>
            </div>

            <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
              <h2 className="sr-only">Order Summary</h2>
              <div className="relative">
                <ul className="space-y-5">
                  <div className="order-summary text-white">
                    <h3 className="+">Ordered Items</h3>
                    <table className="my-4">
                      <tbody>
                        {cart.length > 0 ? (
                          cart.map((c, index) => (
                            <tr
                              key={index}
                              className="flex gap-4 my-2 items-center"
                            >
                              <td>
                                <img
                                  src={c.image}
                                  alt=""
                                  className="cart-image w-28 h-28 object-cover rounded-xl border border-slate-500"
                                />
                              </td>
                              <td className="mt-5">{c.name}</td>
                              <td className="mt-5 font-bold">R{c.price}</td>

                              <td>
                                <button onClick={() => removeToCart(c)}>
                                  <BsTrash className="text-lg mt-5 btn-outline btn-block" />
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td className="text-center text-white">
                              No Item added yet
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </ul>

                <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div className="space-y-2">
                  <div className="card-actions">
                    <button className=" btn-block text-lg text-white font-bold">
                      Total Price: R{total}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-5 py-5 CheckoutPage">
          <div className="display-5 pt-5 text-center ">
            Login in order to checkout
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
