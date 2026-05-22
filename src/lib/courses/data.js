// export const fetchTutors= async(searchTutor= "")=>{
//     const res= await fetch(`http://localhost:5000/tutors?search=${searchTutor}`);
//     const data= await res.json();
//     return data || []
// }
// export const fetchTutors = async (queryString = "") => {
//   const res = await fetch(
//     `http://localhost:5000/tutors?${queryString}`,
//     { cache: "no-store" },
//   );
//   return await res.json();
// };

export const fetchTutors = async (params = {}) => {
  const query = new URLSearchParams();
 console.log("PARAMS:", params); // 👈 ADD THIS
  if (params.search) query.set("search", params.search);
  if (params.startDate) query.set("startDate", params.startDate);
  if (params.endDate) query.set("endDate", params.endDate);

  const url = `http://localhost:5000/tutors?${query.toString()}`;

  console.log("FINAL URL:", url); // 👈 ADD THIS

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};
