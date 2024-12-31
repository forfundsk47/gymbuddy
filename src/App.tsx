import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkoutDetail from "./pages/WorkoutDetail";
import MusicPlayer from "./components/MusicPlayer";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary pb-24">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workout/:title" element={<WorkoutDetail />} />
        </Routes>
        <MusicPlayer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;