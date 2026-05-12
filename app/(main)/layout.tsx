import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { checkRole } from "@/lib/roles"

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const isAdmin = await checkRole('admin')
    return (
        <div className="flex flex-col min-h-screen overflow-x-clip">
            <Navbar isAdmin={isAdmin} />
            <main className="flex grow flex-col">
                {children}
            </main>
            <Footer />
        </div>  
    )
}