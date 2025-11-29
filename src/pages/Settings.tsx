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
        
        <main className="p-4 sm:p-6 space-y-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Settings</h1>
            
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Notifications</h2>
                <div className="flex items-center justify-between">
                  <Label htmlFor="live-updates">Live Updates</Label>
                  <Switch id="live-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="fact-checks">Fact Check Alerts</Label>
                  <Switch id="fact-checks" defaultChecked />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">API Configuration</h2>
                <div className="space-y-2">
                  <Label htmlFor="api-endpoint">Backend API Endpoint</Label>
                  <Input 
                    id="api-endpoint" 
                    placeholder="https://your-django-backend.com/api" 
                    className="bg-background"
                  />
                </div>
              </div>
              
              <Button className="w-full">Save Settings</Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
