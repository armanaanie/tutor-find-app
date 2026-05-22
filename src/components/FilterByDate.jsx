"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const FilterByDate = () => {
  const router = useRouter();

  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const buildAndPush = (next = {}) => {
    const params = new URLSearchParams();

   
    const finalStart = next.startDate ?? startDate;
    const finalEnd = next.endDate ?? endDate;

    
    if (finalStart) params.set("startDate", finalStart);
    if (finalEnd) params.set("endDate", finalEnd);

    router.push(`/tutors?${params.toString()}`);
  };

  
  const handleFilter = () => {
    buildAndPush();
  };
  return (
    <div className="flex gap-4 items-end my-5">

     {/* START DATE */}
      <div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered"
        />
      </div>

      {/* END DATE */}
      <div>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered"
        />
      </div>

      {/* FILTER BUTTON */}
      <button onClick={handleFilter} className="btn bg-blue-500 text-white">
        Apply Filter
      </button>


    </div>
  );
};

export default FilterByDate;