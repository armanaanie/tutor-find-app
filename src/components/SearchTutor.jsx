"use client";

import { Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchTutor() {

const router = useRouter();

  const [search, setSearch] = useState("");
  const buildAndPush = (next = {}) => {
    const params = new URLSearchParams();
    const finalSearch = next.search ?? search;
    if (finalSearch) params.set("search", finalSearch);
    router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${params.toString()}`);
    
  };
  const handleSearch = () => {
    buildAndPush();
  };
  return (
    <div className="flex">
      
            <div className="relative flex-1">
            

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search  by tutor name..."
                className="w-full h-8 pl-20 pr-5 rounded-full border border-border bg-background"
              />
            </div>

      <button
              onClick={handleSearch}
              className="h-8 px-3 rounded-full bg-blue-500 text-white absolute "
            >
             
              Search
            </button>
      
          </div>
    
  );
}