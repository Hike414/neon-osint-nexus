
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ForceGraph from '../components/ForceGraph';
import Legend from '../components/Legend';
import CategoryCard from '../components/CategoryCard';
import { osintData } from '../data/osintData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten the data structure to get all resources
  const flattenResources = (data: any, categories: any = {}) => {
    if (!data) return categories;
    
    if (data.children) {
      if (data.id !== 'root') {
        categories[data.id] = {
          name: data.name,
          resources: data.children.filter((child: any) => !child.children).map((child: any) => ({
            id: child.id,
            name: child.name,
            url: child.url,
            type: child.type
          }))
        };
      }
      
      data.children.forEach((child: any) => {
        flattenResources(child, categories);
      });
    }
    
    return categories;
  };

  const categories = flattenResources(osintData);

  // Filter categories based on search term
  const filteredCategories = Object.values(categories).filter(
    (category: any) => 
      searchTerm === '' || 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.resources.some((resource: any) => 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col bg-cyber-bg">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 cyberpunk-card">
          <div className="flex items-start gap-4">
            <div className="bg-cyber-cyan/20 p-3 rounded-lg">
              <Info className="h-6 w-6 text-cyber-cyan" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">About OSINT Framework</h2>
              <p className="text-gray-300 mb-4">
                The OSINT Framework is a collection of free open source intelligence tools and resources. 
                It's designed to help with various security investigation tasks, including finding information about people,
                companies, domains, and more using publicly available data sources.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-cyber-dark/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 neon-text">Free Resources</h3>
                  <p className="text-gray-400">All tools focus on gathering information from free sources or resources.</p>
                </div>
                <div className="bg-cyber-dark/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 neon-purple-text">Community Driven</h3>
                  <p className="text-gray-400">Contributions are welcome via GitHub pull requests to improve the collection.</p>
                </div>
                <div className="bg-cyber-dark/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 neon-green-text">MIT Licensed</h3>
                  <p className="text-gray-400">Open source under the MIT License for free use and modification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="visualization">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="visualization" className="text-base">Interactive Graph</TabsTrigger>
            <TabsTrigger value="categories" className="text-base">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="visualization" className="mt-0">
            <Legend />
            <div className="cyberpunk-card">
              <ForceGraph data={osintData} searchTerm={searchTerm} />
            </div>
          </TabsContent>
          
          <TabsContent value="categories" className="mt-0">
            <Legend />
            <div className="space-y-4">
              {filteredCategories.map((category: any) => (
                <CategoryCard 
                  key={category.name} 
                  title={category.name} 
                  resources={category.resources.filter((resource: any) => 
                    searchTerm === '' || 
                    resource.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )} 
                />
              ))}
              {filteredCategories.length === 0 && (
                <div className="cyberpunk-card text-center py-12">
                  <h3 className="text-xl mb-2">No results found</h3>
                  <p className="text-gray-400">Try adjusting your search query</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
