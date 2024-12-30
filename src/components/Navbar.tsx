import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-white">DailyGymMate</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/workouts" className="text-white hover:text-primary transition-colors">
            Workouts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;