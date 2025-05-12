
import { Search } from "lucide-react";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="py-4 w-full">
      <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-cyan/30 overflow-hidden">
              <div className="absolute animate-pulse-glow">
                <div className="w-8 h-8 rounded-full bg-cyber-cyan/20"></div>
              </div>
              <div className="z-10">
                <span className="neon-text text-xl">O</span>
              </div>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
            <span className="neon-text">OSINT</span>{" "}
            <span className="text-white">Framework</span>
          </h1>
        </div>
        
        <div className="w-full max-w-md relative">
          <Search className="absolute left-3 top-2.5 text-cyber-cyan/70 h-4 w-4" />
          <input
            type="text"
            placeholder="Search tools and resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
