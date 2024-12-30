import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const WorkoutDetail = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  const exercises = [
    { name: "Push-ups", sets: 3, reps: 12 },
    { name: "Pull-ups", sets: 3, reps: 8 },
    { name: "Squats", sets: 4, reps: 15 },
  ];

  return (
    <div className="min-h-screen bg-primary p-4">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold text-white ml-2">{title}</h1>
      </div>

      <div className="space-y-4">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-white font-semibold">{exercise.name}</h3>
              <p className="text-white/80 text-sm">
                {exercise.sets} sets × {exercise.reps} reps
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400"
              size="icon"
            >
              <CheckCircle className="h-6 w-6" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutDetail;