import { BookSessionmodal } from "@/components/BookSessionmodal";
import Link from "next/link";


const TutorDetailsPage = async({params}) => {
    const {id}= await params;
    const res = await fetch(`http://localhost:5000/tutors/${id}`)
    const tutor= await res.json()
    console.log(tutor)
   
    return (
        <div className="my-10 mx-auto">
           <h1 className="text-2xl font-semibold text-center my-5">Details about <span className="text-blue-900">{tutor?.tutorname}</span></h1>
           <div className="card bg-base-100  shadow-sm"><figure className="h-50">
    <img
      src={tutor?.image}
      alt="tutor image" className="w-full h-[300px] object-contain object-top" />
  </figure>
  <div className="card-body">
     <span className={`badge badge-sm ${tutor.subject==="ICT"?"bg-blue-200":tutor.subject==="English"?"bg-amber-200":tutor.subject==="Chemistry"?"bg-green-200":tutor.subject==="Mathematics"?"bg-red-200":tutor.subject==="Biology"?"bg-orange-200":"bg-purple-200"}`}>{tutor?.subject}</span>
    <h2 className="card-title">{tutor?.tutorname}</h2>
    <p><span className="font-bold">Institute and Experience:</span>{tutor?.institution},<span className="font-bold"> Location:</span>{tutor?.location}</p>
    <p><span className="font-bold">Hourly fee:</span>{tutor?.hourlyfee} , <span className="font-bold">Method:</span>{tutor?.method}</p>
    <p><span className="font-bold">Select day and time:</span>{tutor?.selectDayandTime}, <span className="font-bold">Slot:</span> {tutor?.slot}
    </p>
   
    
    <div className="card-actions justify-end">
      <BookSessionmodal/>
    </div>
  </div></div>
           
</div>
    
    );
};

export default TutorDetailsPage;