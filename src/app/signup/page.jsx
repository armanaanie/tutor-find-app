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
      redirect("/")
    }
    if(error){
      toast.error(error.message)
    }
 }

    

  return (
    <div className="relative w-full h-[500px]" >
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8')",
    }}
  ></div>
   <div className="absolute inset-0 bg-black/60"></div>
   <div className="relative z-10 text-white h-full"><h1 className="text-2xl pt-10 font-bold text-center text-white">Create Account</h1>

       <Form className="flex flex-col gap-4 my-10 w-1/2 mx-auto " onSubmit={onSubmit}>
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

     <div className="flex gap-4 items-center"> <Button type="submit" className="bg-blue-500">
        
          Sign Up
        </Button>
        <span>Or</span>
     <Button className="bg-green-500">
        <Link href="/login">Sign In</Link> </Button></div>
       
        
    </Form>

    
          
       
    </div>
        </div>
     
    
    
  );
}
export default SignUp