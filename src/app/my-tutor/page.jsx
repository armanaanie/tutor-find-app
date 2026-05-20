import { Button, Table} from "@heroui/react";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";

import { DeleteTutor } from "@/components/shared/DeleteTutor";
import { EditTutor } from "@/components/shared/EditTutor";



const MyTutorPage = async() => {
    const  session  = await auth.api.getSession({
        headers:await headers()
    })
      if (!session?.user) {
    return (
      <div className="text-center py-10">
        Please login first
      </div>
    );
  }
      const user= session?.user;
      console.log(user,"user grom booking page")
   const res = await fetch("http://localhost:5000/tutors",
    {
        cache:"no-store"
    }
   )
     const tutors= await res.json();
     console.log(tutors,"from tutor page")

    return (
       <>{tutors.length===0?( <div className=""><div className="relative w-full h-[500px] " ><div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1707396174174-df82a17309c9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  ></div>
   <div className="absolute inset-0 bg-red-500/60"></div>
   <div className="relative z-10 text-white h-full flex flex-col items-center justify-center">  <p className="text-center font-bold text-4xl text-white italic" >There is no tutor yet</p></div></div></div>):(<div className="my-10"> <h1 className="text-2xl font-bold text-center my-5">My Tutors</h1> <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
           <Table.Column isRowHeader>Tutor Name</Table.Column>
            <Table.Column >Tutor Image</Table.Column>
            <Table.Column>Subject</Table.Column>
            <Table.Column>Select Day and Time</Table.Column>
            <Table.Column>Hourly fee</Table.Column>
            <Table.Column>Slot</Table.Column>
            <Table.Column>Method</Table.Column>
            <Table.Column>Institution</Table.Column>
            <Table.Column>Location</Table.Column>
             <Table.Column>Session start</Table.Column>
             <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {tutors.map((tutor)=>(<Table.Row key={tutor._id}> 
              <Table.Cell>{tutor?.tutorname}</Table.Cell>
              <Table.Cell><div><img
          src={tutor?.image}
          alt="teacher"
          className="w-12 h-12 rounded-full object-cover"
        /></div></Table.Cell>
              <Table.Cell>{tutor?.subject}</Table.Cell>
              <Table.Cell>{tutor?.selectDayandTime}</Table.Cell>
              <Table.Cell>{tutor?.hourlyfee }</Table.Cell>
              <Table.Cell>{tutor?.slot }</Table.Cell>
              <Table.Cell>{tutor?.method }</Table.Cell>
              <Table.Cell>{tutor?.institution }</Table.Cell>
              <Table.Cell>{tutor?.location }</Table.Cell>
              <Table.Cell>{tutor?.sessionDate }</Table.Cell>
              <Table.Cell><div className="flex gap-3"><EditTutor tutor={tutor}/><DeleteTutor tutorId={tutor?._id}/></div></Table.Cell>
            </Table.Row>))
            }
            
            
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table></div>)}
           
       </>
          
           
    );
};

export default MyTutorPage;