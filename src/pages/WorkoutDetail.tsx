import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import MuscleAssignmentDialog from "@/components/MuscleAssignmentDialog";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  muscle: string;
}

const WorkoutDetail = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");

  const handleSaveMuscleExercises = (muscle: string, newExercises: Exercise[]) => {
    setExercises((prevExercises) => [...prevExercises, ...newExercises]);
    setSelectedMuscle(muscle);
    toast.success("Exercises added successfully!");
  };

  const groupedExercises = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.muscle]) {
      acc[exercise.muscle] = [];
    }
    acc[exercise.muscle].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white ml-2 capitalize">
            {title} Workout
          </h1>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedExercises).map(([muscle, muscleExercises]) => (
            <div key={muscle} className="space-y-4">
              <h2 className="text-xl font-semibold text-white">{muscle}</h2>
              <div className="space-y-3">
                {muscleExercises.map((exercise, index) => (
                  <div
                    key={`${exercise.name}-${index}`}
                    className="bg-secondary rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-white font-semibold">{exercise.name}</h3>
                      <p className="text-white/80 text-sm">
                        {exercise.sets} sets × {exercise.reps} reps
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-accent hover:bg-accent/90 shadow-lg"
          onClick={() => setDialogOpen(true)}
        >
          <Plus className="h-6 w-6" />
        </Button>

        <MuscleAssignmentDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSave={handleSaveMuscleExercises}
        />
      </div>
    </div>
  );
};

export default WorkoutDetail;