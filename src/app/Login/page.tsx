"use client";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response);
      router.push("/");
    } catch (error: any) {
      console.log("LogIn failed");
      toast.error(error.message);
    }finally {
      setLoading(false);
  }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1>{loading ? "Processing" : "LogIn Page"}</h1>
    <hr />
    <div className="flex flex-col">
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
      <button
        className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={login}
      >
        {!disabled ? "Fill form" : "Log In"}
      </button>
      
    </div>
    <Link href="/SignUp">New User ?</Link>
  </div>
  )
}

