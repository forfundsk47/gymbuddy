import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const workouts = [
    { title: "Upper Body Strength", duration: "45 min", exercises: 8 },
    { title: "Core Workout", duration: "30 min", exercises: 6 },
    { title: "Leg Day", duration: "60 min", exercises: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-secondary">Welcome to DailyGymMate</h1>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Workout
          </Button>
        </div>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Workouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, index) => (
              <WorkoutCard key={index} {...workout} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;