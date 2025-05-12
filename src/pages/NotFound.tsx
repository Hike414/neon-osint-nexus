
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg p-4">
      <div className="cyberpunk-card max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-7xl neon-text font-bold mb-2">404</h1>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto mb-6"></div>
          <p className="text-xl mb-6">This intelligence resource doesn't exist.</p>
          <p className="text-gray-400 mb-8">
            The OSINT resource you're trying to access cannot be found or may have been moved to a different location.
          </p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/20 hover:bg-cyber-cyan/30 text-cyber-cyan border border-cyber-cyan/50 rounded-lg transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Return to Dashboard</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
