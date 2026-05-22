

export const fetchTutors = async (params = {}) => {
  const query = new URLSearchParams();
 console.log("PARAMS:", params); // 👈 ADD THIS
  if (params.search) query.set("search", params.search);
  if (params.startDate) query.set("startDate", params.startDate);
  if (params.endDate) query.set("endDate", params.endDate);

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query.toString()}`;

  console.log("FINAL URL:", url); // 👈 ADD THIS

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};
