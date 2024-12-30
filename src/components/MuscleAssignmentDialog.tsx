import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

interface MuscleAssignmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
}: MuscleAssignmentDialogProps) => {
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

  const handleSave = () => {
    // Here you would typically save to a backend
    toast.success("Muscles assigned successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-secondary text-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Assign Muscles for Workout
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {muscles.map((muscle) => (
            <div key={muscle} className="flex items-center space-x-2">
              <Checkbox
                id={muscle}
                checked={selectedMuscles.includes(muscle)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedMuscles([...selectedMuscles, muscle]);
                  } else {
                    setSelectedMuscles(
                      selectedMuscles.filter((m) => m !== muscle)
                    );
                  }
                }}
              />
              <label
                htmlFor={muscle}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {muscle}
              </label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MuscleAssignmentDialog;