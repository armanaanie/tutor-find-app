'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { Button } from '@heroui/react';

const AddTutorPage = () => {
  const onSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const tutor= Object.fromEntries(formData.entries())
    console.log(tutor)
    const res=await fetch("http://localhost:5000/tutors",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(tutor)
    })
    const data= await res.json();
   if(data.insertedId){
    toast.success("Tutor added successfully")
   }

   else{
    toast.error("Try again.")
   }
  console.log(data)
  }
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-3/5 mx-auto py-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Add Tutor
      </h1>

      <form className="space-y-5" onSubmit={onSubmit}>

        
        <div>
          <label className="font-semibold block mb-2">
            Tutor Name
          </label>

          <input
            name="tutorname"
            type="text"
            required
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
            required
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
              required
              defaultValue=""
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
              required
              defaultValue=""
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
            required
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
            required
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
              required
              defaultValue=""
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

            <DatePicker
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
            type="text"
            required
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
            required
            placeholder="Location"
            className="input input-bordered w-full"
          />
        </div>

       
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white"
        >
          Add Tutor
        </Button>

      </form>
    </div>
  );
};

export default AddTutorPage;