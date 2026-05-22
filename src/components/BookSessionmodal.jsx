"use client"

import { authClient } from "@/lib/auth-client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { error } from "better-auth/api";
import { GiConsoleController } from "react-icons/gi";
import { toast } from "react-toastify";

export   function  BookSessionmodal ({tutor}) {

  const { data: session } =  authClient.useSession();
const user = session?.user
const onSubmit=async(e)=>{
e.preventDefault()
const formData= new FormData(e.currentTarget);
const student= Object.fromEntries(formData.entries());

  


  const bookingData={
    name:student?.name,
    phone:student?.phone,
   tutorId:tutor?._id,
   tutorname:tutor?.tutorname,
  email:user?.email,
  userId:user?.id
  }
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(bookingData)
 })
 const data= await res.json();
 console.log(data)
  console.log(bookingData,"bookingData")
if(data.success)
{
  toast.success("Successfully book your session!")
}
else{
  toast.error(data.message)
}
}
  


  return (
    <Modal>
      <Button variant="secondary">Book Session Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" isRequired name="name" type="text">
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError/>
                  </TextField>
                  
                  <TextField className="w-full" isRequired name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                    <FieldError/>
                  </TextField>
                  <TextField className="w-full" name="tutorId" type="text">
                    <Label>Tutor Id</Label>
                    <Input type="text" readOnly
                    name="tutorId"
                    value={tutor?._id} />
                  </TextField>
                  
                  <TextField className="w-full" name="tutorname" type="text">
                    <Label>Tutor Name</Label>
                    <Input type="text" readOnly
                    name="tutorname"
                    value={tutor?.tutorname} />
                  </TextField>
                  
                  <TextField className="w-full" name="email" >
                    <Label>Student email</Label>
                    <Input  readOnly
                    name="studentemail" 
                    value={user?.email || 'User only.login first.'} />
                    <FieldError/>
                  </TextField>

                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" >Book now</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}