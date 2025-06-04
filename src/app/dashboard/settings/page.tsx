'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cog } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Application Settings</CardTitle>
          <CardDescription>
            Configure your Lweemee experience. This section will include options for profile management, notification preferences, connected accounts, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <Cog className="h-16 w-16 text-primary mb-4 animate-spin-slow" />
          <h3 className="text-xl font-semibold mb-2 font-headline">Settings Page Under Construction</h3>
          <p className="text-muted-foreground max-w-md">
            We are currently developing this section. Soon you will be able to customize various aspects of your Lweemee account.
          </p>
        </CardContent>
      </Card>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
