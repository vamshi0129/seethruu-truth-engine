import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FeedStatus = "verified" | "false" | "pending";

interface FeedItemProps {
  title: string;
  source: string;
  timestamp: string;
  status: FeedStatus;
}

export function FeedItem({ title, source, timestamp, status }: FeedItemProps) {
  const statusConfig = {
    verified: {
      icon: CheckCircle,
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20",
    },
    false: {
      icon: AlertCircle,
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/20",
    },
    pending: {
      icon: Clock,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/20",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className={cn("p-4 bg-card border hover:border-primary/50 transition-all duration-200", config.border)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">by {source}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
        
        <div className={cn("p-2 rounded-full", config.bg)}>
          <StatusIcon className={cn("w-5 h-5", config.color)} />
        </div>
      </div>
    </Card>
  );
}
