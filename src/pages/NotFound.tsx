import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-dashboard-bg">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
