import AdminSidebar from "@/components/shared/AdminSidebar"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AdminSidebar />

            <SidebarInset className="bg-slate-50">
                <nav className="border-b bg-white">
                    <div className="container flex items-center justify-between py-4">
                        <SidebarTrigger />

                        <SignOutButton>
                            <Button className="bg-emerald-950">
                                Sign out
                            </Button>
                        </SignOutButton>
                    </div>
                </nav>

                <main className="container py-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}