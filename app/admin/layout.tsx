import AdminSidebar from "@/components/shared/AdminSidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AdminSidebar />

            <SidebarInset className="min-h-screen bg-slate-50">
                <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50" />

                            <div>
                                <p className="text-[18px] font-bold tracking-tight text-slate-950">
                                    Admin Panel
                                </p>

                                <p className="hidden text-[14px] font-semibold text-slate-500 sm:block">
                                    Manage users, analytics, and platform activity
                                </p>
                            </div>
                        </div>

                        <SignOutButton>
                            <button className="hidden h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-[16px] font-bold tracking-tight text-white transition-all duration-200 hover:bg-slate-800 md:inline-flex">
                                Sign out
                            </button>
                        </SignOutButton>
                    </div>
                </nav>

                <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}