import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const sources = [
  { name: "Official Government Sources", count: 245, verified: true },
  { name: "News Agencies", count: 189, verified: true },
  { name: "Academic Institutions", count: 156, verified: true },
  { name: "Health Organizations", count: 98, verified: true },
];

const Sources = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-8 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Trusted Sources</h1>
            <div className="grid gap-6 sm:grid-cols-2">
              {sources.map((source) => (
                <Card 
                  key={source.name} 
                  className="p-6 glass-effect border-2 hover:border-primary/50 transition-all duration-300 rounded-xl hover:scale-105 cursor-pointer hover-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success/10 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{source.name}</h3>
                      <p className="text-muted-foreground font-medium">{source.count} verified reports</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sources;
