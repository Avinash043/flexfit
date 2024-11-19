"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [disabled, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response);
      router.push("/Login");
    } catch (error: any) {
      console.log("Sign Up failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Sign Up Page"}</h1>
      <hr />
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="username"
          type="text"
          placeholder="Enter username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="text"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={signUp}>{!disabled ? "Fill form" : "Sign Up"}</button>
      </div>
      <Link href="/Login">Visit Login Page</Link>
    </div>
  );
}

export default SignUpPage;
