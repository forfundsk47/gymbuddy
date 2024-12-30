import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutSummary {
  exercises: number;
  duration: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [workoutSummaries, setWorkoutSummaries] = useState<Record<string, WorkoutSummary>>({});
  
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    // Load workout summaries for each day
    const summaries: Record<string, WorkoutSummary> = {};
    days.forEach(day => {
      const savedExercises = localStorage.getItem(`workout-${day.toLowerCase()}`);
      if (savedExercises) {
        const exercises = JSON.parse(savedExercises);
        summaries[day.toLowerCase()] = {
          exercises: exercises.length,
          duration: exercises.length > 0 ? `${exercises.length * 5} mins` : "Plan your workout"
        };
      } else {
        summaries[day.toLowerCase()] = {
          exercises: 0,
          duration: "Plan your workout"
        };
      }
    });
    setWorkoutSummaries(summaries);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Weekly Workout Plan</h1>
        </div>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day) => {
              const summary = workoutSummaries[day.toLowerCase()] || {
                exercises: 0,
                duration: "Plan your workout"
              };
              return (
                <div
                  key={day}
                  onClick={() => navigate(`/workout/${day.toLowerCase()}`)}
                  className="cursor-pointer"
                >
                  <WorkoutCard
                    title={day}
                    duration={summary.duration}
                    exercises={summary.exercises}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;