import React, { useContext, useEffect, useState } from "react";
import Orders from "../Components/Orders";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const OrderPages = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if(!user){
      navigate("/login");
      return;
    }

    fetch(`http://localhost:8001/api/order/${user.user._id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(myOrders);

  return (
    <>
      <div className="container mt-5">
        <div className="display-6 pt-4 font-bold text-center text-3xl">
          Welcome{" "}
          <span className="italic font-bold uppercase">{user.user?.name}</span>!
        </div>
        {myOrders.length > 0 &&
          myOrders.map((orders, index) => (
            <Orders key={index} orders={orders} />
          ))}
      </div>
    </>
  );
};

export default OrderPages;
