import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { FeedItem } from "@/components/FeedItem";

const factChecks = [
  {
    id: "1",
    title: "Climate change data verified by scientific community",
    source: "Science Journal",
    timestamp: "1 week ago",
    status: "verified" as const,
  },
  {
    id: "2",
    title: "False claim about vaccine effectiveness debunked",
    source: "Health Ministry",
    timestamp: "2 weeks ago",
    status: "false" as const,
  },
];

const FactCheck = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-6 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Fact-Check Summary</h1>
            <div className="space-y-4">
              {factChecks.map((item) => (
                <FeedItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactCheck;
