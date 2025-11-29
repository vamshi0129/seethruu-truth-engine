import { MapPin, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TopBar() {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">Mumbai, India</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Select defaultValue="en">
          <SelectTrigger className="w-20 h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="hi">HI</SelectItem>
            <SelectItem value="es">ES</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="w-4 h-4" />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
