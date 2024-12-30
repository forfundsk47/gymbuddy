import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MuscleAssignmentDialog from "@/components/MuscleAssignmentDialog";

const Index = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const workouts = [
    { title: "Upper Body Strength", duration: "45 min", exercises: 8 },
    { title: "Core Workout", duration: "30 min", exercises: 6 },
    { title: "Leg Day", duration: "60 min", exercises: 10 },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome to DailyGymMate</h1>
        </div>
        
        <section>
          <h2 className="text-xl font-semibold mb-4 text-secondary">Your Workouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, index) => (
              <div
                key={index}
                onClick={() => navigate(`/workout/${workout.title}`)}
                className="cursor-pointer"
              >
                <WorkoutCard {...workout} />
              </div>
            ))}
          </div>
        </section>

        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-accent hover:bg-accent/90 shadow-lg"
          onClick={() => setDialogOpen(true)}
        >
          <Plus className="h-6 w-6" />
        </Button>

        <MuscleAssignmentDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </main>
    </div>
  );
};

export default Index;