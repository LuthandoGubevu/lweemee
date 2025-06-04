
'use client';
import type React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import AuthHeader from '@/components/shared/AuthHeader';
import MainSidebar from '@/components/shared/MainSidebar';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        router.push('/'); // Redirect to login if not authenticated
      }
      setIsLoadingAuth(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoadingAuth) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <div className="space-y-4 p-8 rounded-lg shadow-lg bg-card">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-10 w-full mt-4" />
        </div>
      </div>
    );
  }

  if (!authUser) {
    // This case should ideally be handled by the redirect in useEffect,
    // but it's a fallback.
    return null; 
  }

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
