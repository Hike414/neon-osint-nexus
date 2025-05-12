
const Footer = () => {
  return (
    <footer className="border-t border-cyber-light/30 mt-12 py-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-400">
              OSINT Framework - A collection of OSINT tools and resources
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/lockfale/osint-framework" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/jnordine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://osintframework.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              Official Site
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          Licensed under the MIT License.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
