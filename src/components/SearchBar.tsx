import { useState } from "react";
import { Search, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onImageUpload: (file: File) => void;
}

export function SearchBar({ onSearch, onImageUpload }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter text, URL, or paste content to analyze..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 h-12 bg-card border-border"
          />
        </div>
        
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-12 px-4 flex-1 sm:flex-initial"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <Upload className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline">Upload Image</span>
          </Button>
          
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          
          <Button type="submit" className="h-12 px-6 flex-1 sm:flex-initial">
            Analyze
          </Button>
        </div>
      </div>
    </form>
  );
}
