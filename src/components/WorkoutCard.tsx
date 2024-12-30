import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Dumbbell } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: string;
  exercises: number;
}

const WorkoutCard = ({ title, duration, exercises }: WorkoutCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-secondary text-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-white/80">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="h-4 w-4 mr-1" />
            <span>{exercises} exercises</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;