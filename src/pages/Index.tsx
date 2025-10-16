import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent">
      <div className="text-center animate-fade-in space-y-8 px-4">
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Quantum
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-md mx-auto">
          Your intelligent financial coach.
        </p>
        <Button 
          size="lg" 
          className="mt-8 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
