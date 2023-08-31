import React, { useContext, useEffect } from "react";
import Slider from "../Components/Slider";
import Catergory from "../Components/catergory";
import ProductCp from "../Components/productCp";
import AppContext from "../context/AppContext";

const Home = () => {
  const { products, addProduct } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:8001/api/product")
      .then((res) => res.json())
      .then((data) => addProduct(data.products));
  }, []);
  return (
    <div className="h-full">
      <div className="px-8">
        <Slider />
        <Catergory />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <ProductCp key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
