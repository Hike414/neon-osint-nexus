
const Legend = () => {
  return (
    <div className="cyberpunk-card mb-6">
      <h3 className="neon-text mb-3 text-lg">Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-cyber-cyan"></span>
          <span>Regular Resources</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-cyber-purple"></span>
          <span>(T) Tools - Install Required</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-cyber-green"></span>
          <span>(D) Google Dorks</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
          <span>(R) Registration Required</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-red-500"></span>
          <span>(M) Manual URL Editing</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
