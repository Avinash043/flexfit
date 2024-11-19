"use client";

import React, { useEffect, useState } from "react";
import { Menu, MenuItem,HoveredLink } from "./ui/navbar-menu";
import Cookies from 'js-cookie';
import { cn } from "@/lib/utils";
import Link from "next/link";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import axios from "axios";




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data,setData] = useState()
  const router = useRouter()
 // const [token, setToken] = useState<string | null>(null);
  //const tokens = Cookies.get('token');
 
  //const token = localStorage.getItem("token");

 
  // const token = Cookies.get('token');
  // console.log(token)

  

  const logout = async () => {
      try {
          await axios.get('/api/users/logout')
          toast.success('Logout successful')
          router.push('/')
      } catch (error:any) {
          console.log(error.message);
          toast.error(error.message)
      }
  }
  
  useEffect(() => {
    getUserDetails()
    // //  const token = getDataFromToken()
    // //  console.log(token);
    // //  setToken(token);
    // const token = Cookies.get('token');
    // console.log(token)
    // if (token) {
    //   setIsLoggedIn(true);
    // } else {
    //   setIsLoggedIn(false);
    // }
  }, [])
  
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log("res.data ",res.data.data._id);
    setData(res.data.data._id);
}
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <h1 className="text-xl font-bold">Flexfit</h1>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"Courses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Courses"
          ><div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">All course</HoveredLink>
          <HoveredLink href="/individual">Advanced Heavylift</HoveredLink>
          <HoveredLink href="/team">HIIT Training</HoveredLink>
          <HoveredLink href="/enterprise">Cardio Kickboxing</HoveredLink>
        </div></MenuItem>
        </Link>
        <Link href={"/ContactUs"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>

        {isLoggedIn ? 
        <div>
        <Link href={"/SignUp"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Sign Up"
          ></MenuItem>
        </Link>
        <Link href={"/Login"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Log In"
          ></MenuItem>
        </Link>
        </div>
        //  <Link href={"/Logout"}>
        //   <MenuItem
        //     setActive={setActive}
        //     active={active}
        //     item="Log Out"
        //   ></MenuItem>
        // </Link> 
      :
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button> 
        }
      </Menu>
    </div>
  );
}

export default Navbar;
