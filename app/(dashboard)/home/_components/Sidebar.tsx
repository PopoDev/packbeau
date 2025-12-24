import { Home, FolderOpen, LayoutTemplate, User } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "All projects", url: "/projects", icon: FolderOpen },
  { title: "Templates", url: "/templates", icon: LayoutTemplate },
];

export function HomeSidebar() {
  return (
    <Sidebar collapsible="none" className="border-r border-border">
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Packbeau
          </Link>
        </div>
      </SidebarHeader>

      <div className="px-4 pb-4">
        <Button variant="secondary" className="w-full justify-center" asChild>
          <Link href="/">New chat</Link>
        </Button>
      </div>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={
                        "flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-accent-foreground"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="px-4 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-accent-foreground">
                <User className="h-4 w-4" />
                <span>Account</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
