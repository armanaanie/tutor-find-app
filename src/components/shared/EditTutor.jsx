"use client";


import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { Button } from '@heroui/react';
import { Modal, Surface} from "@heroui/react";
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';



export function EditTutor({tutor}) {
    
    const onSubmit=async(e)=>{
      e.preventDefault();
     const {data:tokenData}=await authClient.token();
      console.log(tokenData)
        const formData=new FormData(e.target)
        const updatetutor= Object.fromEntries(formData.entries())
         const tutorData = {
        ...updatetutor,
    
        
        
    
       
        slot: Number(updatetutor.slot),
      };
        console.log(tutorData)
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(tutorData),
    }
  );
        const data= await res.json();
         
    
       if(data.modifiedCount>0){
        toast.success("Tutor updated successfully");
        window.location.reload();
       }
    
       else{
        toast.error("Try again.")
       }
      console.log(tutorData)
      }

    const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Modal>
      <Button variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
             
              <Modal.Heading>Edit Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="space-y-5" onSubmit={onSubmit}>
                
                        
                        <div>
                          <label className="font-semibold block mb-2">
                            Tutor Name
                          </label>
                
                          <input
                            name="tutorname"
                            type="text"
                            
                          defaultValue={tutor?.tutorname}
                            placeholder="Tutor Name"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                      
                        <div>
                          <label className="font-semibold block mb-2">
                            Photo URL
                          </label>
                
                          <input
                            name="image"
                            type="text"
                            defaultValue={tutor?.image}
                           
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                  
                        <div className="grid md:grid-cols-2 gap-4">
                
                         
                          <div>
                            <label className="font-semibold block mb-2">
                              Subject
                            </label>
                
                            <select
                              name="subject"
                             
                              defaultValue={tutor?.subject}
                              className="select select-bordered w-full"
                            >
                              <option value="" disabled>
                                Select Subject
                              </option>
                
                              <option value="Mathematics">
                                Mathematics
                              </option>
                
                              <option value="Physics">
                                Physics
                              </option>
                
                              <option value="Chemistry">
                                Chemistry
                              </option>
                
                              <option value="Biology">
                                Biology
                              </option>
                
                              <option value="English">
                                English
                              </option>
                
                              <option value="ICT">
                                ICT
                              </option>
                            </select>
                          </div>
                
                          
                          <div>
                            <label className="font-semibold block mb-2">
                              Available Time Slot
                            </label>
                
                            <select
                              name="selectDayandTime"
                              
                              defaultValue={tutor?.selectDayandTime}
                              className="select select-bordered w-full"
                            >
                              <option value="" disabled>
                                Select Time
                              </option>
                
                              <option value="Sun - Thu 9AM - 12PM">
                                Sun - Thu 9AM - 12PM
                              </option>
                
                              <option value="Sun - Thu 5PM - 8PM">
                                Sun - Thu 5PM - 8PM
                              </option>
                
                              <option value="Friday - Sat 7PM - 11PM">
                                Friday - Sat 7PM - 11PM
                              </option>
                            </select>
                          </div>
                        </div>
                
                   
                        <div>
                          <label className="font-semibold block mb-2">
                            Hourly Fee
                          </label>
                
                          <input
                            name="hourlyfee"
                            type="number"
                            defaultValue={tutor?.hourlyfee}
                           
                            placeholder="Hourly Fee"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                  
                        <div>
                          <label className="font-semibold block mb-2">
                            Total Slot
                          </label>
                
                          <input
                            name="slot"
                            type="number"
                            defaultValue={tutor?.slot}
                           
                            placeholder="Total Slot"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                   
                        <div className="grid md:grid-cols-2 gap-4">
                
                          <div>
                            <label className="font-semibold block mb-2">
                              Teaching Method
                            </label>
                
                            <select
                              name="method"
                            
                              defaultValue={tutor?.method}
                              className="select select-bordered w-full"
                            >
                              <option value="" disabled>
                                Select Method
                              </option>
                
                              <option value="Online">
                                Online
                              </option>
                
                              <option value="Offline">
                                Offline
                              </option>
                
                              <option value="Both">
                                Both
                              </option>
                            </select>
                          </div>
                
                   
                          <div>
                            <label className="font-semibold block mb-2">
                              Session Start Date
                            </label>
                
                            <DatePicker name="sessionDate"
                                         selected={selectedDate}
                                         onChange={(date) => setSelectedDate(date)}
                                         showIcon
                                         toggleCalendarOnIconClick
                                         dateFormat="dd/MM/yyyy"
                                         className="input input-bordered w-full"
                                       />
                          </div>
                        </div>
                
                        <div>
                          <label className="font-semibold block mb-2">
                            Institution & Experience
                          </label>
                
                          <input
                            name="institution"
                            defaultValue={tutor.institution}
                            type="text"
                            
                            placeholder="Institution & Experience"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                  
                        <div>
                          <label className="font-semibold block mb-2">
                            Location
                          </label>
                
                          <input
                            name="location"
                            type="text"
                            defaultValue={tutor?.location}
                       
                            placeholder="Location"
                            className="input input-bordered w-full"
                          />
                        </div>
                
                       
                        <Button
                          type="submit" 
                          className="w-full bg-blue-500 text-white"
                        >
                          Update Tutor
                        </Button>
                
                      </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}