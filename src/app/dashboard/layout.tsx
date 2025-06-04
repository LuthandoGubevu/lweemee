import type React from 'react';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import AuthHeader from '@/components/shared/AuthHeader';
import MainSidebar from '@/components/shared/MainSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <MainSidebar />
      <SidebarRail />
      <SidebarInset className="flex flex-col">
        <AuthHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
