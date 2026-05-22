"use client"
import Link from 'next/link';
 import { authClient } from "@/lib/auth-client"
import { Button } from '@heroui/react';
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const Navbar = () => {
    const { data: session } = authClient.useSession();
const user= session?.user

 const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;


        
console.log(user,"user")
    const links= <>
        <li><Link className='focus:text-blue-500 hover:text-pink-500' href="/">Home</Link></li>
        <li><Link  className='focus:text-blue-500 hover:text-pink-500'  href="/tutors">Tutors</Link></li>
        <li><Link   className='focus:text-blue-500 hover:text-pink-500' href="/add-tutor">Add Tutor</Link></li>
         <li><Link  className='focus:text-blue-500 hover:text-pink-500'  href="/My-Booked-Tutor">My Tutors</Link></li>
          <li><Link  className='focus:text-blue-500 hover:text-pink-500'  href="/my-booking">My Booked Session</Link></li>
        </>
    return (
        <div className="navbar bg-base-100 shadow-sm  px-10">
  <div className="navbar-start">
   
    <h1 className="text-xl font-extrabold">Tutor-Find</h1>
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  <div className="navbar-end gap-3">
    {user?
    ( <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.image || "https://images.unsplash.com/photo-1705904506562-f28266845273?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        </div>
      </div>

      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        <li>
          <Link href='/profile' className='focus:text-blue-500 hover:text-pink-500'>
            Profile
            </Link>
        </li>
        
        <li ><button className='focus:text-blue-500 hover:text-pink-500' onClick={async () => {
  await authClient.signOut();
  window.location.href = "/login";
}}>Logout</button></li>
      </ul>
    </div>
    
  )
    
    
    :
    
    
    (<div className='flex gap-3'><Link href="/login" className='focus:text-blue-500 hover:text-pink-500'>Log In</Link><span>or</span><Link href="/signup"  className='focus:text-blue-500 hover:text-pink-500'>Sign up</Link></div>)}
   
     <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="px-3 py-1 border rounded"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </div>
  
  </div>

    );
};

export default Navbar;