import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FeedItem({ title, source, timestamp, status }) {
  const statusConfig = {
    verified: {
      icon: CheckCircle,
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/30",
      glow: "shadow-success/20",
    },
    false: {
      icon: AlertCircle,
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/30",
      glow: "shadow-destructive/20",
    },
    pending: {
      icon: Clock,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/30",
      glow: "shadow-warning/20",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card 
      className={cn(
        "p-5 glass-effect border-2 hover:border-primary/50 transition-all duration-300 rounded-xl cursor-pointer",
        "hover:scale-[1.02] hover:shadow-xl",
        config.border,
        config.glow
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-foreground text-lg leading-snug">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">by {source}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{timestamp}</span>
          </div>
        </div>
        
        <div className={cn("p-3 rounded-xl", config.bg, "transition-transform hover:scale-110")}>
          <StatusIcon className={cn("w-6 h-6", config.color)} />
        </div>
      </div>
    </Card>
  );
}
