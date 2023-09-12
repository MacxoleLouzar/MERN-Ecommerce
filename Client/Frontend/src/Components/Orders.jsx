import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = ({ orders }) => {
  const navigate = useNavigate();
  return (
    <>
      {orders?.products.map((product, index) => (
        <div
          className="card w-full bg-base-100 shadow-xl"
          onClick={() => navigate(`/orders/${product._id}`)}
        >
          <div className="card card-side mt-5 px-5 bg-base-100 shadow-xl">
            <figure>
              <img src={product.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <span>{product.description}</span>
              <td className="pt-4" style={{ width: "40%" }}>
                R{product?.price}
              </td>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/orders/${product._id}`)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Orders;
