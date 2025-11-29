import { MapPin, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TopBar() {
  return (
    <header className="h-16 glass-effect border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">Mumbai, India</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Select defaultValue="en">
          <SelectTrigger className="w-20 h-9 text-sm border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="hi">HI</SelectItem>
            <SelectItem value="es">ES</SelectItem>
          </SelectContent>
        </Select>
        
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-accent relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-destructive/20 hover:text-destructive">
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
