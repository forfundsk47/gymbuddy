import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  muscle: string;
}

interface MuscleAssignmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (muscle: string, exercises: Exercise[]) => void;
}

const muscles = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Legs",
  "Core",
  "Glutes",
];

const MuscleAssignmentDialog = ({
  open,
  onOpenChange,
  onSave,
}: MuscleAssignmentDialogProps) => {
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("3");
  const [reps, setReps] = useState("12");
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleAddExercise = () => {
    if (!selectedMuscle || !exerciseName) return;

    const newExercise: Exercise = {
      name: exerciseName,
      sets: parseInt(sets),
      reps: parseInt(reps),
      muscle: selectedMuscle,
    };

    setExercises([...exercises, newExercise]);
    setExerciseName("");
  };

  const handleSave = () => {
    onSave(selectedMuscle, exercises);
    setSelectedMuscle("");
    setExercises([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-secondary text-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Exercises for Workout
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {muscles.map((muscle) => (
              <Button
                key={muscle}
                variant={selectedMuscle === muscle ? "default" : "outline"}
                onClick={() => setSelectedMuscle(muscle)}
                className="w-full"
              >
                {muscle}
              </Button>
            ))}
          </div>

          {selectedMuscle && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="exercise">Exercise Name</Label>
                <Input
                  id="exercise"
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                  className="bg-accent/50"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sets">Sets</Label>
                  <Input
                    id="sets"
                    type="number"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    className="bg-accent/50"
                  />
                </div>
                <div>
                  <Label htmlFor="reps">Reps</Label>
                  <Input
                    id="reps"
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className="bg-accent/50"
                  />
                </div>
              </div>

              <Button onClick={handleAddExercise} className="w-full">
                Add Exercise
              </Button>

              {exercises.length > 0 && (
                <div className="space-y-2">
                  <Label>Added Exercises:</Label>
                  {exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-accent/30 p-2 rounded-md text-sm"
                    >
                      {exercise.name} - {exercise.sets}×{exercise.reps}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90"
            disabled={!selectedMuscle || exercises.length === 0}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MuscleAssignmentDialog;