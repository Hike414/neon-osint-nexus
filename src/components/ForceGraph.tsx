
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SimulationNodeDatum } from 'd3-force';

interface ToolNode extends SimulationNodeDatum {
  id: string;
  name: string;
  type?: 'T' | 'D' | 'R' | 'M';
  url?: string;
  children?: ToolNode[];
}

interface ForceGraphProps {
  data: ToolNode;
  searchTerm: string;
}

const ForceGraph = ({ data, searchTerm }: ForceGraphProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight * 0.8;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    // Create a group for zoom transformation
    const g = svg.append("g");

    // Get graph data in the required format
    const hierarchyData = d3.hierarchy(data);
    const links = hierarchyData.links();
    const nodes = hierarchyData.descendants();

    // Get color based on node type
    const getNodeColor = (d: any) => {
      if (!d.data.type) return '#00FFFF'; // Default cyan
      switch (d.data.type) {
        case 'T': return '#9945FF'; // Purple
        case 'D': return '#14F195'; // Green
        case 'R': return '#FFD700'; // Yellow
        case 'M': return '#FF4500'; // Red
        default: return '#00FFFF'; // Default cyan
      }
    };

    // Check if node matches search term
    const matchesSearch = (d: any) => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return d.data.name.toLowerCase().includes(term);
    };

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(70))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(30));

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', 'rgba(255, 255, 255, 0.2)')
      .attr('stroke-opacity', 0.6);

    // Create node groups with simplified styling
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .style('cursor', (d: any) => d.data.url ? 'pointer' : 'default')
      .style('opacity', (d: any) => matchesSearch(d) ? 1 : 0.2);

    // Add circles to nodes with simple styling
    node.append('circle')
      .attr('r', (d: any) => d.children ? 8 : 5)
      .attr('fill', (d: any) => getNodeColor(d))
      .attr('stroke', '#121212')
      .attr('stroke-width', 1.5);

    // Add text labels to nodes
    node.append('text')
      .text((d: any) => d.data.name)
      .attr('x', 10)
      .attr('y', 3)
      .attr('font-size', '10px')
      .attr('fill', 'white')
      .style('pointer-events', 'none');

    // Add invisible larger circle for better click targeting
    node.append('circle')
      .attr('r', 15)
      .attr('fill', 'transparent')
      .style('pointer-events', 'all');

    // Add title for tooltip
    node.append('title')
      .text((d: any) => {
        let tooltip = d.data.name;
        if (d.data.url) tooltip += `\nURL: ${d.data.url}`;
        if (d.data.type) tooltip += `\nType: ${d.data.type}`;
        return tooltip;
      });

    // Add click handler with event propagation stopped
    node.on('click', (event, d: any) => {
      // Stop propagation to prevent zoom interference
      event.stopPropagation();
      
      if (d.data.url) {
        window.open(d.data.url, '_blank');
      }
    });

    // Update positions on each tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    // Drag functionality
    const drag = d3.drag<SVGGElement, any>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag as any);

    // Improved zoom functionality with better limits and controls
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 3]) // Limit zoom range
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
      });

    // Initialize zoom behavior with a gentle transition and disable zooming on drag
    svg.call(zoom as any)
      .call(zoom.transform as any, d3.zoomIdentity.translate(width / 6, height / 6).scale(0.8))
      // Add double-click behavior to reset zoom
      .on("dblclick.zoom", () => {
        svg.transition()
          .duration(750)
          .call(zoom.transform as any, d3.zoomIdentity.translate(width / 6, height / 6).scale(0.8));
      });

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.8;
      svg.attr('width', width).attr('height', height);
      simulation.force('center', d3.forceCenter(width / 2, height / 2));
      simulation.alpha(1).restart();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      simulation.stop();
    };
  }, [data, searchTerm]);

  return (
    <div className="w-full overflow-hidden">
      <svg ref={svgRef} className="w-full"></svg>
    </div>
  );
};

export default ForceGraph;
