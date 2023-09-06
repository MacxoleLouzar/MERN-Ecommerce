import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const OnRegister = () => {
    //Check all fields
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    //confirm password & confirmpassword
    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    fetch("http://localhost:8001/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.data;
        if (data?.error) {
          toast.error(data.error);
          return;
        }
        localStorage.setItem("user", JSON.stringify(data));
        toast.success(data.data);
        navigate("/login");
      })
      .catch((error) => {
        toast.error("server error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-top">
          <img
            src="https://images.unsplash.com/photo-1523705480679-b5d0cc17a656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbnVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="register"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={OnRegister()}>
                Register
              </button>
              <a href="login" className="label-text-alt link link-hover">
                Already a member LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
