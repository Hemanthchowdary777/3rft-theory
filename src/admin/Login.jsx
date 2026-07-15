import React, { useState } from "react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      await account.createEmailPasswordSession(email, password);

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={login}
        className="bg-white shadow-lg rounded-xl p-8 w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          3RFT THEORY ADMIN
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 rounded mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 rounded mb-6"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white w-full p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;