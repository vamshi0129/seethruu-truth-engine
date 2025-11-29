import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { Card } from "@/components/ui/card";

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
        
        <main className="p-4 sm:p-6 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Trusted Sources</h1>
            <div className="grid gap-4 sm:grid-cols-2">
              {sources.map((source) => (
                <Card key={source.name} className="p-6 bg-card border hover:border-primary/50 transition-all">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{source.name}</h3>
                  <p className="text-muted-foreground">{source.count} verified reports</p>
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
