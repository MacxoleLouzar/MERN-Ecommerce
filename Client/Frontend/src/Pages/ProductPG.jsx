import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";

const ProductPG = () => {
  const { addToCart } = useContext(AppContext);
  let { id } = useParams();
  const [product, SetProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8001/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => SetProduct(data.product))
      .catch((err) => console.log(err));
  },[])

  return (
    <>
      <div className="hero mt-44 w-full">
        <div className="hero-content flex-col lg:flex-row">
          <figure>
            <img
              src={product.image}
              className="h-50 w-full object-cover"
              alt="food"
            />
          </figure>
          <div className="md:w-1/2 text-center">
            <p className="text-sm mb-4 text-center">
              Category: {product.category}
            </p>
            <h1 className="text-5xl font-bold mb-6 text-center">
              {product.name}
            </h1>
            <p className="mb-3 text-center">{product.description}</p>
            <p className="mb-6 text-5xl text-center">
              R{new Intl.NumberFormat("en-US").format(product.price)}
            </p>


            <div>
              <button
                className="btn btn-active boarder-liner"
                onClick={() => addToCart(product)}
              >
                <span className="">Add to cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPG;
