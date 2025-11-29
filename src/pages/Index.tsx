import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { SearchBar } from "@/components/SearchBar";
import { FeedItem, FeedStatus } from "@/components/FeedItem";
import { toast } from "sonner";

interface FeedItemData {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  status: FeedStatus;
}

const mockFeedData: FeedItemData[] = [
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
  const [feedItems, setFeedItems] = useState<FeedItemData[]>(mockFeedData);

  const handleSearch = (query: string) => {
    toast.success("Analyzing...", {
      description: `Checking: ${query}`,
    });
    // Here you would call your Django backend API
    console.log("Search query:", query);
  };

  const handleImageUpload = (file: File) => {
    toast.success("Image uploaded", {
      description: `Analyzing: ${file.name}`,
    });
    // Here you would call your Django backend API
    console.log("Image file:", file);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-6 space-y-6">
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} onImageUpload={handleImageUpload} />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">Live Feed</h2>
            {feedItems.map((item) => (
              <FeedItem key={item.id} {...item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
