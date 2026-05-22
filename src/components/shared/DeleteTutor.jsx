"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";


import { toast } from "react-toastify";

export function DeleteTutor({tutorId}) {
    
    const handleCancelTutor=async()=>{
        toast.error("You delete successfully.")
        const res= await fetch(`http://localhost:5000/tutors/${tutorId}`,{
          method:"DELETE",
           headers:{
            "content-type":"application/json"
           } 
        });
        const data=await res.json();
        console.log(data);


    
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Tutor permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Back
              </Button>
              <Button  variant="danger" onClick={handleCancelTutor}>
                Delete Tutor
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}