import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { updateUserData } = useContext(AppContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const OnLogin = () => {
    //Check all the field

    if (!email || !password) {
      toast.error("all fields are required");
      return;
    }

    fetch("http://localhost:8001/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        data;
        if (data?.error) {
          toast.error(data.error);
          return;
        }
        updateUserData(data);
        localStorage.setItem("log in", JSON.stringify(data));
        toast.success("Welocme" + data.user.name);
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((error) => {
        toast.error("Server Error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src="https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div id=" " className=" ">
                Not Yet Registered ?<Link to={"/register"}>Register Us.</Link>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={OnLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
