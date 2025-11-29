import { useState } from "react";
import { Search, Upload, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SearchBar({ onSearch, onImageUpload }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }
      onImageUpload(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Enter text, URL, or paste content to analyze..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-4 h-14 glass-effect border-2 border-border hover:border-primary/50 focus:border-primary transition-all rounded-xl text-base shadow-lg"
          />
        </div>
        
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-14 px-6 flex-1 sm:flex-initial glass-effect hover:bg-accent border-2 rounded-xl transition-all hover:scale-105"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <Upload className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium">Upload</span>
          </Button>
          
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          
          <Button 
            type="submit" 
            className="h-14 px-8 flex-1 sm:flex-initial gradient-bg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Analyze
          </Button>
        </div>
      </div>
    </form>
  );
}
