import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BellRing } from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline text-foreground">Alerts</h1>
        <p className="text-muted-foreground">Stay updated with important notifications.</p>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Alerts Configuration</CardTitle>
          <CardDescription>
            This section will allow users to configure alerts for mention spikes, sentiment shifts, and new trending topics.
            Alerts can be delivered via email or in-app notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <BellRing className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-headline">Alerts Feature Coming Soon!</h3>
          <p className="text-muted-foreground max-w-md">
            We are working hard to bring you a comprehensive alerting system. 
            You&apos;ll soon be able to set up custom alerts to stay on top of crucial brand mentions and trends in real-time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
