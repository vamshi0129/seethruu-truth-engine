import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <TopBar />
        
        <main className="p-4 sm:p-8 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Settings</h1>
            
            <Card className="p-8 glass-effect border-2 rounded-xl space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors">
                    <Label htmlFor="live-updates" className="cursor-pointer font-medium">Live Updates</Label>
                    <Switch id="live-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors">
                    <Label htmlFor="fact-checks" className="cursor-pointer font-medium">Fact Check Alerts</Label>
                    <Switch id="fact-checks" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">API Configuration</h2>
                <div className="space-y-3">
                  <Label htmlFor="api-endpoint" className="text-base font-medium">Backend API Endpoint</Label>
                  <Input 
                    id="api-endpoint" 
                    placeholder="https://your-django-backend.com/api" 
                    className="glass-effect border-2 h-12 rounded-lg"
                  />
                </div>
              </div>
              
              <Button className="w-full h-12 gradient-bg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-semibold text-base">
                Save Settings
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
