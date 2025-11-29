import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 hover:bg-accent transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </Button>
  );
}
