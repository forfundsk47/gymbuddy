import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";

const Index = () => {
  const navigate = useNavigate();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="min-h-screen bg-primary scrollbar-none overflow-hidden">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Weekly Workout Plan</h1>
        </div>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day) => (
              <div
                key={day}
                onClick={() => navigate(`/workout/${day.toLowerCase()}`)}
                className="cursor-pointer"
              >
                <WorkoutCard
                  title={day}
                  duration="Plan your workout"
                  exercises={0}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;