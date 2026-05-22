"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { router } from "better-auth/api";

import { toast } from "react-toastify";

export function DeleteAlert({bookingId}) {
    const handleCancelBooking=async()=>{
      const {data:tokenData}=await authClient.token();
      console.log(tokenData)
        const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`,{
           method:"PATCH",
          headers:{
            'content-type':"application/json",
authorization:`Bearer ${tokenData?.token}`
          },
         
            
        });
        const data=await res.json();
        console.log(data);
if (data.success) {

        toast.success("Session cancelled successfully");

       
      }
else{
  toast.error(data.message)
}
    
  };
  return (
    <AlertDialog>
      <Button variant="danger">Cancel Session</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Session permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Back
              </Button>
              <Button slot="close" variant="danger" onClick={handleCancelBooking}>
                Cancel session
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}