import {Button, Table} from "@heroui/react";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { DeleteAlert } from "@/components/shared/DeleteALert";
import { Italic } from "@gravity-ui/icons";

const MyBookingPage = async() => {
    const  session  = await auth.api.getSession({
        headers:await headers()
    })
      console.log(session,"My Booking page")
      const user= session?.user;
      console.log(user,"user grom booking page")
    const res= await fetch(`http://localhost:5000/bookings/${user?.id}`)
     const bookings= await res.json();
     console.log(bookings,"from booking page")

    return (
       <>{bookings.length===0?( <div className=""><div className="relative w-full h-[500px] " ><div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1707396174174-df82a17309c9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  ></div>
   <div className="absolute inset-0 bg-red-500/60"></div>
   <div className="relative z-10 text-white h-full flex flex-col items-center justify-center">  <p className="text-center font-bold text-4xl text-white italic" >There is no booking details yet</p></div></div></div>):(<div className="my-10"> <h1 className="text-2xl font-bold text-center my-5">My Bookings</h1> <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Tutor name</Table.Column>
            <Table.Column>Student Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {bookings.map((booking)=>(<Table.Row key={booking._id}>
              <Table.Cell>{booking?.tutorname}</Table.Cell>
              <Table.Cell>{booking?.name}</Table.Cell>
              <Table.Cell>{booking?.email}</Table.Cell>
              <Table.Cell>{booking?.bookingStatus || "confirmed"}</Table.Cell>
              <Table.Cell><DeleteAlert bookingId={booking?._id}/></Table.Cell>
            </Table.Row>))
            }
            
            
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table></div>)}
           
       </>
          
           
    );
};

export default MyBookingPage;