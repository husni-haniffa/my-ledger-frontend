import UserSidebar from "@/components/shared/UserSidebar"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <UserSidebar/>
            <SidebarInset className="bg-slate-50">
                <nav className="bg-white border-b">
                    <div className="container flex items-center justify-between py-4">
                        <SidebarTrigger />
                        <SignOutButton>
                            <Button className="bg-emerald-950">
                                Sign out
                            </Button>
                        </SignOutButton>
                    </div>
                </nav>
                <main className="container py-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}