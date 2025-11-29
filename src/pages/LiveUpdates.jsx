import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { FeedItem } from "@/components/FeedItem";

const liveUpdates = [
  {
    id: "1",
    title: "Real-time update: Political statement fact-checked",
    source: "Fact-Check Team",
    timestamp: "Just now",
    status: "false",
  },
  {
    id: "2",
    title: "Social media claim verified",
    source: "Verification Team",
    timestamp: "2 minutes ago",
    status: "verified",
  },
];

const LiveUpdates = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-8 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Live Updates</h1>
            <div className="space-y-4">
              {liveUpdates.map((item) => (
                <FeedItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LiveUpdates;
