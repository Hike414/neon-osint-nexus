
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  url?: string;
  type?: 'T' | 'D' | 'R' | 'M';
}

interface CategoryCardProps {
  title: string;
  resources: Resource[];
}

const CategoryCard = ({ title, resources }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get background color based on resource type
  const getTypeColor = (type?: string) => {
    if (!type) return 'bg-cyber-cyan';
    switch (type) {
      case 'T': return 'bg-cyber-purple';
      case 'D': return 'bg-cyber-green';
      case 'R': return 'bg-yellow-400';
      case 'M': return 'bg-red-500';
      default: return 'bg-cyber-cyan';
    }
  };

  // Get label based on resource type
  const getTypeLabel = (type?: string) => {
    if (!type) return '';
    switch (type) {
      case 'T': return '(T)';
      case 'D': return '(D)';
      case 'R': return '(R)';
      case 'M': return '(M)';
      default: return '';
    }
  };

  return (
    <div className="cyberpunk-card mb-4 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-medium flex items-center gap-2">
          <span className="neon-text">{title}</span>
          <span className="text-xs text-gray-400">({resources.length})</span>
        </h3>
        <button className="p-1 rounded-full hover:bg-cyber-light/30 transition-colors">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="flex items-center p-2 rounded-md bg-cyber-light/20 hover:bg-cyber-light/30 transition-colors"
            >
              <span className={`w-3 h-3 rounded-full ${getTypeColor(resource.type)} mr-2`}></span>
              <span className="flex-1 truncate">{resource.name} {getTypeLabel(resource.type)}</span>
              {resource.url && (
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-cyber-cyan hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
