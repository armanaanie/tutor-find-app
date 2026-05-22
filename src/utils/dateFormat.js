// src/utils/dateFormat.js

export const normalizeDate = (dateStr) => {
  if (!dateStr) return null;

  // already Date object
  if (dateStr instanceof Date) {
    return dateStr.getTime();
  }

  // timestamp
  if (typeof dateStr === "number") {
    return dateStr;
  }

  // must be string
  if (typeof dateStr !== "string") {
    console.log("Invalid date:", dateStr);
    return null;
  }

  const [day, month, year] = dateStr.split("/");

  return new Date(`${year}-${month}-${day}`).getTime();
};