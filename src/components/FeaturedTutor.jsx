import Link from "next/link";

export default async function FeaturedTutor() {
  const res= await fetch("http://localhost:5000/featured-tutors")
const tutors= await res.json()
console.log(tutors)
    

  return (
    <div className="mt-10 w-11/12 mx-auto"><h1 className="text-center text-3xl my-5 font-bold"><Link href="/tutors">Available Tutor</Link></h1>
          <p className="mt-4 text-gray-500  text-m max-w-2xl mx-auto text-center">
            Learn from experienced and highly rated tutors who are passionate
            about helping students succeed.
          </p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tutors.map(tutor=><div className="card bg-base-100  shadow-sm" key={tutor?._id}>
      <figure className="h-50">
        <img
          src={tutor?.image}
          alt="tutor image" className=" " />
      </figure>
      <div className="card-body">
         <span className={`badge badge-s ${tutor.subject==="ICT"?"bg-blue-200":tutor.subject==="English"?"bg-amber-200":tutor.subject==="Chemistry"?"bg-green-200":tutor.subject==="Mathematics"?"bg-red-200":tutor.subject==="Biology"?"bg-orange-200":"bg-purple-200"}`}>{tutor?.subject}</span>
        <h2 className="card-title">{tutor?.tutorname}</h2>
        <p><span className="font-bold">Institute and Experience:</span>{tutor?.institution},<span className="font-bold"> Location:</span>{tutor?.location}</p>
        {/* <p><span className="font-bold">Hourly fee:</span>{tutor?.hourlyfee} , <span className="font-bold">Method:</span>{tutor?.method}</p>
        <p><span className="font-bold">Select day and time:</span>{tutor?.selectDayandTime}, <span className="font-bold">Slot:</span> {tutor?.slot}
        </p> */}
       
        
        <div className="card-actions justify-end">
          <Link href={`/tutors/${tutor?._id}`} className="btn rounded-full bg-blue-500 text-white">Book Session</Link>
        </div>
      </div>
    </div>)
                }
                
            </div></div>
  );
}
