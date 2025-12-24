import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeSidebar } from './_components/Sidebar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <HomeSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
