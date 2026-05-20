"use client";
import { authClient } from "@/lib/auth-client";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const SignUp=()=> {
 const onSubmit=async(e)=>{
e.preventDefault();
const formData= new FormData(e.currentTarget);
const user= Object.fromEntries(formData.entries());
console.log(user)
const { data, error } = await authClient.signUp.email({
        email:user.email, 
        password:user.password,
        name:user.name,
        image:user.image, 
        
    },);
    console.log(data,error)

    if(data){
      
      toast.success("Succesfully Signup.")
      redirect("/login")
    }
    if(error){
      toast.error(error.message)
    }
 }
const handleSignInwithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
    

  return (
    <div className="relative w-full h-[600px]" >
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8')",
    }}
  ></div>
   <div className="absolute inset-0 bg-black/60"></div>
   <div className="relative z-10 text-white h-full"><h1 className="text-2xl pt-10 font-bold text-center text-white">Create Account</h1>

       <Form className="flex flex-col gap-4 mt-5 w-1/2 mx-auto " onSubmit={onSubmit}>
        <TextField
            isRequired
            name="name"
            type="text"
          >
            <Label className="text-white">Name</Label>
            <Input placeholder="John Doe" className="w-full"/>
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="image"
            type="text"
          >
            <Label className="text-white">Photo URL</Label>
            <Input placeholder="" className="w-full"/>
            <FieldError />
          </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label className="text-white">Email</Label>
        <Input placeholder="john@example.com" className="w-full" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
       
        <Label className="text-white">Password</Label>
        <Input placeholder="Enter your password" className="w-full"/>
        <Description className="text-gray-300">Must be at least 8 characters with 1 uppercase and 1 number</Description>
        
        <FieldError />
      </TextField>

      <div className="flex flex-col items-center justify-center"><Button type="submit" className="bg-blue-500 ">
        
          Sign Up
        </Button></div>
        
        
    </Form>

    <div className="flex flex-col items-center justify-center"><span className="my-3 font-bold">or</span><button onClick={handleSignInwithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button></div>
          
       
    </div>
        </div>
     
    
    
  );
}
export default SignUp