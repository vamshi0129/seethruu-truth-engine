import { Home, Bell, FileText, CheckCircle, Settings, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Live Updates", icon: Bell, href: "/live-updates" },
  { name: "Sources", icon: FileText, href: "/sources" },
  { name: "Fact-Check Summary", icon: CheckCircle, href: "/fact-check" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-3 z-50 md:hidden glass-effect"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 glass-effect border-r border-sidebar-border flex flex-col h-screen fixed left-0 top-0 z-40 transition-all duration-300",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-sidebar-foreground flex items-center gap-3">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🔍</span>
            </div>
            <span className="gradient-text">seeThruu</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground/70",
                "hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200",
                "hover:translate-x-1 hover:shadow-md"
              )}
              activeClassName="gradient-bg text-primary-foreground font-semibold shadow-xl hover-glow"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground text-center">
            Powered by AI • v1.0
          </div>
        </div>
      </aside>
    </>
  );
}
