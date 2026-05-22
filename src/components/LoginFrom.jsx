"use client";
import { authClient } from "@/lib/auth-client";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginFrom = () => {
  const router = useRouter();

    const onSubmit=async(e)=>{
e.preventDefault();
const formData= new FormData(e.currentTarget);
const user= Object.fromEntries(formData.entries());
console.log(user)
const { data, error } = await authClient.signIn.email({
        email:user.email, 
        password:user.password,
       
    },);
    console.log(data,error)

    if(data){
      
      toast.success("Succesfully login.")
       router.push("/");
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
        "url('https://plus.unsplash.com/premium_photo-1664300813371-7e2e101f6f85?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  ></div>
   <div className="absolute inset-0 bg-black/60"></div>
   <div className="relative z-10 text-white h-full"><h1 className="text-2xl font-bold pt-7 text-center text-white">Log In Your Account</h1>

       <Form className="flex flex-col gap-4 my-10 w-1/2 mx-auto " onSubmit={onSubmit}>
       
          
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

     
        <Button type="submit" className="bg-blue-500">
        
          Log In
        </Button>
        
    </Form></div>
        </div>
     
    
    
  );
};

export default LoginFrom;