import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { SearchBar } from "@/components/SearchBar";
import { FeedItem } from "@/components/FeedItem";
import { toast } from "sonner";

const mockFeedData = [
  {
    id: "1",
    title: "Breaking: New policy announced - 12:17:43 PM",
    source: "Official Source",
    timestamp: "2 hours ago",
    status: "pending",
  },
  {
    id: "2",
    title: "Earthquake reported in California",
    source: "USGS",
    timestamp: "5 hours ago",
    status: "verified",
  },
  {
    id: "3",
    title: "Health advisory released by WHO",
    source: "WHO Official",
    timestamp: "1 day ago",
    status: "verified",
  },
];

const Index = () => {
  const [feedItems, setFeedItems] = useState(mockFeedData);

  const handleSearch = (query) => {
    toast.success("Analyzing...", {
      description: `Checking: ${query}`,
    });
    console.log("Search query:", query);
  };

  const handleImageUpload = (file) => {
    toast.success("Image uploaded", {
      description: `Analyzing: ${file.name}`,
    });
    console.log("Image file:", file);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-8 space-y-8">
          <div className="flex justify-center pt-8">
            <SearchBar onSearch={handleSearch} onImageUpload={handleImageUpload} />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Live Feed</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Live</span>
              </div>
            </div>
            <div className="space-y-4">
              {feedItems.map((item) => (
                <FeedItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
